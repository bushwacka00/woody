import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ContactSchema = z.object({
  naam: z.string().min(1, "Naam is verplicht").max(200),
  email: z.string().email("Ongeldig e-mailadres").max(255),
  telefoon: z.string().max(30).optional().default(""),
  bericht: z.string().min(1, "Bericht is verplicht").max(5000),
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { naam, email, telefoon, bericht } = parsed.data;

    const RECIPIENT_EMAIL = Deno.env.get("CONTACT_FORM_RECIPIENT") || "info@woodykozijnen.nl";

    // Use Resend API to send the email
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "E-mail service niet geconfigureerd" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailHtml = `
      <h2>Nieuwe offerte aanvraag via de website</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Naam:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${naam}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">E-mail:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Telefoon:</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${telefoon || 'Niet opgegeven'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Bericht:</td>
          <td style="padding: 8px 12px;">${bericht.replace(/\n/g, '<br/>')}</td>
        </tr>
      </table>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Website <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        subject: `Offerte aanvraag van ${naam}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", JSON.stringify(resendData));
      return new Response(
        JSON.stringify({ error: "Kon e-mail niet verzenden" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "E-mail succesvol verzonden" }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Er is een fout opgetreden" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

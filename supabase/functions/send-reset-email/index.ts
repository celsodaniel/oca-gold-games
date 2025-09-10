import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ResetEmailRequest {
  email: string;
  resetLink: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, resetLink }: ResetEmailRequest = await req.json();

    console.log("Enviando email de recuperação para:", email);

    const emailResponse = await resend.emails.send({
      from: "Paçoca Games <onboarding@resend.dev>",
      to: [email],
      subject: "Recuperação de Senha - Paçoca Games",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; margin-bottom: 10px;">Paçoca Games</h1>
            <h2 style="color: #333; margin-bottom: 20px;">Recuperação de Senha</h2>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
              Olá! Recebemos uma solicitação para redefinir a senha da sua conta no Paçoca Games.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
              Clique no botão abaixo para criar uma nova senha:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetLink}" 
                 style="background: linear-gradient(135deg, #d4af37, #f4e06d); 
                        color: #000; 
                        padding: 15px 30px; 
                        text-decoration: none; 
                        border-radius: 8px; 
                        font-weight: bold; 
                        display: inline-block;">
                Redefinir Senha
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
              Se você não solicitou a recuperação de senha, pode ignorar este email com segurança.
            </p>
            
            <p style="color: #666; font-size: 14px; line-height: 1.5;">
              Este link expira em 24 horas por segurança.
            </p>
          </div>
          
          <div style="text-align: center; color: #999; font-size: 12px; padding-top: 20px; border-top: 1px solid #eee;">
            <p>© 2024 Paçoca Games - Sua loja de jogos favorita</p>
          </div>
        </div>
      `,
    });

    console.log("Email enviado com sucesso:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
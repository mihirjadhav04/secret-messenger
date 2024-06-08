import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResonse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verificationCode: string 
): Promise<ApiResonse> {
    try {
        
        await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Secret Messenger | Verification Code',
        react: VerificationEmail({username, otp: verificationCode}),
        });
        return {
            success: true,
            message: "Verification email sent successfullt."
        }
    } catch (emailError) {
        console.log("Error sending verification email.", emailError);
        return {
            success: false,
            message: "Failed to send verification email."
        }
        
    }
}


import { mailtrapClient, sender } from "../config/mailtrap.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./templates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending verification`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "066cf88a-18b8-4ad8-8885-cc5c29655afa",
      template_variables: {
        company_info_name: "Wishlist complete",
        name: name,
      },
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, link) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", link),
      category: "Password Reset",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending reset password email`, error);
    throw new Error(`Error sending reset password email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset successful",
      html: PASSWORD_RESET_REQUEST_TEMPLATE,
      category: "Password Reset",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending reset password success email`, error);
    throw new Error(`Error sending reset password success email: ${error}`);
  }
};

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface ResetPasswordEmailProps {
  platformName: string;
  resetLink: string;
}

export const ResetPasswordEmail = ({ platformName, resetLink }: ResetPasswordEmailProps) => (
  <Html>
    <Head />
    <Preview>Reset your password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Reset your password</Heading>
        <Text style={text}>
          We received a request to reset your password on {platformName}. Click the button below to
          set a new password.
        </Text>
        <Button href={resetLink} style={button}>
          Reset Password
        </Button>
        <Text style={footer}>If you didn’t request this, you can safely ignore this email.</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  maxWidth: "480px",
  margin: "0 auto",
};

const heading = {
  color: "#333333",
  fontSize: "24px",
  marginBottom: "20px",
};

const text = {
  color: "#555555",
  fontSize: "16px",
  marginBottom: "24px",
  lineHeight: "1.5",
};

const button = {
  backgroundColor: "#007bff",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
};

const footer = {
  color: "#999999",
  fontSize: "14px",
  marginTop: "24px",
  lineHeight: "1.4",
};

export default ResetPasswordEmail;

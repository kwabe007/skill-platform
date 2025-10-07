import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import ParagraphText from "./ParagraphText";

interface ConnectionRequestEmailProps {
  senderFullName: string;
  senderCompanyName: string;
  sencerProfileUrl: string;
  message: string;
  senderEmail: string;
}

export default function ConnectionRequestEmail({
  senderFullName,
  senderCompanyName,
  sencerProfileUrl,
  message,
  senderEmail,
}: ConnectionRequestEmailProps) {
  return (
    <Html>
      <Head />

      <Body style={main}>
        <Tailwind
          config={{
            presets: [pixelBasedPreset],
            theme: {
              extend: {
                colors: {
                  brand: "#1B3D9D",
                },
              },
            },
          }}
        >
          <Container style={{ padding: "32px" }}>
            <Section>
              <Text className="text-lg font-bold">
                {senderCompanyName} wants to connect with you!
              </Text>
            </Section>

            <Section>
              <Row>
                <Column>
                  <Text className="font-bold leading-[1.2] my-0">{senderFullName}</Text>
                  <Text className="leading-[1.2] my-0">{senderCompanyName}</Text>
                </Column>
                <Column>
                  <Button
                    href={sencerProfileUrl}
                    className="bg-brand px-8 py-1 font-medium leading-4 text-white text-sm rounded-md"
                  >
                    See profile
                  </Button>
                </Column>
              </Row>
            </Section>

            <Section className="p-4 mt-4">
              <ParagraphText text={message} />
            </Section>
            <Text>
              To answer, simply reply to this email and it will go to {senderCompanyName} at{" "}
              <span className="font-bold">{senderEmail}</span>.
            </Text>
            <Text style={{ color: "gray" }}>
              You received this email because someone sent you a connection request on our app.
            </Text>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}

// --- Inline styles (for email client compatibility) ---
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  padding: "24px 0",
};

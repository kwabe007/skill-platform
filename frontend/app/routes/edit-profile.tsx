import type { Route } from "./+types/edit-profile";
import Text from "~/components/Text";
import Container from "~/components/Container";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { User } from "lucide-react";
import StandardInputWithLabel from "~/components/StandardInputWithLabel";

export async function loader() {}

export default function EditProfileRoute() {
  return (
    <div>
      <Container className="max-w-xl py-16 space-y-8">
        <div className="text-center">
          <Text as="h1" variant="h2">
            Edit your profile
          </Text>
          <p className="text-muted-foreground mt-6">
            Update your profile information to help other startups find and
            connect with you.
          </p>
        </div>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-primary">
              <User className="size-5" />
              <Text as="h2" variant="h4">
                General information
              </Text>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <StandardInputWithLabel name="fullName" value="Test Name" />
            <StandardInputWithLabel name="company.name" />
            <StandardInputWithLabel
              name="company.description"
              value="Test Name"
              info="A brief description about the company (max 500 characters)."
            />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

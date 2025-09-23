import Container from "~/components/Container";
import ButtonLink from "~/components/ButtonLink";
import { ArrowLeft, Mail, User, Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Form } from "react-router";
import { Button } from "~/components/ui/button";
import { PLATFORM_NAME } from "~/utils";
import StandardInputWithLabel from "~/components/StandardInputWithLabel";

export default function Signup() {
  return (
    <div className="bg-gradient-hero">
      <Container className="max-w-md min-h-screen flex flex-col items-center justify-center lg:px-0">
        <ButtonLink
          className="self-start"
          variant="primary-foreground-ghost"
          to="/"
        >
          <ArrowLeft className="" />
          Back to home
        </ButtonLink>
        <Card className="w-full mt-4">
          <CardHeader as="header" className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-balance">
              Join {PLATFORM_NAME}
            </h1>
            <p className="text-sm text-muted-foreground">
              Create an account to start connecting with other startups
            </p>
          </CardHeader>
          <CardContent>
            <Form className="space-y-4">
              <StandardInputWithLabel
                name="fullName"
                label="Full name"
                icon={User}
                placeholder="Enter your full name"
              />
              <StandardInputWithLabel
                name="email"
                icon={Mail}
                placeholder="Enter your email"
              />
              <StandardInputWithLabel
                name="password"
                type="password"
                icon={Lock}
                placeholder="Enter your password"
              />

              <Button className="w-full">Create account</Button>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-sm text-muted-foreground">
              Already have an account?
            </p>
            <ButtonLink to="/login">Log in here</ButtonLink>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
}

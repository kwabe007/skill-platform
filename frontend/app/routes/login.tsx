import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import Container from "~/components/Container";
import { Form } from "react-router";
import { Button } from "~/components/ui/button";
import ButtonLink from "~/components/ButtonLink";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import StandardInputWithLabel from "~/components/StandardInputWithLabel";

export default function Login() {
  return (
    <div className="bg-gradient-hero">
      <Container className="max-w-md min-h-screen flex flex-col items-center justify-center">
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
            <p className="text-2xl font-bold tracking-tight text-balance">
              Welcome back
            </p>
            <h1 className="text-sm text-muted-foreground">
              Sign in to your account to continue
            </h1>
          </CardHeader>
          <CardContent>
            <Form className="space-y-4">
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
              <Button className="w-full">Sign in</Button>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-sm text-muted-foreground">
              Don't have an account?
            </p>
            <ButtonLink to="/signup">Sign up here</ButtonLink>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
}

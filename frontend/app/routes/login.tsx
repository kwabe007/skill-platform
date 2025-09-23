import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import Container from "~/components/Container";
import { Form, Link } from "react-router";
import { Input } from "~/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "~/components/ui/button";
import ButtonLink from "~/components/ButtonLink";
import { ArrowLeft } from "lucide-react";

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
              <div className="space-y-2">
                <Label
                  className="block text-sm font-medium leading-none"
                  htmlFor="email"
                >
                  Email
                </Label>
                <Input id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label
                  className="block text-sm font-medium leading-none"
                  htmlFor="password"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
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

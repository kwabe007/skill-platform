import Container from "~/components/Container";
import ButtonLink from "~/components/ButtonLink";
import { ArrowLeft, Lock, Mail, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import type { Route } from "./+types/signup";
import { Button } from "~/components/ui/button";
import { PLATFORM_NAME } from "~/utils";
import { z } from "zod";
import { useForm } from "@rvf/react-router";
import ValidatedInputWithLabel from "~/components/ValidatedInputWithLabel";

const nonEmptyStringSchema = z.string().min(1, "This field is required.");

const signupSchema = z.object({
  fullName: nonEmptyStringSchema,
  email: nonEmptyStringSchema,
  password: z.string().min(6, "Password should be at least 6 characters."),
});

export async function loader({}: Route.LoaderArgs) {
  return {};
}

export async function action({}: Route.ActionArgs) {
  return {};
}

export default function Signup() {
  const form = useForm({
    schema: signupSchema,
    method: "POST",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  console.log("name error:", form.error("email"));

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
            <form {...form.getFormProps()} className="space-y-4">
              <ValidatedInputWithLabel
                scope={form.scope("fullName")}
                label="Full name"
                icon={User}
                placeholder="Enter your full name"
              />
              <ValidatedInputWithLabel
                scope={form.scope("email")}
                icon={Mail}
                placeholder="Enter your email"
              />
              <ValidatedInputWithLabel
                scope={form.scope("password")}
                type="password"
                icon={Lock}
                placeholder="Enter your password"
              />
              <Button className="w-full">Create account</Button>
            </form>
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

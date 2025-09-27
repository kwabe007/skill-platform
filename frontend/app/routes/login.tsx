import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import Container from "~/components/Container";
import { redirect } from "react-router";
import { Button } from "~/components/ui/button";
import ButtonLink from "~/components/ButtonLink";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import type { Route } from "./+types/signup";
import { parseFormData, useForm, validationError } from "@rvf/react-router";
import { getUser, logIn, loginSchema } from "~/api";
import ValidatedInputWithLabel from "~/components/ValidatedInputWithLabel";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getUser(request);
  if (user) {
    //TODO: Add redirectUrl query param
    return redirect("/");
  }
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  const result = await parseFormData(request, loginSchema);

  if (result.error) {
    return validationError(result.error, result.submittedData);
  }

  const loginResult = await logIn(result.data);
  if (loginResult.error) {
    return validationError(
      {
        fieldErrors: {
          [loginResult.path ?? "email"]: loginResult.message,
        },
      },
      result.submittedData,
    );
  }
  const { exp, token } = loginResult;

  //`exp` is given in seconds while `Date.now()` gives milliseconds, so adjust accordingly
  const nowSeconds = Math.floor(Date.now() / 1000);
  const maxAge = Math.max(0, exp - nowSeconds);

  //TODO: Add redirectUrl query param
  return redirect("/", {
    headers: {
      "Set-Cookie": `payload-token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; Secure; SameSite=Lax`,
    },
  });
}

export default function Login() {
  const form = useForm({
    schema: loginSchema,
    method: "POST",
    defaultValues: { email: "", password: "" },
  });

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
            <form {...form.getFormProps()} className="space-y-4">
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
              <Button className="w-full">Log in</Button>
            </form>
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

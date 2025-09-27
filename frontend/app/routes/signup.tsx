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
import { parseFormData, useForm, validationError } from "@rvf/react-router";
import ValidatedInputWithLabel from "~/components/ValidatedInputWithLabel";
import { getUser, signUp } from "~/api/api.server";
import { signupSchema } from "~/api/api-schemas";
import { redirect, useActionData } from "react-router";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getUser(request);
  if (user) {
    //TODO: Add redirectUrl query param
    return redirect("/");
  }
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  const result = await parseFormData(request, signupSchema);

  if (result.error) {
    // validationError comes from `@rvf/react-router`
    return validationError(result.error, result.submittedData);
  }

  const signupResult = await signUp(result.data);
  if (signupResult.error) {
    return validationError(
      {
        fieldErrors: { [signupResult.path]: signupResult.message },
      },
      result.submittedData,
    );
  }

  return { success: true };
}

export default function Signup() {
  const data = useActionData<typeof action>();
  const success = Boolean(data && "success" in data && data.success);

  const form = useForm({
    schema: signupSchema,
    method: "POST",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

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
        {!success ? (
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
        ) : (
          <Card className="w-full min-h-[260px] mt-4">
            <CardHeader as="header" className="text-center">
              <h1 className="text-2xl font-bold tracking-tight text-balance">
                Join {PLATFORM_NAME}
              </h1>
              <p className="text-sm text-muted-foreground">
                Create an account to start connecting with other startups
              </p>
            </CardHeader>
            <CardContent className="my-auto">
              <p className="text-center">
                Verification instructions have been sent to the registered email
                address. Open the inbox and follow the link provided to verify
                your email address.
              </p>
            </CardContent>
          </Card>
        )}
      </Container>
    </div>
  );
}

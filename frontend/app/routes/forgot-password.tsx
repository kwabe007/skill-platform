import Container from "~/components/Container";
import ButtonLink from "~/components/ButtonLink";
import { ArrowLeft, Mail } from "lucide-react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import ValidatedInputWithLabel from "~/components/ValidatedInputWithLabel";
import { Button } from "~/components/ui/button";
import { parseFormData, useForm, validationError } from "@rvf/react-router";
import { forgotPasswordSchema } from "~/api/api-schemas";
import type { Route } from "./+types/forgot-password";
import { forgotPassword } from "~/api/api.server";
import { useFetcher } from "react-router";
import { useEffect, useState } from "react";
import { parseSuccess } from "~/utils";

export async function action({ request }: Route.ActionArgs) {
  const result = await parseFormData(request, forgotPasswordSchema);
  if (result.error) {
    return validationError(result.error, result.submittedData);
  }

  await forgotPassword(request, result.data);

  return { success: true };
}

export default function ForgotPasswordRoute() {
  const fetcher = useFetcher<typeof action>();
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm({
    schema: forgotPasswordSchema,
    method: "POST",
    defaultValues: {
      email: "",
    },
    fetcher,
  });

  useEffect(() => {
    if (parseSuccess(fetcher)) {
      setEmailSent(true);
    }
  }, [fetcher]);

  return (
    <div className="bg-gradient-hero">
      <Container className="max-w-md min-h-screen flex flex-col items-center justify-center">
        <ButtonLink
          className="self-start"
          variant="primary-foreground-ghost"
          to="/login"
        >
          <ArrowLeft className="" />
          Back to login
        </ButtonLink>
        <Card className="w-full mt-4">
          {!emailSent ? (
            <>
              <CardHeader as="header" className="text-center">
                <h1 className="text-2xl font-bold text-balance">
                  Forgot your password?
                </h1>
                <p className="text-muted-foreground">
                  Enter your email address below and we’ll send you a link to
                  reset your password.
                </p>
              </CardHeader>
              <CardContent>
                <form {...form.getFormProps()} className="space-y-6">
                  <ValidatedInputWithLabel
                    scope={form.scope("email")}
                    icon={Mail}
                    placeholder="Enter your email"
                  />
                  <Button className="w-full">Reset</Button>
                </form>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader as="header" className="text-center">
                <h1 className="text-2xl font-bold text-balance">
                  Reset your password
                </h1>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We’ve sent a password reset link to your email. Please check
                  your inbox and follow the instructions to reset your password.
                </p>
              </CardContent>
            </>
          )}
        </Card>
      </Container>
    </div>
  );
}

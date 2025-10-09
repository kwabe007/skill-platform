import Container from "~/components/Container";
import ButtonLink from "~/components/ButtonLink";
import { ArrowLeft, Lock } from "lucide-react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import ValidatedInputWithLabel from "~/components/ValidatedInputWithLabel";
import { Button } from "~/components/ui/button";
import { parseFormData, useForm, validationError } from "@rvf/react-router";
import { resetPasswordSchema } from "~/api/api-schemas";
import type { Route } from "./+types/forgot-password";
import { data, useFetcher, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { parseSuccess } from "~/utils";
import { resetPassword } from "~/api/api.server";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (!token) {
    throw data(null, { status: 400, statusText: "Missing token" });
  }
  return { token };
}

export async function action({ request }: Route.ActionArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (!token) {
    throw data(null, { status: 400, statusText: "Missing token" });
  }

  const result = await parseFormData(request, resetPasswordSchema);
  if (result.error) {
    return validationError(result.error, result.submittedData);
  }

  await resetPassword(request, result.data);
  return { success: true };
}

export default function ResetPasswordRoute() {
  const { token } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const [passwordReset, setPasswordReset] = useState(false);

  const form = useForm({
    schema: resetPasswordSchema,
    method: "POST",
    defaultValues: {
      password: "",
      token,
    },
    fetcher,
  });

  useEffect(() => {
    if (parseSuccess(fetcher)) {
      setPasswordReset(true);
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
          {!passwordReset ? (
            <>
              <CardHeader as="header" className="text-center">
                <h1 className="text-2xl font-bold text-balance">
                  Reset your password
                </h1>
                <p className="text-muted-foreground">
                  Please enter your new password below.
                </p>
              </CardHeader>
              <CardContent>
                <form {...form.getFormProps()} className="space-y-6">
                  <ValidatedInputWithLabel
                    scope={form.scope("password")}
                    icon={Lock}
                    type="password"
                    placeholder="Enter your new password"
                  />
                  <input {...form.getHiddenInputProps("token")} />
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
                  Your password has been updated successfully. You can now sign
                  in with your new password. Click{" "}
                  <ButtonLink
                    variant="text-link"
                    className="text-base"
                    to="/login"
                  >
                    here
                  </ButtonLink>{" "}
                  to log in.
                </p>
              </CardContent>
            </>
          )}
        </Card>
      </Container>
    </div>
  );
}

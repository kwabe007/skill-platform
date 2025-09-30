import Text from "~/components/Text";
import Container from "~/components/Container";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { ArrowLeft, Hammer, User } from "lucide-react";
import type { Route } from "./+types/edit-profile";
import { editUser, getCurrentUser } from "~/api/api.server";
import { data, redirect, useLoaderData } from "react-router";
import { parseFormData, useForm, validationError } from "@rvf/react-router";
import { z } from "zod";
import type { Skill } from "@payload-types";
import ValidatedInputWithLabel from "~/components/ValidatedInputWithLabel";
import { Button } from "~/components/ui/button";
import { editUserSchema } from "~/api/api-schemas";
import { toast } from "sonner";
import ButtonLink from "~/components/ButtonLink";

const editUserFormSchema = editUserSchema.extend({
  offeredSkills: z.string(),
  neededSkills: z.string(),
});

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getCurrentUser(request);
  if (!user) {
    // TODO: Add redirect url in query params
    return redirect("/login");
  }
  return { user };
}

export async function action({ request }: Route.ActionArgs) {
  const user = await getCurrentUser(request);
  if (!user) {
    // TODO: Add redirect url in query params
    throw data(null, {
      statusText: "You must be logged in to update profile details.",
      status: 401,
    });
  }

  const result = await parseFormData(request, editUserFormSchema);
  if (result.error) {
    return validationError(result.error, result.submittedData);
  }

  // Remove excess whitespace from skills string and turn into list of skill names.
  const offeredSkills =
    result.data.offeredSkills?.split(",").filter(Boolean) ?? [];

  const neededSkills =
    result.data.neededSkills?.split(",").filter(Boolean) ?? [];

  await editUser(request, user.id, {
    ...result.data,
    offeredSkills,
    neededSkills,
  });

  return { user };
}

/* TODO: change layout to small cards for each details (about, skills, etc.) and when card is clicked, open up sheet
    overlay to edit clicked detail */
//TODO: Add color to cards
export default function EditProfileRoute() {
  const { user } = useLoaderData<typeof loader>();

  const skillsToString = (skills?: Skill[]) => {
    if (!skills) return "";
    return skills.map((skill: Skill) => skill.name).join(", ");
  };

  const form = useForm({
    schema: editUserFormSchema,
    method: "POST",
    defaultValues: {
      fullName: user.fullName,
      company: user.company,
      offeredSkills: skillsToString(user.offeredSkills),
      neededSkills: skillsToString(user.neededSkills),
    },
    onSubmitSuccess: () => {
      form.resetForm({
        ...user,
        offeredSkills: skillsToString(user.offeredSkills),
        neededSkills: skillsToString(user.neededSkills),
      });

      const position =
        document.documentElement.clientWidth > 1024
          ? "bottom-right"
          : "top-center";
      toast.success("Your profile has been updated!", { position });
    },
  });

  return (
    <div>
      <Container className="max-w-xl py-16">
        <ButtonLink variant="outline" to="/">
          <ArrowLeft />
          Back to home
        </ButtonLink>
        <form {...form.getFormProps()} className="space-y-8 mt-4">
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
              <ValidatedInputWithLabel scope={form.scope("fullName")} />
              <ValidatedInputWithLabel scope={form.scope("company.name")} />
              <ValidatedInputWithLabel
                scope={form.scope("company.description")}
                as="textarea"
                info="A brief description about the company (max 500 characters)."
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 text-primary-two">
                <Hammer className="size-5" />
                <Text as="h2" variant="h4">
                  Skills & Services
                </Text>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ValidatedInputWithLabel
                as="textarea"
                scope={form.scope("offeredSkills")}
                label="Skills you offer"
                placeholder="e.g., Web Development, Marketing, Design, Legal Services"
                info="Comma-separated list of skills and services you can provide to other startups."
              />
              <ValidatedInputWithLabel
                as="textarea"
                scope={form.scope("neededSkills")}
                label="Skills you need"
                placeholder="e.g., Social Media, SEO, Accounting, Video Production"
                info="Comma-separated list of skills and services you need from other startups."
              />
            </CardContent>
          </Card>
          <input type="submit" id="submit-form" className="hidden" />
        </form>
      </Container>
      <div className="sticky bottom-0 left-0 right-0 flex justify-center bg-background border-t py-8">
        <Button asChild className="bg-gradient-primary">
          {form.formState.isDirty ? (
            <label
              className="cursor-pointer"
              htmlFor="submit-form"
              tabIndex={0}
            >
              Save
            </label>
          ) : (
            <label className="pointer-events-none opacity-50">Save</label>
          )}
        </Button>
      </div>
    </div>
  );
}

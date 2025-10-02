import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Building2, MessageSquare, Send } from "lucide-react";
import defaultMessageTemplate from "./messageMockText.json";
import type { PublicUser1 } from "~/api/api-types";
import { formatRelativeTime, useOptionalUser } from "~/utils";
import ButtonLabel from "~/components/ButtonLabel";
import { useEffect, useId, useState } from "react";
import ValidatedInputWithLabel from "~/components/ValidatedInputWithLabel";
import { useForm } from "@rvf/react-router";
import { useFetcher } from "react-router";
import { requestConnectionSchema } from "~/api/api-schemas";
import type { loader } from "~/routes/get-connection-request";

function replaceTemplateStringVariables(
  str: string,
  variables: Record<string, string>,
) {
  let newString = str;
  Object.entries(variables).forEach(([key, value]) => {
    newString = newString.replace(`{${key}}`, value);
  });
  return newString;
}

interface ConnectModalProps {
  user: PublicUser1;
}

export default function ConnectModal({
  user: receiverUser,
}: ConnectModalProps) {
  const defaultMessage = replaceTemplateStringVariables(
    defaultMessageTemplate,
    { companyName: receiverUser.company?.name! },
  );
  const [isOpen, setIsOpen] = useState(false);
  const formFetcher = useFetcher();
  const connectionRequestFetcher = useFetcher<typeof loader>();
  const user = useOptionalUser();

  useEffect(() => {
    if (user) {
      connectionRequestFetcher.load(
        `/get-connection-request?sender=${user.id}&receiver=${receiverUser.id}`,
      );
    }
  }, []);

  const submitFormId = useId();
  const form = useForm({
    schema: requestConnectionSchema,
    action: "/create-connection-request",
    method: "POST",
    defaultValues: {
      message: defaultMessage,
      receiver: receiverUser.id,
    },
    fetcher: formFetcher,
    onSubmitSuccess: () => {
      setIsOpen(false);
    },
  });
  const existingConnectionRequest = connectionRequestFetcher.data;

  const disableSubmit = form.formState.submitStatus === "submitting";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="w-full" type="button">
          <MessageSquare className="w-4 h-4 mr-2" />
          Connect
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Building2 className="size-5 text-primary-foreground" />
            </div>
            <DialogTitle>Connect with {receiverUser.company?.name}</DialogTitle>
          </div>
          <DialogDescription>
            Send a personalized message to start a conversation with{" "}
            {receiverUser.company?.name}. You can customize the message below
            before sending.
          </DialogDescription>
          {existingConnectionRequest && (
            <p className="text-sm">
              You sent a request to {receiverUser.company?.name}{" "}
              {formatRelativeTime(existingConnectionRequest.createdAt)}.
            </p>
          )}
        </DialogHeader>

        <form {...form.getFormProps()}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <ValidatedInputWithLabel
                as="textarea"
                inputClassName="min-h-[200px]"
                scope={form.scope("message")}
                label="Your message"
              />
              <input {...form.getHiddenInputProps("receiver")} />
            </div>
          </div>
          <input type="submit" id={submitFormId} className="hidden" />
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <ButtonLabel
            disabled={disableSubmit}
            className="bg-gradient-primary"
            htmlFor={submitFormId}
          >
            <Send className="size-4 mr-2" />
            Send connection request
          </ButtonLabel>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

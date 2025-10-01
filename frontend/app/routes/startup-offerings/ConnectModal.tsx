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
import { Label } from "~/components/ui/label";
import { Building2, MessageSquare, Send } from "lucide-react";
import defaultMessageTemplate from "./messageMockText.json";
import { Textarea } from "~/components/ui/textarea";
import type { PublicUser1 } from "~/api/api-types";

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
  className?: string;
}

export default function ConnectModal({ user, className }: ConnectModalProps) {
  const defaultMessage = replaceTemplateStringVariables(
    defaultMessageTemplate,
    { companyName: user.company?.name! },
  );

  return (
    <Dialog>
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
            <DialogTitle>Connect with {user.company?.name}</DialogTitle>
          </div>
          <DialogDescription>
            Send a personalized message to start a conversation with{" "}
            {user.company?.name}. You can customize the message below before
            sending.
          </DialogDescription>
        </DialogHeader>

        <form>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                className="min-h-[200px]"
                name="message"
                defaultValue={defaultMessage}
              />
            </div>
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button className="bg-gradient-primary" type="submit">
            <Send className="size-4 mr-2" />
            Send connection request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

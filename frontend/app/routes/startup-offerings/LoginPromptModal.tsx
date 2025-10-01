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
import { LogIn, MessageSquare, Send } from "lucide-react";
import ButtonLink from "~/components/ButtonLink";

interface LoginPromptModalProps {
  className?: string;
}

export default function LoginPromptModal({ className }: LoginPromptModalProps) {
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
              <LogIn className="size-5 text-primary-foreground" />
            </div>
            <DialogTitle>Log in required</DialogTitle>
          </div>
          <DialogDescription>
            You need to be logged in to connect with TechFlow Solutions. Please
            sign in or create an account to continue.
          </DialogDescription>
        </DialogHeader>

        <p className="text-sm">
          Join our platform to connect with amazing startups and explore
          collaboration opportunities.{" "}
          <ButtonLink className="h-auto p-0" to="/signup">
            Click here to sign up
          </ButtonLink>
          .
        </p>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <ButtonLink
            variant="default"
            className="bg-gradient-primary"
            to="/login"
          >
            <LogIn className="size-4 mr-2" />
            Log in
          </ButtonLink>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

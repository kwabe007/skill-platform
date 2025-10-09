import { cn } from "~/lib/utils";
import ButtonLink from "~/components/ButtonLink";
import { LogIn, LogOut, Send, User } from "lucide-react";
import { Form } from "react-router";
import { Button } from "~/components/ui/button";
import { useOptionalUser } from "~/utils";
import UnreadBadgeWrapper from "~/components/UnreadBadgeWrapper";

interface LargeScreenButtonsProps {
  className?: string;
}

export default function LargeScreenButtons({
  className,
}: LargeScreenButtonsProps) {
  const user = useOptionalUser();

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {user && (
        <>
          <ButtonLink variant="primary-foreground-outline" to="/edit-profile">
            <User />
            Profile
          </ButtonLink>
          <UnreadBadgeWrapper show={user.unreadRequests}>
            <ButtonLink variant="primary-foreground-outline" to="/requests">
              <Send />
              Requests
            </ButtonLink>
          </UnreadBadgeWrapper>
        </>
      )}
      {user ? (
        <Form method="POST" action="logout">
          <Button variant="primary-foreground-outline">
            <LogOut />
            Log out
          </Button>
        </Form>
      ) : (
        <ButtonLink variant="primary-foreground-outline" to="/login">
          <LogIn />
          Log in
        </ButtonLink>
      )}
    </div>
  );
}

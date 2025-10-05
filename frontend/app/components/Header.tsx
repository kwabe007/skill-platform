import { cn } from "~/lib/utils";
import Container from "~/components/Container";
import ButtonLink from "~/components/ButtonLink";
import { LogIn, LogOut, Send, User } from "lucide-react";
import { Form, Link } from "react-router";
import { PLATFORM_NAME, useOptionalUser } from "~/utils";
import { Button } from "~/components/ui/button";

interface HeaderProps {
  variant?: "default" | "transparent";
  pageTitle?: string;
  className?: string;
}

export default function Header({
  variant = "default",
  pageTitle,
  className,
}: HeaderProps) {
  const user = useOptionalUser();

  return (
    <header
      className={cn(
        "h-[var(--header-height)] z-10",
        variant === "default" && "bg-gradient-primary",
        className,
      )}
    >
      <Container className="h-full flex justify-end items-center gap-4">
        <Link
          className="text-xl text-white font-bold leading-tight mr-auto"
          to="/"
        >
          {PLATFORM_NAME}
        </Link>
        {user && (
          <>
            <ButtonLink variant="primary-foreground-outline" to="/edit-profile">
              <User />
              Profile
            </ButtonLink>
            <ButtonLink variant="primary-foreground-outline" to="/requests">
              <Send />
              Requests
            </ButtonLink>
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
      </Container>
    </header>
  );
}

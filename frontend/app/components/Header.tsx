import { cn } from "~/lib/utils";
import Container from "~/components/Container";
import ButtonLink from "~/components/ButtonLink";
import { LogIn, LogOut } from "lucide-react";
import { Form, Link } from "react-router";
import { PLATFORM_NAME, useOptionalUser } from "~/utils";
import { Button } from "~/components/ui/button";

interface HeaderProps {
  variant?: "default" | "transparent";
  className?: string;
}

export default function Header({
  variant = "default",
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
      <Container className="h-full flex items-center justify-between">
        <Link className="text-xl text-white font-bold leading-tight" to="/">
          {PLATFORM_NAME}
        </Link>
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

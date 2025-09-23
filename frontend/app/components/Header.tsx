import { cn } from "~/lib/utils";
import Container from "~/components/Container";
import ButtonLink from "~/components/ButtonLink";
import { LogIn } from "lucide-react";
import { Link } from "react-router";
import { PLATFORM_NAME } from "~/utils";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn("h-[var(--header-height)]", className)}>
      <Container className="h-full flex items-center justify-between">
        <Link className="text-xl text-white font-bold leading-tight" to="/">
          {PLATFORM_NAME}
        </Link>
        <ButtonLink variant="primary-foreground-outline" to="/login">
          <LogIn />
          Log in
        </ButtonLink>
      </Container>
    </header>
  );
}

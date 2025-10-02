import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";
import type { ComponentProps } from "react";
import { ArrowLeft } from "lucide-react";

export default function BackButton({
  variant = "outline",
  ...rest
}: Omit<ComponentProps<typeof Button>, "children" | "onClick">) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      // There is a history entry to go back to
      navigate(-1);
    } else {
      // Fallback: go to home or another safe route
      navigate("/");
    }
  };
  return (
    <Button {...rest} variant={variant} onClick={handleBack}>
      <ArrowLeft /> Back
    </Button>
  );
}

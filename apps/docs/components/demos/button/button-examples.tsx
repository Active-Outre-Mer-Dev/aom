import { Loader, Mail } from "lucide-react";
import { Button } from "@aomdev/ui/client/button";

export function IconButton() {
  return (
    <Button className="flex items-center w-fit">
      <Mail
        size={16}
        className="inline-block mr-2"
      />
      Send email
    </Button>
  );
}

export function LoaderButton() {
  return (
    <Button
      disabled
      className="flex items-center w-fit"
    >
      <Loader
        size={16}
        className="inline-block mr-2 animate-spin"
      />
      Loading
    </Button>
  );
}

import { Button } from "@aomdev/ui/client/button";

export function StylesDemo() {
  return (
    <div className="flex gap-4">
      <Button>Hello world</Button>
      <Button variant={"outline"}>Hello world</Button>
      <Button variant={"neutral"}>Hello world</Button>
      <Button className="dark:bg-error-500">Overwritten styles</Button>
    </div>
  );
}

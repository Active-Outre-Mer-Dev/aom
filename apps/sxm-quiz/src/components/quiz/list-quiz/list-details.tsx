import { ScrollArea } from "@aom/ui";

type PropTypes = {
  children: React.ReactNode;
};

export function ListDetails({ children }: PropTypes) {
  return (
    <div className="grow p-2">
      <ScrollArea className="h-96 pr-2 -mr-6">
        <p className="text-center text-2xl   mb-4 font-medium font-heading ">All Beaches</p>
        <div className="grid grid-cols-3 gap-6">{children}</div>
      </ScrollArea>
    </div>
  );
}

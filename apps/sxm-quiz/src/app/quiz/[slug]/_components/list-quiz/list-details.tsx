import { ScrollArea } from "@aom/ui";

type PropTypes = {
  children: React.ReactNode;
};

export default function ListDetails({ children }: PropTypes) {
  return (
    <div className="grow p-2">
      <ScrollArea style={{ height: window.screen.height - 64 - 80 - 150 || 300 }} className="-mr-4 pb-4 pr-4">
        <p className="text-center text-2xl   mb-4 font-medium font-heading ">All Beaches</p>
        <div className="grid grid-cols-3 gap-6">{children}</div>
      </ScrollArea>
    </div>
  );
}

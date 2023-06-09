import { Card, Title } from "@aom/ui";
import type { Icon } from "lucide-react";
type PropTypes = {
  Icon: Icon;
  title: string;
  children: React.ReactNode;
};

export function Feature({ Icon, children, title }: PropTypes) {
  return (
    <Card className="gap-4 grow flex flex-col items-center  basis-1/4">
      <div className="flex  flex-col items-center">
        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-200/30 ">
          <Icon className="text-primary-600" />
        </span>
        <Title order={3} className="font-medium mb-4 mt-4 font-heading text-center ">
          {title}
        </Title>
      </div>
      <p className="text-lg "> {children}</p>
    </Card>
  );
}

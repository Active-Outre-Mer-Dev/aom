import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { forwardRef } from "react";
import { cx } from "../../src/cx";

export type ScrollAreaProps = RadixScrollArea.ScrollAreaProps;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(({ className, ...props }, ref) => (
  <RadixScrollArea.Root
    ref={ref}
    {...props}
    className={cx("overflow-hidden", className)}
  >
    <RadixScrollArea.Viewport className="w-full h-full rounded">{props.children}</RadixScrollArea.Viewport>
    <RadixScrollArea.Scrollbar
      className={`flex select-none touch-none p-0.5 bg-transparent
       transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2
        data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5`}
      orientation="vertical"
    >
      <RadixScrollArea.Thumb
        className={`flex-1 bg-neutral-700/75 dark:bg-neutral-400/75  rounded-[10px]
       relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 
       before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full 
       before:min-w-[44px] before:min-h-[44px]`}
      />
    </RadixScrollArea.Scrollbar>
    <RadixScrollArea.Scrollbar
      className="flex select-none touch-none p-0.5 bg-transparent transition-colors 
      duration-[160ms] ease-out data-[orientation=vertical]:w-2 
      data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2"
      orientation="horizontal"
    >
      <RadixScrollArea.Thumb
        className={`flex-1 bg-neutral-700/75 dark:bg-neutral-400 rounded-[10px] 
      relative before:content-['']
       before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 
       before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] 
       before:min-h-[44px]`}
      />
    </RadixScrollArea.Scrollbar>
  </RadixScrollArea.Root>
));

import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { forwardRef } from "react";
import { cx } from "../cx";

export type ScrollAreaProps = RadixScrollArea.ScrollAreaProps;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(({ className, ...props }, ref) => (
  <RadixScrollArea.Root ref={ref} {...props} className={cx("ui-overflow-hidden", className)}>
    <RadixScrollArea.Viewport className="ui-w-full ui-h-full ui-rounded">
      {props.children}
    </RadixScrollArea.Viewport>
    <RadixScrollArea.Scrollbar
      className={`ui-flex ui-select-none ui-touch-none ui-p-0.5 ui-bg-transparent
       ui-transition-colors ui-duration-[160ms] ui-ease-out data-[orientation=vertical]:ui-w-2
        data-[orientation=horizontal]:ui-flex-col data-[orientation=horizontal]:ui-h-2.5`}
      orientation="vertical"
    >
      <RadixScrollArea.Thumb
        className={`ui-flex-1 ui-bg-neutral-700/75 dark:ui-bg-neutral-400/75  ui-rounded-[10px]
       ui-relative before:ui-content-[''] before:ui-absolute before:ui-top-1/2 before:ui-left-1/2 
       before:-ui-translate-x-1/2 before:-ui-translate-y-1/2 before:ui-w-full before:ui-h-full 
       before:ui-min-w-[44px] before:ui-min-h-[44px]`}
      />
    </RadixScrollArea.Scrollbar>
    <RadixScrollArea.Scrollbar
      className="ui-flex ui-select-none ui-touch-none ui-p-0.5 ui-bg-transparent ui-transition-colors 
      ui-duration-[160ms] ui-ease-out data-[orientation=vertical]:ui-w-2 
      data-[orientation=horizontal]:ui-flex-col data-[orientation=horizontal]:ui-h-2"
      orientation="horizontal"
    >
      <RadixScrollArea.Thumb
        className={`ui-flex-1 ui-bg-neutral-700/75 dark:ui-bg-neutral-400 ui-rounded-[10px] 
      ui-relative before:ui-content-['']
       before:ui-absolute before:ui-top-1/2 before:ui-left-1/2 before:-ui-translate-x-1/2 
       before:-ui-translate-y-1/2 before:ui-w-full before:ui-h-full before:ui-min-w-[44px] 
       before:ui-min-h-[44px]`}
      />
    </RadixScrollArea.Scrollbar>
  </RadixScrollArea.Root>
));

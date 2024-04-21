import * as RadixTooltip from "@radix-ui/react-tooltip";

type ContentProps = {
  portalProps?: RadixTooltip.TooltipPortalProps;
} & RadixTooltip.TooltipContentProps;

export function TooltipContent({ portalProps, ...props }: ContentProps) {
  return (
    <>
      <RadixTooltip.Portal {...portalProps}>
        <RadixTooltip.Content {...props} />
      </RadixTooltip.Portal>
    </>
  );
}

export function TooltipTrigger(props: RadixTooltip.TooltipTriggerProps) {
  return <RadixTooltip.Trigger {...props} />;
}

type RootProps = {
  providerProps?: Omit<RadixTooltip.TooltipProviderProps, "children">;
} & RadixTooltip.TooltipProps;

export function Tooltip({ providerProps, ...props }: RootProps) {
  return (
    <RadixTooltip.Provider {...providerProps}>
      <RadixTooltip.Root {...props}>{props.children}</RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

Tooltip.Content = TooltipContent;
Tooltip.Trigger = TooltipTrigger;

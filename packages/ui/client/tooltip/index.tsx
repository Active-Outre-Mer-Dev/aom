import * as RadixTooltip from "@radix-ui/react-tooltip";

type ContentProps = {
  portalProps?: RadixTooltip.TooltipPortalProps;
} & RadixTooltip.TooltipContentProps;

function Content({ portalProps, ...props }: ContentProps) {
  return (
    <>
      <RadixTooltip.Portal {...portalProps}>
        <RadixTooltip.Content {...props} />
      </RadixTooltip.Portal>
    </>
  );
}

function Trigger(props: RadixTooltip.TooltipTriggerProps) {
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

Tooltip.Content = Content;
Tooltip.Trigger = Trigger;

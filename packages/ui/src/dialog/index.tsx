import * as RadixDialog from "@radix-ui/react-dialog";
import { cardStyles } from "../card/styles";
import { titleStyles } from "../title/styles";
import { buttonStyles } from "../button/styles";
import { cva } from "cva";
import type { VariantProps } from "cva";

const overlayStyles = cva(
  `ui-bg-black/30 data-[state=open]:ui-animate-overlay-show ui-flex ui-items-center ui-justify-center
   ui-fixed ui-inset-0 ui-h-screen  ui-w-full ui-z-[9999]
data-[state=closed]:ui-animate-overlay-hide`,
  {
    variants: {
      blur: {
        true: "ui-backdrop-blur-sm"
      }
    }
  }
);

export type DialogContentProps = {
  portalProps?: RadixDialog.DialogPortalProps;
} & RadixDialog.DialogContentProps &
  VariantProps<typeof overlayStyles>;

function Content({ blur, portalProps, className, ...props }: DialogContentProps) {
  return (
    <RadixDialog.Portal {...portalProps}>
      <RadixDialog.Overlay className={overlayStyles({ blur })}>
        <RadixDialog.Content
          {...props}
          className={cardStyles({
            variant: "filled",
            className
          })}
        >
          {props.children}
        </RadixDialog.Content>
      </RadixDialog.Overlay>
    </RadixDialog.Portal>
  );
}

export type DialogCloseProps = RadixDialog.DialogCloseProps;

function Close({ className, ...props }: DialogCloseProps) {
  const defaultStyles = `ui-h-6 ui-w-6 ui-rounded-full ui-inline-flex ui-items-center ui-justify-center 
  hover:ui-bg-neutral-100 hover:dark:ui-bg-neutral-700`;
  return <RadixDialog.Close {...props} className={className || defaultStyles} />;
}

export type DialogTriggerProps = VariantProps<typeof buttonStyles> & RadixDialog.DialogTriggerProps;

function Trigger({ variant, color, fullWidth, size, className, ...props }: DialogTriggerProps) {
  return <RadixDialog.Trigger {...props} className={buttonStyles({ className, fullWidth, variant, size })} />;
}

function Title({ className, ...props }: RadixDialog.DialogTitleProps) {
  return <RadixDialog.Title {...props} className={titleStyles({ className, order: 3 })} />;
}

function Description(props: RadixDialog.DialogDescriptionProps) {
  return <RadixDialog.Description {...props} className={`ui-text-neutral-700 ui-mt-[10px] ui-mb-5 `} />;
}

export type DialogProps = RadixDialog.DialogProps;

export function Dialog(props: DialogProps) {
  return <RadixDialog.Root {...props}></RadixDialog.Root>;
}

Dialog.Trigger = Trigger;
Dialog.Content = Content;
Dialog.Close = Close;
Dialog.Title = Title;
Dialog.Description = Description;

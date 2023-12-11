import * as RadixDialog from "@radix-ui/react-dialog";
import { cardStyles } from "../../styles/card.styles";
import { titleStyles } from "../../styles/title.styles";
import { buttonStyles } from "../../styles/button.styles";
import { cva } from "cva";
import type { VariantProps } from "cva";

const overlayStyles = cva(
  `bg-black/30 data-[state=open]:animate-overlay-show flex items-center justify-center
   fixed inset-0 h-screen  w-full z-[9999]
data-[state=closed]:animate-overlay-hide`,
  {
    variants: {
      blur: {
        true: "backdrop-blur-sm"
      }
    }
  }
);

export type DialogContentProps = {
  portalProps?: RadixDialog.DialogPortalProps;
} & RadixDialog.DialogContentProps &
  VariantProps<typeof overlayStyles> &
  VariantProps<typeof cardStyles>;

function Content({ blur, portalProps, className, noPadding, ...props }: DialogContentProps) {
  return (
    <RadixDialog.Portal {...portalProps}>
      <RadixDialog.Overlay className={overlayStyles({ blur })}>
        <RadixDialog.Content
          {...props}
          className={cardStyles({
            variant: "filled",
            className,
            noPadding
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
  const defaultStyles = `h-6 w-6 rounded-full inline-flex items-center justify-center 
  hover:bg-neutral-100 hover:dark:bg-neutral-700`;
  return (
    <RadixDialog.Close
      {...props}
      className={className || defaultStyles}
    />
  );
}

export type DialogTriggerProps = VariantProps<typeof buttonStyles> & RadixDialog.DialogTriggerProps;

function Trigger({ variant, color, fullWidth, size, className, ...props }: DialogTriggerProps) {
  return (
    <RadixDialog.Trigger
      {...props}
      className={buttonStyles({ className, fullWidth, variant, size })}
    />
  );
}

function Title({ className, ...props }: RadixDialog.DialogTitleProps) {
  return (
    <RadixDialog.Title
      {...props}
      className={titleStyles({ className, order: 3 })}
    />
  );
}

function Description(props: RadixDialog.DialogDescriptionProps) {
  return (
    <RadixDialog.Description
      {...props}
      className={`text-neutral-700 mt-[10px] mb-5 `}
    />
  );
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

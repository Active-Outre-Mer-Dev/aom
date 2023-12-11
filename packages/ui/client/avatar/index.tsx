import * as RadixAvatar from "@radix-ui/react-avatar";
import { UserCircle } from "./icons";
import { forwardRef } from "react";
import { avatarGroupStyles, avatarStyles } from "../../styles/avatar.styles";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

type PropTypes = {
  rootProps?: RadixAvatar.AvatarProps;
  fallbackProps?: RadixAvatar.AvatarFallbackProps;
} & RadixAvatar.AvatarImageProps &
  VariantProps<typeof avatarStyles>;

const _Avatar = forwardRef<HTMLSpanElement, PropTypes>(
  ({ rootProps, size, color, className, fallbackProps, ...props }, ref) => {
    return (
      <RadixAvatar.Root
        ref={ref}
        {...rootProps}
      >
        <RadixAvatar.Image
          {...props}
          className={avatarStyles({ size, className, color })}
        />
        {!props.src ? (
          <RadixAvatar.Fallback
            {...fallbackProps}
            className={avatarStyles({
              size,
              className: `flex items-center justify-center ${fallbackProps?.className}`,
              color
            })}
          >
            {props.children ? props.children : <UserCircle />}
          </RadixAvatar.Fallback>
        ) : null}
      </RadixAvatar.Root>
    );
  }
);

type GroupProps = VariantProps<typeof avatarGroupStyles> & ComponentPropsWithRef<"div">;

const Group = forwardRef<HTMLDivElement, GroupProps>(({ spacing, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={avatarGroupStyles({ spacing, className })}
    >
      {props.children}
    </div>
  );
});

const Avatar = Object.assign(_Avatar, { Group });

export { Avatar };

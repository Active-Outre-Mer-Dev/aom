import { forwardRef } from "react";
import { alertStyles, bodyStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

export type AlertProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof alertStyles> & { icon?: React.ReactNode; classNames?: { body?: string } };

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, color, title, icon, classNames, ...props }, ref) => {
    const classes = alertStyles({ className, color });
    const bodyClasses = bodyStyles({ color, title: Boolean(title), className: classNames?.body });
    return (
      <div ref={ref} role="alert" {...props} className={twMerge(classes)}>
        {icon ? (
          <div className="col-span-1 flex items-center justify-center">{icon}</div>
        ) : (
          <div className="col-span-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 9h.01"></path>
              <path d="M11 12h1v4h1"></path>
            </svg>
          </div>
        )}
        {title ? (
          <div className={"col-span-11"}>
            <h5 className="font-medium grow text-lg block">{title}</h5>
          </div>
        ) : null}
        <span className={twMerge(bodyClasses)}>{props.children}</span>
      </div>
    );
  }
);

Alert.displayName = "Alert";

import { cva } from "cva";
import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

const styles = cva("ui-px-2 ui-py-3 ui-grid ui-grid-cols-12 ui-gap-2 ui-rounded-md", {
  variants: {
    color: {
      primary: "ui-bg-primary-700 ui-text-primary-50",
      secondary: "ui-bg-secondary-700 ui-text-secondary-50",
      warn: "ui-bg-warn-700 ui-text-warn-50",
      success: "ui-bg-success-700 ui-text-success-50",
      error: "ui-bg-error-700 ui-text-error-50",
      tertiary: "ui-bg-tertiary-700 ui-text-tertiary-50"
    }
  },
  defaultVariants: {
    color: "primary"
  }
});

type PropTypes = ComponentPropsWithRef<"div"> & VariantProps<typeof styles> & { icon?: React.ReactNode };

export const Alert = forwardRef<HTMLDivElement, PropTypes>(
  ({ className, color, title, icon, ...props }, ref) => {
    return (
      <div ref={ref} role="alert" {...props} className={styles({ className, color })}>
        {icon ? (
          <div className="ui-col-span-1 ui-flex ui-items-center ui-justify-center">{icon}</div>
        ) : (
          <div className="ui-col-span-1 ui-flex ui-items-center ui-justify-center">
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
        <div className={"ui-col-span-11"}>
          {title ? <h5 className="ui-font-semibold ui-grow ui-text-lg ui-block">{title}</h5> : null}
        </div>
        <span className={"ui-row-start-2  ui-col-start-2 ui-col-span-11"}>{props.children}</span>
      </div>
    );
  }
);

Alert.displayName = "Alert";

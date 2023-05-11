import { cva } from "cva";

export const titleStyles = cva("", {
  variants: {
    /**Used to render specific heading element from h1-h6
     * @default 1
     */
    order: {
      1: "ui-text-[4.25rem]",
      2: "ui-text-[2.333rem] ",
      3: "ui-text-[1.625rem]",
      4: "ui-text-[1.2917rem]",
      5: "ui-text-[1.1458rem]",
      6: "ui-text-base"
    }
  },
  defaultVariants: {
    order: 1
  }
});

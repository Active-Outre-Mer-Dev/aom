import { cva } from "cva";

export const titleStyles = cva("", {
  variants: {
    /**Used to render specific heading element from h1-h6
     * @default 1
     */
    order: {
      1: "text-[4.25rem]",
      2: "text-[2.333rem] ",
      3: "text-[1.625rem]",
      4: "text-[1.2917rem]",
      5: "text-[1.1458rem]",
      6: "text-base"
    }
  },
  defaultVariants: {
    order: 1
  }
});

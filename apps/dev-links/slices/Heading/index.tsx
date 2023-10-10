import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Title } from "@aomdev/ui";

/**
 * Props for `Heading`.
 */
export type HeadingProps = SliceComponentProps<Content.HeadingSlice>;

/**
 * Component for "Heading" Slices.
 */
const Heading = ({ slice }: HeadingProps): JSX.Element => {
  return (
    <Title
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="font-bold  mb-6 text-center"
    >
      <PrismicRichText field={slice.primary.heading} />
    </Title>
  );
};

export default Heading;

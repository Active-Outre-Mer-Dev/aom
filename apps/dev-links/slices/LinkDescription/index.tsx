import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps, PrismicLink } from "@prismicio/react";
import { Card, Title } from "@aomdev/ui";
import { IconExternalLink } from "@tabler/icons-react";

/**
 * Props for `LinkDescription`.
 */
export type LinkDescriptionProps = SliceComponentProps<Content.LinkDescriptionSlice>;

/**
 * Component for "LinkDescription" Slices.
 */
const LinkDescription = ({ slice }: LinkDescriptionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <Card>
        <header className="mb-4">
          <PrismicRichText field={slice.primary.title} />
        </header>
        <div className="text-gray-300 mb-4 [width:calc(36ch,90%,65ch)]">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <PrismicLink field={slice.primary.link}>
          <span className="text-primary-300">
            View website here <IconExternalLink className="inline-block ml-2" size={16} />
          </span>
        </PrismicLink>
        <div className="flex  w-full mt-6 px-2 prose-ul:list-inside prose-ul:list-disc">
          <div className="basis-1/2 border-r border-r-neutral-700">
            <p className="mb-3 pl-2 border-b-neutral-700 border-b pb-1">Pros</p>
            <div className="pl-2">
              <PrismicRichText field={slice.primary.pros} />
            </div>
          </div>
          <div className="basis-1/2 ">
            <p className="border-b-neutral-700 pl-2 border-b pb-1">Cons</p>
            <div className="pl-2">
              <PrismicRichText field={slice.primary.cons} />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default LinkDescription;

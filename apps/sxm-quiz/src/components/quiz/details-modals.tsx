"use client";
import { Button } from "@aom/ui";
import { useState, Suspense, lazy } from "react";
import type { BadgeProps } from "@aom/ui";

const Details = lazy(() => import("./details"));

export type PropTypes = {
  title: string;
  badgeColor: BadgeProps["color"];
  type: string;
  slug: string;
};

export function DetailsWrapper(props: PropTypes) {
  const [load, setLoad] = useState(false);
  return (
    <>
      {!load && (
        <Button variant={"neutral"} size={"small"} onMouseEnter={() => setLoad(true)}>
          View details
        </Button>
      )}
      <Suspense
        fallback={
          <Button size={"small"} variant={"neutral"}>
            View details
          </Button>
        }
      >
        {load && <Details {...props} />}
      </Suspense>
    </>
  );
}

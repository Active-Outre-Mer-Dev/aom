"use client";
import { Button } from "ui";
import { useState, Suspense, lazy } from "react";

const Details = lazy(() => import("./details"));

export type PropTypes = {
  title: string;
  badgeColor: "error" | "secondary" | "primary" | "success";
  type: string;
  slug: string;
};

export function DetailsWrapper(props: PropTypes) {
  const [load, setLoad] = useState(false);
  return (
    <>
      {!load && (
        <Button variant={"neutral"} onMouseEnter={() => setLoad(true)}>
          View details
        </Button>
      )}
      <Suspense fallback={<Button variant={"neutral"}>View details</Button>}>
        {load && <Details {...props} />}
      </Suspense>
    </>
  );
}

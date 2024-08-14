"use client";
import { Button } from "@aomdev/ui/client/button";
import { useState } from "react";
import { Select } from "@aomdev/ui/client/select";
import { Switch } from "@aomdev/ui/client/switch";
import type { ButtonProps } from "@aomdev/ui/client/button";
import { cardStyles } from "@aomdev/ui/styles";

export function ButtonDemo() {
  const [variant, setVariant] = useState("primary");
  const [fullWidth, setfullWidth] = useState(false);
  const [size, setSize] = useState("md");

  const selectItems = [
    {
      label: "Primary",
      value: "primary"
    },
    {
      label: "Outline",
      value: "outline"
    },
    {
      label: "Neutral",
      value: "neutral"
    },
    {
      label: "CTA",
      value: "cta"
    },
    {
      label: "Error",
      value: "error"
    }
  ];

  const sizeItems = [
    {
      label: "Small",
      value: "sm"
    },
    {
      label: "Medium",
      value: "md"
    },
    {
      label: "Large",
      value: "lg"
    }
  ];
  return (
    <div className="flex gap-6">
      <div className="basis-1/2 grow">
        <Button
          fullWidth={fullWidth}
          size={size as ButtonProps["size"]}
          variant={variant as ButtonProps["variant"]}
        >
          Hello there
        </Button>
      </div>
      <div className={cardStyles({ className: "basis-1/3" })}>
        <h3
          style={{ marginTop: 0, marginBottom: "1rem" }}
          className="font-semibold text-xl"
        >
          Configuration
        </h3>
        <div className="flex gap-6 flex-col">
          <div>
            <label className={"text-sm block mb-1"}>Variant</label>
            <Select
              fullWidth
              value={variant}
              items={selectItems}
              onValueChange={(value) => setVariant(value)}
            />
          </div>
          <div>
            <label className={"text-sm block mb-1"}>Size</label>
            <Select
              fullWidth
              value={size}
              items={sizeItems}
              onValueChange={(value) => setSize(value)}
            />
          </div>
          <Switch
            label="Full width"
            checked={fullWidth}
            onCheckedChange={setfullWidth}
          />
        </div>
      </div>
    </div>
  );
}

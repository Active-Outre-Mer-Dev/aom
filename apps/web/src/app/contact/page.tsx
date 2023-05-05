import styles from "./styles.module.css";
import { IconBuildingSkyscraper, IconPhone, IconAt } from "@tabler/icons-react";
import { TextInput, Label, Textarea, Button } from "ui/src/client";

export default function ContactPage() {
  return (
    <main>
      <section className="flex pt-20 min-h-screen">
        <form className="basis-1/2 gap-5 grow py-10  flex flex-col px-16">
          <div className="flex gap-4">
            <Input label="First name" />
            <Input label="Last name" />
          </div>
          <Input label="Email" />
          <Input label="Phone" />
          <p>
            <Label htmlFor="message" className="block mb-1">
              Message{" "}
              <span className="text-error-400" aria-label="Required">
                *
              </span>
            </Label>
            <Textarea id="message" name="message" className="w-full" />
          </p>
          <Button className="block ml-auto">Submit</Button>
        </form>
        <div className={`basis-1/2 overflow-hidden px-4 py-10 grow ${styles.contactGradient}`}>
          <h1 className="text-5xl mb-10">Get in touch</h1>
          <p className="w-3/4 mb-4">
            Reprehenderit proident non aliqua qui aute Lorem esse do labore et minim pariatur cupidatat
            tempor. Aute aliqua ut aliqua ut amet officia nisi Lorem eu nulla laborum irure duis. Id eu in
            duis proident qui est cupidatat laboris adipisicing ut occaecat.
          </p>
          <div className="flex gap-4 items-center mb-4">
            <IconBuildingSkyscraper className="text-primary-400" />
            <div className="flex flex-col gap-2">
              <span>Marigot</span>
              <span>Saint Martin, 97150</span>
            </div>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <IconPhone className="text-primary-400" />
            <p>+1 555 555 555</p>
          </div>
          <div className="flex gap-4 items-center">
            <IconAt className="text-primary-400" />
            <p>activeoutremer@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}

type PropTypes = {
  label: string;
};

function Input({ label }: PropTypes) {
  return (
    <p className=" w-full">
      <Label className="inline-block mb-1" htmlFor={label.toLowerCase().trim().replaceAll(/ /gi, "-")}>
        {label}{" "}
        <span aria-label="Required" className="text-error-400">
          *
        </span>
      </Label>
      <TextInput
        id={label.toLowerCase().trim().replaceAll(/ /gi, "-")}
        name={label.toLowerCase().trim().replaceAll(/ /gi, "-")}
        className="block w-full"
      />
    </p>
  );
}

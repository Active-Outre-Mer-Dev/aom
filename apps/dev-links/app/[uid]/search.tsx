import { TextInput } from "@aomdev/ui";
import { redirect } from "next/navigation";
import { SearchButton } from "./search-button";

type PropTypes = {
  id: string;
  searchParams: URLSearchParams;
};

export function Search({ id, searchParams }: PropTypes) {
  const onSubmit = async (formData: FormData) => {
    "use server";

    const q = formData.get("q")?.toString();
    const newSearch = new URLSearchParams(searchParams);
    if (q) {
      newSearch.set("q", q);

      redirect(`/${id}?${newSearch.toString()}`);
    }
    redirect(`/${id}`);
  };

  return (
    <form action={onSubmit} className="flex gap-2 ">
      <div className="grow">
        <TextInput crossOrigin={""} type="search" name="q" className="grow" />
      </div>
      <SearchButton />
    </form>
  );
}

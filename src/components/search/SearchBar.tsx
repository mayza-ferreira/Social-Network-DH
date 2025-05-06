"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  query: string;
};

type SearchBarProps = {
  initialQuery: string;
};
const SearchBar = ({ initialQuery }: SearchBarProps) => {
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      query: initialQuery,
    },
  });

  useEffect(() => {
    setValue("query", initialQuery ?? "");
  }, [initialQuery, setValue]);

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data));
    router.push(`/?query=${data.query ?? ""}&type=hash`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" flex w-full mb-3 ">
      <input
        {...register("query")}
        type="text"
        placeholder="Buscar por #Fuerza, #Jedi, etc."
        className=" flex-grow p-2 mr-4 rounded bg-gray-50 border border-gray-200"
      />
      <button className="button-primary">Buscar</button>
    </form>
  );
};

export default SearchBar;

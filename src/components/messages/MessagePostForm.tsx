"use client";

import useMessages from "@/contexts/message.context";
import { UserType } from "@/types/user.types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type MessagePostFormType = {
  parentId?: string;
  currentUser?: UserType;
};

type FormData = {
  message: string;
};

const MessagePostForm = ({ parentId, currentUser }: MessagePostFormType) => {
  const router = useRouter();
  const { postMessage } = useMessages();
  const { register, handleSubmit, resetField, setFocus } = useForm<FormData>();

  useEffect(() => {
    setFocus("message");
  }, [setFocus]);

  const onSubmit = async (data: FormData) => {
    await postMessage(data.message, parentId);
    resetField("message");
    setFocus("message");
  };

  const goToLogin = () => {
    router.push("/login");
    router.refresh();
  };

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center mb-4 ">
        <h3>Iniciá tu sesión para escribir un mensaje</h3>
        <button
          className=" w-fit button-primary mt-4 cursor-pointer"
          type="submit"
          onClick={() => goToLogin()}
        >
          Iniciar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 mb-4 ">
      <div className=" w-full h-full mt-1 relative text-center mb-4 col-span-2 flex items-center justify-center">
        <Image
          className="rounded-full"
          src={currentUser.photoUrl}
          alt={""}
          width={55}
          height={55}
          priority
        />
      </div>
      <div className="flex flex-col ml-4 mt-2 col-span-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            rows={4}
            className=" resize-none w-full p-4 mb-4 rounded bg-gray-50 border border-gray-200"
            placeholder="¿Qué estás pensando?"
            {...register("message", {
              required: true,
            })}
          ></textarea>
          <div className="flex justify-end">
            <button
              className=" w-fit button-primary uppercase font-semibold"
              type="submit"
            >
              Postear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessagePostForm;

"use client";

import RegisterSheme from "@/schemes/register.scheme";
import authApi from "@/services/auth/auth.api";
import { ConflictError } from "@/services/common/https.errors";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../form/InputText";
import SubmitButton from "../form/SubmitButton";

type FormData = {
  username: string;
  password: string;
  name: string;
  photoUrl: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const methods = useForm<FormData>({
    resolver: yupResolver(RegisterSheme),
  });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const loginResponse = await authApi.register(
        data.username,
        data.password,
        data.name,
        data.photoUrl
      );
      console.log(JSON.stringify(loginResponse));
      router.push("/");
      router.refresh();
    } catch (e) {
      if (e instanceof ConflictError) {
        setServerError("El nombre de usuario ya existe: " + data.username);
      } else {
        setServerError("Ha ocurrido un error. Intente mas tarde");
      }
    }
    return false;
  };

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label={"Nombre completo:"}
          fieldName={"name"}
          placeholder="ejemplo: Leia"
          type={"text"}
        />

        <InputText
          label={"Nombre de usuario:"}
          fieldName={"username"}
          placeholder="ejemplo: leia"
          type={"text"}
          styles="mt-2"
        />

        <InputText
          label={"URL de tu foto de perfil:"}
          fieldName={"photoUrl"}
          placeholder="https://..."
          type={"text"}
          styles="mt-2"
        />

        <InputText
          label={"Contraseña"}
          fieldName={"password"}
          placeholder="Contraseña:"
          styles="mt-2"
          type={"password"}
        />

        <SubmitButton
          label={"Crear cuenta"}
          onSubmit={onSubmit}
          styles="mt-4"
        />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  );
};
export default RegisterForm;

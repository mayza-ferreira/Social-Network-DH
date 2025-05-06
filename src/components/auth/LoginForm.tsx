"use client";
import SubmitButton from "@/components/form/SubmitButton";
import authApi from "@/services/auth/auth.api";
import { AccessDeniedError } from "@/services/common/https.errors";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../form/InputText";
import LoginScheme from "@/schemes/login.scheme";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const methods = useForm<FormData>({
    resolver: yupResolver(LoginScheme),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const loginResponse = await authApi.login(data.username, data.password);
      console.log(JSON.stringify(loginResponse));
      router.push("/");
      router.refresh();
    } catch (e) {
      if (e instanceof AccessDeniedError) {
        setServerError("Tu contraseña o usuario son incorrectos");
      } else {
        setServerError("Ha ocurrido un error. Intente mas tarde");
      }
    }
    return false;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label={"Nombre de usuario"}
          fieldName={"username"}
          placeholder="ejemplo: leia"
          type={"text"}
        />
        <InputText
          label={"Contraseña"}
          fieldName={"password"}
          placeholder="Contraseña"
          styles="mt-2"
          type={"password"}
        />

        <SubmitButton
          label={"Iniciar sesión"}
          onSubmit={onSubmit}
          styles="mt-4"
        />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  );
};

export default LoginForm;

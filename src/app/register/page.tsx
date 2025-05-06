import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex  flex-col items-center w-full">
      <h2 className="mb-4">Crea tu cuenta en la red social</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

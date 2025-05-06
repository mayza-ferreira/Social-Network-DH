import LoginForm from "@/components/auth/LoginForm";


const LoginPage = () => {
  return (
    <div className="flex  flex-col items-center w-full">
      <h2 className="mb-4">Iniciar sesión en la red social</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

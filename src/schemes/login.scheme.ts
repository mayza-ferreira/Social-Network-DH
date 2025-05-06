import * as yup from "yup";

const LoginScheme = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default LoginScheme;

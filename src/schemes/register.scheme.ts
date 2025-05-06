import * as yup from "yup";

const RegisterSheme = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    photoUrl: yup.string().required(),
  })
  .required();

  export default RegisterSheme;
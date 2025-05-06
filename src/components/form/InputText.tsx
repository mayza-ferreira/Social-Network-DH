import { useFormContext } from "react-hook-form";

type IputTextProps = {
  label: string;
  fieldName: string;
  placeholder?: string;
  styles?: string;
  type: "text" | "password";
};
const InputText = ({
  label,
  fieldName,
  placeholder,
  styles,
  type,
}: IputTextProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={` flex flex-col ${styles ?? ""}`}>
      <label className="mb-2">{label}</label>
      <input
        {...register(fieldName)}
        type={type}
        placeholder={placeholder}
        className=" p-2 mb-3 rounded bg-gray-50 border border-gray-200"
      />
      {errors && errors[fieldName] && (
        <div className="text-red-600 mb-4">Este campo es obligatorio</div>
      )}
    </div>
  );
};

export default InputText;

import { useState } from "react";
import validateForm from "../services/utils/validateForm";
function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (e, data) => {
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.name === "image") value = e.target.files[0];
    validateForm(name, value, (error, name, value) => {
      setErrors({ ...errors, [name]: error });
      setValues({ ...values, [name]: value });
    });
  };
  return {
    values,
    errors,
    handleChange,
    setValues,
  };
}
export default useForm;

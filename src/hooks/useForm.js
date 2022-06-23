import { useState } from "react";
import validateForm from "../services/utils/validateForm";
function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    validateForm(e.target.name, e.target.value, (error, name, value) => {
      setErrors({ ...errors, [name]: error });
      setValues({ ...values, [name]: value });
    });
  };
  return {
    values,
    errors,
    handleChange,
  };
}
export default useForm;

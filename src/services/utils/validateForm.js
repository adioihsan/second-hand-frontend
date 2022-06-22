function validateForm(name, value, result) {
  let error = null;
  switch (name) {
    case "name":
      if (value.length < 5) error = "Nama minimal 5 karakter atau lebih !";
      else if (value.length > 30)
        error = "Nama tidak boleh melebihi 30 karakter";
      else error = null;
      break;

    case "email":
      const checkRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(
        value
      );
      if (value === undefined) error = "Email tidak boleh kosong !";
      else if (!checkRegex) error = "Format email salah !";
      else error = null;
      break;

    case "password":
      if (value.length < 8) error = "Password minimal 8 karakter";
      else if (value.length > 50) error = "Password maksimal 50 karakter";
      else if (!/.*[a-zA-Z]+.*/.test(value))
        error = "Password harus mengandung huruf";
      else if (!/.*\d+.*/.test(value))
        error = "Password harus mengandung angka";
      else {
        error = null;
      }
    default:
      break;
  }
  result(error, name, value);
}

export default validateForm;

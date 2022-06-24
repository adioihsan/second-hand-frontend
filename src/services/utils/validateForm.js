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
      break;
    case "image":
      if (!value) error = "Tambahkan profile picture !";
      else error = null;
      break;
    case "phone":
      if (value.length < 10) error = "Minimal 10 digit !";
      else error = null;
      break;
    case "price":
      const number = parseInt(value);
      if (isNaN(number)) error = "Harga harus berupa angka";
      if (number < 100) error = "Harga minimal 100 !";
      break;
    default:
      if (value.length < 1) error = "Tidak boleh kosong !";
      else error = null;
      break;
  }
  result(error, name, value);
}

export default validateForm;

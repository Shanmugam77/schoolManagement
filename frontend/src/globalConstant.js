import Swal from "sweetalert2";

export const showErrorAlert = (message) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Error",
      text: message,
      customClass: {
        icon: "centered-icon",
      },
    });
  };
  export const showSuccessAlert = (message) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successful",
      text: message,
      customClass: {
        icon: "centered-icon",
      },
    });
  };
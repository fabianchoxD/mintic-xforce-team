import swal from "sweetalert";

export function notLogged() {
    (swal(
        "Error 401",
        "You must be logged to reach this page",
        "error"
    ).then((result) => {
        window.location = "/home"
    }
    ))
}
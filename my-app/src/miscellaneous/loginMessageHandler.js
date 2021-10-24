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

export function lackOfPrivilegePending() {
    (swal(
        "Error 401",
        "You don't have permissions to access to this resource",
        "error"
    ).then((result) => {
        window.location = "/pending"
    }
    ))
}

export function lackOfPrivilegeSeller() {
    (swal(
        "Error 401",
        "You don't have permissions to access to this resource",
        "error"
    ).then((result) => {
        window.location = "/seller"
    }
    ))
}
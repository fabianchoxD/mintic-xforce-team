import swal from "sweetalert";

export function notLogged() {
    (swal(
        "Error 401",
        "You must be logged to reach this page",
        "error"
    ).then(() => {
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

export function lackOfPrivilegeHome() {
    swal(
        "Error 401",
        "You don't have permission to see this resource",
        "error"
    ).then(function () {
        window.location = "/home";
    });
}

export function logoutMessage() {
    swal(
        "Session ended.",
        "Thanks for shop with us 😊",
        "success"
    ).then(function () {
        window.location = "/home";
    });
}
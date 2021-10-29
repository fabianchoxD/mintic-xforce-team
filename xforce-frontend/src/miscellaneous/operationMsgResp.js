import swal from "sweetalert";

export function successRemoveResponse(operation) {
    swal(operation + " removed successfully.", {
        icon: "success",
    });
}

export function declinedOperationResponse() {
    swal("Operation Declined.", {
        icon: "success",
    });
}
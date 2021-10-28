import swal from "sweetalert";

export function modifiedItemResponse(operation, description) {
    swal(
        "Successful Operation.",
        operation + ": " + description + ", was successfully modified.",
        "success"
    );
}

export function createdItemResponse(description) {
    swal(
        "Successful Operation.",
        description + ", added successfully.",
        "success"
    ).then(() => {
        window.location.reload(true);
    })
}

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
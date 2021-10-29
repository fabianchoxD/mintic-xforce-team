import swal from "sweetalert";

export function emptyDescription() {
        swal(
            "Warning!",
            "Description cannot be empty.",
            "warning"
        );
        return;
}

export function emptyPrice() {
    swal(
        "Warning!",
        "Price field cannot be empty.",
        "warning"
    );
    return;
}

export function formatPrice() {
    swal(
        "Warning!",
        "Only Numbers are available, please review.",
        "warning"
    );
}

export function emptyState() {
    swal(
        "Warning!",
        "State fields cannot be empty.",
        "warning"
    );
}

export function emptyTotal(){
    swal(
        "Warning!",
        "Total field cannot be empty.",
        "warning"
    );
}

export function emptyRole(){
    swal(
        "Warning!",
        "Role field cannot be empty.",
        "warning"
    );
}
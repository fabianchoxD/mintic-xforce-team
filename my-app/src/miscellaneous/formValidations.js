import swal from "sweetalert";

export function emptyDescription() {
    {
        swal(
            "Warning!",
            "Description cannot be empty.",
            "warning"
        );
        return;
    }
}
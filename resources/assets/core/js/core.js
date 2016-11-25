$(function () {

    $('.form-delete .btn-submit-form').on('click', function (event) {

        event.preventDefault();

        var button = $(this);

        swal({
            title: "Are you sure about this?",
            text: "You will not be able to recover this information!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, proceed",
            cancelButtonText: "No, cancel it",
            closeOnConfirm: true
        }, function (isConfirm) {
            if (isConfirm) {
                button.closest("form").submit();
            }
        });

    });

});

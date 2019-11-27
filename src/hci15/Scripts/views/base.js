$(document).ready(function () {

});
class Base {
    constructor() {
        this.InitEvents();
    }

    InitEvents() {
        $(document).on('click', 'button.excel', this.openDialogRequest.bind(this));
        $(document).on('click', 'button.pdf', this.openDialogRequest.bind(this));
        $(document).on('click', 'button.button-request-k', this.closeDialog.bind(this));
        $(document).on('click', 'button.button-request-c', this.openDialog2.bind(this));
        $(document).on('click', 'button.button-request-c-1', this.closeDialog2.bind(this));
    }


    openDialogRe() {
        var cls = arguments[0];
        var title = arguments[1];
        $('#dialog-request').dialog({
            modal: true,
            height: 140,
            width: 400,
            resizable: false,
            dialogClass: cls,
            title: title
        });
    }

    openDialogCa() {
        var cls = arguments[0];
        var title = arguments[1];
        $('#dialog-request-2').dialog({
            modal: true,
            height: 140,
            width: 300,
            resizable: false,
            dialogClass: cls,
            title: title
        });
    }

    openDialogRequest() {
        this.openDialogRe("dialog-request", "BÁN THUỐC - Thông báo");
    }

    closeDialog() {
        $('#dialog-request').dialog('close');
    }

    openDialog2() {
        $('#dialog-request').dialog('close');
        this.openDialogCa("dialog-request-2", "BÁN THUỐC - Thông báo");
    }

    closeDialog2() {
        $('#dialog-request-2').dialog('close');
    }
}
var baseJS = new Base();

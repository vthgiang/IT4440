$(document).ready(function () {

});
class Base {
    constructor() {
        this.InitEvents();
    }

    InitEvents() {
        $(document).on('click', '.item', { 'jsObject': this, 'name': 'Nguyễn Văn Thắng' }, this.active);
        $(document).on('click', '.child-item', { 'jsObject': this, 'name': 'Nguyễn Văn Thắng' }, this.activeChild);
        $(document).on('click', '#del', this.show);
        $(document).on('click', '.item', this.addClassChild);
        $(document).on('click', 'button.excel', this.openDialogRequest.bind(this));
        $(document).on('click', 'button.pdf', this.openDialogRequest.bind(this));
        $(document).on('click', 'button.button-request-k', this.closeDialog.bind(this));
        $(document).on('click', 'button.button-request-c', this.openDialog2.bind(this));
        $(document).on('click', 'button.button-request-c-1', this.closeDialog2.bind(this));
        $(document).on('click', '.ngay', this.addDay);
        $(document).on('click', '.thang', this.addMonth);
        $(document).on('click', '.quy', this.addPrecious);
        $(document).on('click', '.nam', this.addYear);
        $(document).on('click', '.sanpham', this.addProduct);
        $(document).on('click', '.canhan', this.quanlycongviec);
        $(document).on('click', '.task td button', this.chitiet);
    }

    addDay() {
        $('.includechitiet').addClass('them');
        $('.includequanlycongviec').addClass('them');
        $('.includetrang').addClass('them');
        $('#themthang').addClass('them');
        $('#themquy').addClass('them');
        $('#themnam').addClass('them');
        $('#themsanpham').addClass('them');
        $('#themngay').removeClass('them');
    }

    addMonth() {
        $('.includechitiet').addClass('them');
        $('.includequanlycongviec').addClass('them');
        $('.includetrang').addClass('them');
        $('#themngay').addClass('them');
        $('#themquy').addClass('them');
        $('#themnam').addClass('them');
        $('#themsanpham').addClass('them');
        $('#themthang').removeClass('them');
    }

    addPrecious() {
        $('.includechitiet').addClass('them');
        $('.includequanlycongviec').addClass('them');
        $('.includetrang').addClass('them');
        $('#themngay').addClass('them');
        $('#themthang').addClass('them');
        $('#themnam').addClass('them');
        $('#themsanpham').addClass('them');
        $('#themquy').removeClass('them');
    }

    addYear() {
        $('.includechitiet').addClass('them');
        $('.includequanlycongviec').addClass('them');
        $('.includetrang').addClass('them');
        $('#themngay').addClass('them');
        $('#themquy').addClass('them');
        $('#themthang').addClass('them');
        $('#themsanpham').addClass('them');
        $('#themnam').removeClass('them');
    }

    addProduct() {
        $('.includechitiet').addClass('them');
        $('.includequanlycongviec').addClass('them');
        $('.includetrang').addClass('them');
        $('#themngay').addClass('them');
        $('#themquy').addClass('them');
        $('#themnam').addClass('them');
        $('#themsanpham').removeClass('them');
        $('#themthang').addClass('them');
    }
    quanlycongviec() {
        $('.includechitiet').addClass('them');
        $('.includequanlycongviec').removeClass('them');
        $('.includetrang').addClass('them');
        $('#themngay').addClass('them');
        $('#themquy').addClass('them');
        $('#themnam').addClass('them');
        $('#themsanpham').addClass('them');
        $('#themthang').addClass('them');
    }
    chitiet() {
        $('.includechitiet').removeClass('them');
        $('.includequanlycongviec').addClass('them');
        $('.includetrang').addClass('them');
        $('#themngay').addClass('them');
        $('#themquy').addClass('them');
        $('#themnam').addClass('them');
        $('#themsanpham').addClass('them');
        $('#themthang').addClass('them');
    }

    active() {
        $('.nav-menu .item').removeClass('select');
        $(this).addClass('select');
    }

    activeChild() {
        $('.nav-menu .child-item').removeClass('select-child');
        $(this).addClass('select-child');
    }

    show() {
        setTimeout(function () {
            if (!$('nav-menu #child').hasClass('child')) {
                $('.nav-menu #child').removeClass('child');
                $('.nav-menu .child-item').removeClass('select-child');
            }
        }, 100);
    }

    addClassChild() {
        if (!$('nav-menu #child').hasClass('child')) {
            $('.nav-menu #child').addClass('child');

        }
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

$(document).ready(function () {

});
class Controller {
    constructor() {
        this.InitEvents();
    }

    InitEvents() {
        $(document).on('click', '.item', { 'jsObject': this, 'name': 'Nguyễn Văn Thắng' }, this.active);
        $(document).on('click', '.child-item', { 'jsObject': this, 'name': 'Nguyễn Văn Thắng' }, this.activeChild);
        $(document).on('click', '#del', this.show);
        $(document).on('click', '.item', this.addClassChild);
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

}
var baseJS = new Controller();

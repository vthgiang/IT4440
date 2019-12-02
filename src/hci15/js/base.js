$(document).ready(function () {

});
class Base {
    constructor() {
        this.InitEvents();
    }

    InitEvents() {
        $(document).on('click', '.i', { 'jsObject': this, 'name': 'Nguyễn Văn Thắng' }, this.activeme);
        $(document).on('click', '.child', { 'jsObject': this, 'name': 'Nguyễn Văn Thắng' }, this.activechild);
    }

    activeme(){
        $('.i').removeClass('select');
        $(this).addClass('select');
    }

    activechild(){
        $('.child').removeClass('select-child');
        $(this).addClass('select-child');
    }
}
var baseJS = new Base();

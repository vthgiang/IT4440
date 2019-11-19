(function ($) {
    "use strict";

    $(document).ready(function () {

        for (var i = 1; i <= 15; i++) {
            var group_name = 'hci' + ('0' + i).slice(-2);
            var SERVER_HOST = `http://${group_name}.it4440.phungluan.com`;
            $('#myTable > tbody:last-child').append(`<tr><td class="column1">${group_name}</td><td class="column2"><a target="_blank" href="${SERVER_HOST}">visit link</a></td></tr>`);
        }



    })



})(jQuery);
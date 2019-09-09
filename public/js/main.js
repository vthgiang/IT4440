
(function ($) {
    "use strict";

    $(document).ready(function () {
        var SERVER_HOST = 'http://it4440.phungluan.com';
        // $.makeTable = function ({ header, body }) {
        //     var table = $("<table class='table table-hover' id = 'table'>");
        //     var tblHeader = "<tr>";
        //     for (var item of header) tblHeader += `<th>${item}</th>`;
        //     tblHeader += "</tr>";
        //     $(tblHeader).appendTo(table);
        //     $.each(body, function (index, value) {
        //         var TableRow = "<tr>";
        //         $.each(value, function (key, val) {
        //             if (key === 1) {
        //                 TableRow += `<td><a href = ${SERVER_HOST}${val} target = '_blank'>${val}</a></td>`;
        //             } else {
        //                 TableRow += `<td>${val}</td>`;
        //             }
        //         });
        //         TableRow += "</tr>";
        //         $(table).append(TableRow);
        //     });
        //     return ($(table));
        // };

        // var header = ['nhóm', 'Đường dẫn trang'];
        // var body = [];
       

        // var table = $.makeTable({ header, body });
        // $(table).appendTo("#div_table");

         for (var i = 1; i <= 15; i++) {
            var group_name = 'HCI_' + ('0' + i).slice(-2);
         $('#myTable > tbody:last-child').append(`<tr><td class="column1">${group_name}</td><td class="column2"><a target="_blank" href="${SERVER_HOST}/${group_name}/index.html">/${group_name}/index.html</a></td></tr>`);
        }
   
        

    })



})(jQuery);
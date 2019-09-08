const SERVER_HOST = 'http://it4440.phungluan.com';
$.makeTable = function ({ header, body }) {
    let table = $("<table class='table table-hover' id = 'table'>");
    let tblHeader = "<tr>";
    for (let item of header) tblHeader += `<th>${item}</th>`;
    tblHeader += "</tr>";
    $(tblHeader).appendTo(table);
    $.each(body, function (index, value) {
        let TableRow = "<tr>";
        $.each(value, function (key, val) {
            if (key === 1) {
                TableRow += `<td><a href = ${SERVER_HOST}${val} target = '_blank'>${val}</a></td>`;
            } else {
                TableRow += `<td>${val}</td>`;
            }
        });
        TableRow += "</tr>";
        $(table).append(TableRow);
    });
    return ($(table));
};

let header = ['nhóm', 'Đường dẫn trang'];
let body = [];
for (let i = 1; i <= 15; i++) {
    const group_name = 'HCI_' + ('0' + i).slice(-2);
    body.push([
        group_name, `/${group_name}/index.html`
    ]);
}

let table = $.makeTable({ header, body });

$(document).ready(function () {
    $(table).appendTo("#div_table");
})
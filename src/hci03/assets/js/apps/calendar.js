+ function($, window) {

    var calendar = {};

    calendar.init = function() {

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var events = [{
                title: 'Sinh nhật công ty',
                start: new Date(y, m, 1),
                desc: 'Meetings',
                bullet: 'success'
            },
            {
                title: 'Họp tổ hậu cần',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                desc: 'Hangouts',
                bullet: 'success'
            },
            {
                title: 'Họp bàn giao công việc cho nhân viên mới',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false,
                desc: 'Product Checkup',
                bullet: 'warning'
            },
            {
                title: 'Lên kế hoạch tuần tới',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
                desc: 'Conference',
                bullet: 'danger'
            },
            {
                title: 'In vé xe tháng tới cho công ty',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                desc: 'Gathering'
            },

        ];

        $('#full-calendar').fullCalendar({
            height: 850,
            editable: true,
            header: {
                left: 'month,agendaWeek,agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            selectable: true,
            selectHelper: true,
            select: function(start, end) {
                $('.modal').modal('show');

            },
            events: events,
            eventClick: function(event, element) {
                $('.modal').modal('show');
                $('.modal').find('#title').val(events.title);
                $('.modal').find('#start-date').val(events.start);
                $('.modal').find('#end-date').val(events.end);

            },
            editable: true
        })

        $('#start-date').datepicker();
        $('#end-date').datepicker();
    };

    window.calendar = calendar;

}(jQuery, window);

// initialize app
+

function($) {
    calendar.init();
}(jQuery);
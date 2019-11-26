// get cong viec ca nhan
$(document).ready(function() {
    $("#00001>td.id").click(function() {

        var sub = $("#00001>td.sub").text();
        var sta = $("#00001>td.sta").text();
        var pri = $("#00001>td.pri").text();
        var dead = $("#00001>td.dead").text();
        var up = $("#00001>td.up").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00001");

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00002>td.id").click(function() {
        var sub = $("#00002>td.sub").text();
        var sta = $("#00002>td.sta").text();
        var pri = $("#00002>td.pri").text();
        var dead = $("#00002>td.dead").text();
        var up = $("#00002>td.up").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00002");

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00003>td.id").click(function() {
        var sub = $("#00003>td.sub").text();
        var sta = $("#00003>td.sta").text();
        var pri = $("#00003>td.pri").text();
        var dead = $("#00003>td.dead").text();
        var up = $("#00003>td.up").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00003");

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00004>td.id").click(function() {
        var sub = $("#00004>td.sub").text();
        var sta = $("#00004>td.sta").text();
        var pri = $("#00004>td.pri").text();
        var dead = $("#00004>td.dead").text();
        var up = $("#00004>td.up").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00004");

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00005>td.id").click(function() {
        var sub = $("#00005>td.sub").text();
        var sta = $("#00005>td.sta").text();
        var pri = $("#00005>td.pri").text();
        var dead = $("#00005>td.dead").text();
        var up = $("#00005>td.up").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00005");

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00006>td.id").click(function() {
        var sub = $("#00006>td.sub").text();
        var sta = $("#00006>td.sta").text();
        var pri = $("#00006>td.pri").text();
        var dead = $("#00006>td.dead").text();
        var up = $("#00006>td.up").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00006");

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00007>td.id").click(function() {
        var sub = $("#00007>td.sub").text();
        var sta = $("#00007>td.sta").text();
        var pri = $("#00007>td.pri").text();
        var dead = $("#00007>td.dead").text();
        var up = $("#00007>td.up").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00007");

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("select#statuso").change(function() {
        var status = $(this).children("option:selected").val();
        localStorage.setItem("status", status);
    });

    $("select#priorityo").change(function() {
        var priority = $(this).children("option:selected").val();
        localStorage.setItem("priority", priority);
    });

    $("#btnup").click(function() {
        var updated = $("#updated").val();
        var deadline = $("#deadline").val();
        var id = localStorage.getItem("id");
        var status = localStorage.getItem("status");
        var priority = localStorage.getItem("priority");

        if (status == "Mới") {
            $("#" + id + ">td.sta>span").attr("class", "badge badge-pill badge-primary");
        } else if (status == "Đang làm") {
            $("#" + id + ">td.sta>span").attr("class", "badge badge-pill badge-warning");
        } else if (status == "Hoàn thành") {
            $("#" + id + ">td.sta>span").attr("class", "badge badge-pill badge-success");
        } else {
            $("#" + id + ">td.sta>span").attr("class", "badge badge-pill badge-danger");
        }

        if (priority == "Cao") {
            $("#" + id + ">td.pri>span").attr("class", "badge badge-pill badge-danger");
        } else if (priority == "Trung bình") {
            $("#" + id + ">td.pri>span").attr("class", "badge badge-pill badge-warning");
        } else {
            $("#" + id + ">td.pri>span").attr("class", "badge badge-pill badge-success");
        }

        $("#" + id + ">td.sta>span").text(status);
        $("#" + id + ">td.pri>span").text(priority);
        $("#" + id + ">td.dead").text(deadline);
        $("#" + id + ">td.up").text(updated);

    });

    $("#btndel").click(function() {
        var id = localStorage.getItem("id");
        $("#" + id).remove();
    });
});
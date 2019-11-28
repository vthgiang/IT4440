// get cong viec ca nhan
$(document).ready(function() {
    var today = new Date().toLocaleDateString();
    $("#today").text(today);

    $("#00001>td.id").click(function() {

        var sub = $("#00001>td.sub").text();
        var sta = $("#00001>td.sta").text();
        var pri = $("#00001>td.pri").text();
        var dead = $("#00001>td.dead").text();
        var up = $("#00001>td.up").text();
        var mem = $("#00001>td.mem").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00001");
        localStorage.setItem("mem", mem);

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#member").val(mem);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00002>td.id").click(function() {
        var sub = $("#00002>td.sub").text();
        var sta = $("#00002>td.sta").text();
        var pri = $("#00002>td.pri").text();
        var dead = $("#00002>td.dead").text();
        var up = $("#00002>td.up").text();
        var mem = $("#00002>td.mem").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00002");
        localStorage.setItem("mem", mem);

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#member").val(mem);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00003>td.id").click(function() {
        var sub = $("#00003>td.sub").text();
        var sta = $("#00003>td.sta").text();
        var pri = $("#00003>td.pri").text();
        var dead = $("#00003>td.dead").text();
        var up = $("#00003>td.up").text();
        var mem = $("#00003>td.mem").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00003");
        localStorage.setItem("mem", mem);

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#member").val(mem);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00004>td.id").click(function() {
        var sub = $("#00004>td.sub").text();
        var sta = $("#00004>td.sta").text();
        var pri = $("#00004>td.pri").text();
        var dead = $("#00004>td.dead").text();
        var up = $("#00004>td.up").text();
        var mem = $("#00004>td.mem").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00004");
        localStorage.setItem("mem", mem);

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#member").val(mem);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00005>td.id").click(function() {
        var sub = $("#00005>td.sub").text();
        var sta = $("#00005>td.sta").text();
        var pri = $("#00005>td.pri").text();
        var dead = $("#00005>td.dead").text();
        var up = $("#00005>td.up").text();
        var mem = $("#00005>td.mem").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00005");
        localStorage.setItem("mem", mem);

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#member").val(mem);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00006>td.id").click(function() {
        var sub = $("#00006>td.sub").text();
        var sta = $("#00006>td.sta").text();
        var pri = $("#00006>td.pri").text();
        var dead = $("#00006>td.dead").text();
        var up = $("#00006>td.up").text();
        var mem = $("#00006>td.mem").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00006");
        localStorage.setItem("mem", mem);

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#member").val(mem);
        $("#status select").val(sta);
        $("#priority select").val(pri);
    });

    $("#00007>td.id").click(function() {
        var sub = $("#00007>td.sub").text();
        var sta = $("#00007>td.sta").text();
        var pri = $("#00007>td.pri").text();
        var dead = $("#00007>td.dead").text();
        var up = $("#00007>td.up").text();
        var mem = $("#00007>td.mem").text();
        localStorage.setItem("sub", sub);
        localStorage.setItem("sta", sta);
        localStorage.setItem("pri", pri);
        localStorage.setItem("dead", dead);
        localStorage.setItem("up", up);
        localStorage.setItem("id", "00007");
        localStorage.setItem("mem", mem);

        $(".modal-title").text(sub);
        $("#updated").val(up);
        $("#deadline").val(dead);
        $("#member").val(mem);
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

    $("select#sta1").change(function() {
        var status1 = $(this).children("option:selected").val();
        localStorage.setItem("status1", status1);
    });

    $("select#pri1").change(function() {
        var priority1 = $(this).children("option:selected").val();
        localStorage.setItem("priority1", priority1);
    });





    $("#btnup").click(function() {
        var updated = $("#updated").val();
        var deadline = $("#deadline").val();
        var id = localStorage.getItem("id");
        var status = localStorage.getItem("status");
        var priority = localStorage.getItem("priority");
        var member = $("#member").val();
        if (confirm("Bạn có muốn thay đổi?")) {
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
            $("#" + id + ">td.mem").text(member);

            alert("Cập nhật thành công!");
        }

    });

    $("#btndel").click(function() {
        var id = localStorage.getItem("id");
        if (confirm("Bạn có muốn xóa?")) {
            $("#" + id).remove();
            alert("Xóa thành công!");
        }
    });
});
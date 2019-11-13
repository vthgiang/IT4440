var obj = [
    {
        name: "Len ke hoach Marketing",
        priority: "cao",
        emp: "ThangNV@congty.com",
        monitor: "KhanhHV@congty.com",
        start: "7/10/2018",
        end: "12/10/2019",
        status: "dang thuc hien",
    },
    {
        name: "Len ke hoach Marketing",
        priority: "cao",
        emp: "ThangNV@congty.com",
        monitor: "KhanhHV@congty.com",
        start: "7/10/2018",
        end: "12/10/2019",
        status: "dang thuc hien",
    }
]
name = (data)=>{
    var name = [data.name, data.priority].join(" ")
return name
}
document.getElementById("name") = obj.map((data)=>{return name});
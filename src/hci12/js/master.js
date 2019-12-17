
// $( ".collapsed" ).click(function() {
// 		$( ".item" ).css("background-color", "#161B21");
// 		$( ".collapsed" ).css("background-color", "#161B21");
// });

function myFunction(){
            if(document.getElementById("name").value === "manager" && document.getElementById("password").value === "manager"){
                window.location.replace('./leader/home.html');
            }
            else if(document.getElementById("name").value === "employee" && document.getElementById("password").value === "employee"){
                window.location.replace('./employee/home.html');
            }else{
                 document.getElementById("demo").innerHTML = "Sai thông tin đăng nhập!";
            }
        }

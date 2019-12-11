document.addEventListener("DOMContentLoaded", () => {

  var email_select = document.getElementById("email_select");
  const hide_email = document.getElementById("hide_email");
  const delete_email = document.getElementById("delete_email");
  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");
  const mark = document.getElementById("mark");
  const star = document.getElementById("star");
  star.style.display = "none";
  content2.style.display = "none";
  hide_email.addEventListener("click", () => {
    email_select.style.display = "none";
    content1.style.display = "none";
    content2.style.display = "block";
    email_select = email_select.nextElementSibling;
  });

  delete_email.addEventListener("click", () => {
    email_select.style.display = "none";
    content1.style.display = "none";
    content2.style.display = "block";
    email_select = email_select.nextElementSibling;
  });
  let count = 0;
  mark.addEventListener("click", () => {
    ++count;
    if ((count & 1)) {
      star.style.display = "inline";
    } else {
      star.style.display = "none";
    }
  });
});

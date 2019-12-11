document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("chat_box");
  const message = document.getElementById("message");
  document.getElementById("btnsend").addEventListener("click", () => {
    createMessage();
  });

  function createMessage() {
    if (message.value !== "") {
      const span = document.createElement("span");
      span.innerHTML = message.value;
      const div1 = document.createElement("div");
      div1.appendChild(span);
      div1.classList.add("bubble-wrapper");
      const div2 = document.createElement("div");
      div2.classList.add("bubble");
      div2.appendChild(div1);
      const div3 = document.createElement("div");
      div3.classList.add("msg");
      div3.classList.add("msg-sent");
      div3.appendChild(div2);
      box.appendChild(div3);
      message.value = "";
      box.scrollTop = box.scrollHeight;
    }
  }

  message.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      createMessage();
      return false;
    }
  });
});

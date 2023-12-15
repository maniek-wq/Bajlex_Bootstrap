function SendMail() {
  // Pobierz wartości z pól formularza
  let emailValue = document.getElementById("email_id").value;
  let messageValue = document.getElementById("message").value;

  if (!emailValue || !messageValue) {
    alert("Wprowadź adres e-mail i wiadomość przed wysłaniem.");
    return;
  }

  let params = {
    email_id: emailValue,
    message: messageValue,
  };

  emailjs
    .send("service_ul8bste", "template_3w483ke", params)
    .then(function (res) {
      alert("Success! " + res.status);
    });
}

let sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function () {
  SendMail();
});
const breakpoints = {
  xs: window.matchMedia("(max-width: 575.98px)"),
  sm: window.matchMedia("(min-width: 576px) and (max-width: 767.98px)"),
  md: window.matchMedia("(min-width: 768px) and (max-width: 991.98px)"),
  lg: window.matchMedia("(min-width: 992px) and (max-width: 1199.98px)"),
  xl: window.matchMedia("(min-width: 1200px)"),
};
const phone = document.getElementById("phone");
const env = document.getElementById("envelope");
const house = document.getElementById("house");
function changeSize() {
  if (breakpoints.xl.matches) {
    phone.classList.add("fa-2xl");
    env.classList.add("fa-2xl");
    house.classList.add("fa-2xl");
  }
}
// changeSize();

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

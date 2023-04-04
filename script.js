console.log(document.getElementById("form-email"));
document.getElementById("form-email").addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phoneNumber").value;
  let subject = document.getElementById("subject").value;
  let yourMessage = document.getElementById("yourMessage").value;

  let body = `Nama: ${name}, Email: ${email}, Phone: ${phone}, Subject: ${subject}, YourMessage: ${yourMessage}`;

  window.location.href = `mailto:${email}?body=${body}`;
});

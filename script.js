// Send contact form
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('service_v9b4t1r', 'template_rjssscq', this)
          .then(function() {
              console.log('SUCCESS!');
              messageSent();
          }, function(error) {
              console.log('FAILED...', error);
              messageNotSent();
          });
  });
}

// Change textarea height
window.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelectorAll("textarea");

  textarea.forEach((el) => {
    el.setAttribute("style", `height: ${el.scrollHeight}px;`);
    el.addEventListener("input", setTextareaHeight);
  });

  function setTextareaHeight() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
  }
});

// Show message when sent
function messageSent() {
  const formSent = document.querySelector(".form-sent");
  formSent.style.display = "block";
};

function messageNotSent() {
  const formSent = document.querySelector(".form-not-sent");
  formSent.style.display = "block";
};
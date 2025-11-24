function submitForm() {
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      var emailParams = {
        user_email: document.getElementById("email").value,
      };

      emailjs.send("service_8zrsopo", "template_g68y533", emailParams).then(
        function (response) {
          // Success: Update label and hide form elements
          const label = document.querySelector("label[for='email']");
          const emailInput = document.getElementById("email");
          const submitButton =
            emailInput.parentElement.querySelector(".form-submit");

          label.innerHTML = `
          <span style="
            color: var(--color-highlight);
            font-weight: bold;
            font-size: 1.2rem;
            display: block;
            padding: 1rem;
            background-color: var(--color-background);
            border: 2px solid var(--color-highlight);
            border-radius: 8px;
            margin-top: 1rem;
          ">
            ✅ Received! Look out for an email soon!
          </span>
        `;

          // Hide form elements
          emailInput.style.display = "none";
          submitButton.style.display = "none";
        },
        function (error) {
          alert("FAILED...", error);
        }
      );
    });
}

function sendToStripe() {
  window.location.href = "https://buy.stripe.com/5kQ00j9IE1JE2pPfLE9fW05";
}

submitForm();

let leftBox = document.querySelector('.left-box');
let radioButton = document.querySelector('input[type=radio]');
let secondRadio = document.getElementById('radioSecond')
let rightBox = document.querySelector('left__box2')

radioButton.addEventListener("click", function(){
    if (radioButton.checked === true && secondRadio.checked === false) {
        leftBox.style.backgroundColor = "hsl(148, 38%, 91%)";
        rightBox.style.backgroundColor = "";
    }
})


secondRadio.addEventListener("click", function() {
    if (secondRadio.checked === true && radioButton.checked === false){
        rightBox.style.backgroundColor = "hsl(148, 38%, 91%)";
        leftBox.style.backgroundColor = "";
    }
})

document.querySelector('.actionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let errorElement = document.querySelectorAll('.error');
    errorElement.forEach(function(element) {
        element.style.display = 'none';
    });

    let hasError = false;

    let firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
        document.getElementById('firstNameError').style.display = 'block';
        hasError = true;
    }

    let lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        document.getElementById('lastNameError').style.display = 'block';
        hasError = true;
    }
    
    let email = document.getElementById('email').value.trim();
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    }

    let queryType = document.querySelector('input[name="queryType"]:checked');
    if (!queryType) {
        document.getElementById('queryTypeError').style.display = 'block';
        hasError = true;
    }

    let message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        hasError = true;
    }

    let consent = document.getElementById('consent').checked;
    if (!consent) {
        document.getElementById('consentError').style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        document.querySelector('.actionForm').reset();
        leftetEBox.style.backgroundColor = "";
        rightBox.style.backgroundColor = "";
        showCustomAlert();
    }
});

function showCustomAlert() {
    let customAlert = document.getElementById('customAlert');
    customAlert.classList.add('show');

    setTimeout(() => {
        customAlert.classList.remove('show');
    }, 3000);
}
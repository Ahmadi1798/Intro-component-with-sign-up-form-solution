const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const fName_errMsg = document.getElementById('fName_err_msg');
const lName_errMsg = document.getElementById('lName_err_msg');
const email_errMsg = document.getElementById('email_err_msg');
const pass_errMsg = document.getElementById('pass_err_msg');
const formlink = document.getElementById('link-form');

formlink.addEventListener('submit', formSubmit);

// Validate an email address
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
// const validate = () => {
//   const $result = $('#result');
//   const email = $('email').val();
//   $result.text('');

//   if (validateEmail(email)) {
//     $result.text(email + ' is valid.');
//     $result.css('color', 'green');
//   } else {
//     $result.text(email + ' is invalid.');
//     $result.css('color', 'red');
//   }
//   return false;
// };

// $('#email').on('input', validate);

function formSubmit(e) {
  e.preventDefault();

  if (firstName.value === '') {
    fName_errMsg.innerHTML = 'First Name cannot be empty!';
    firstName.classList.remove('border-grayishblue');
    firstName.classList.add('border-red');
  }
  if (lastName.value === '') {
    lName_errMsg.innerHTML = 'Last Name cannot be empty';
    lastName.classList.remove('border-grayishblue');
    lastName.classList.add('border-red');
  }
  if (!validateEmail(email.value)) {
    email_errMsg.innerHTML = 'Email is not valid';
    email.classList.remove('border-grayishblue');
    email.classList.add('border-red');
  }
  if (password.value === '') {
    pass_errMsg.innerHTML = 'Password cannot be empty!';
    password.classList.remove('border-grayishblue');
    password.classList.add('border-red');
  } else {
    alert('success!');
  }
}
console.log(firstName);

let firstName = document.write(prompt("ismingizni kiriting..."));
let lastName = document.write(prompt("familyangizni kiriting..."));
let age = document.write(+prompt("yoshingizni kiriting..."));
let emaile = document.write(prompt("emaile-ingizni kiriting..."));

function validatefirstName(firstName) {
  if (Number(firstName)) {
    alert("Ism raqam va belgi iborat bo'lmaydi");
  }
}

const validateLastName = (lastName) => {
  if (Number(lastName)) {
    alert("familiyangiz raqam yoki harfdan iborat bo'lmaydi");
    return false;
  }
};

function validateAge(age) {
  if (age <= 0,  age > 150  ) {
    alert("yosh notogri kiritildi");
    return false;
  }
  return true;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

if (validateName(firstName)) {
  let lastName = document.write(prompt("familyangizni kiriting..."));
  if (validateLastName(lastName)) {
    let age = +prompt("yoshingizni kiriting:");
    if (validateAge(age)) {
      let emiale = prompt("Emaile ingizni kiritng... (test@gmail.com)");
      if (validateEamail(emile)) {
        let object = {
          firstName: firstName,
          lastName: lastName,
          age: age,
          emiale: emaile,
        };
        console.log(object);
      }
    }
  }
}
const btn = document.querySelector("#btn");
btn && btn.querySelector('click', function() {
    alert('')
})



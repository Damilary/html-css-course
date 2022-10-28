const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

function addUser(e) {
    const name = nameInput.value;
    const email = emailInput.value;
    if (name === '' || email === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name} : ${email}`));
        userList.appendChild(li);
        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

function removeUser(e) {
    e.preventDefault();
    const li = e.target.parentNode.parentNode;
    userList.removeChild(li);
    // clear fields of users
    nameInput.value = '';
    emailInput.value = '';
}

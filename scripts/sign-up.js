import { message } from '../scripts/utils/utils.js';
import { getUsers } from './getUsers.js';
import { createUser } from './createUser.js';

const signUpForm = document.querySelector('.sign-up__form');
const signUpButton = document.getElementById('sign-up-button');

signUpButton.addEventListener('click', async e => {
  e.preventDefault();

  const users = await getUsers();

  const name = document.getElementById('name-sign-up').value.trim();
  const phone = document.getElementById('phone-sign-up').value.trim();
  const password = document.getElementById('password-sign-up').value.trim();
  const profilePicture = document
    .getElementById('profile-picture-sign-up')
    .value.trim();

  if (name == '') {
    message('info', 'Enter your name');
  } else if (phone == '') {
    message('info', 'Enter your phone number');
  } else if (phone.length < 10) {
    message('info', 'Not a valid phone number, should be ten digits');
  } else if (users.find(user => user.phone_number == phone)) {
    message('warning', 'This phone number is already registered');
  } else if (password == '') {
    message('info', 'Enter your password');
  } else if (password.length < 4) {
    message('info', 'Not a valid password, should be at least 4 digits');
  } else if (profilePicture == '') {
    message('info', 'Enter your profile picture URL');
  } else {
    const newUser = {
      name: name,
      phone_number: phone,
      password: password,
      profile_picture: profilePicture,
      online: true,
    };

    createUser(newUser);
    message('success', 'Your account was created successfully');
    signUpForm.reset();
  }
});

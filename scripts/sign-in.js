import { displayUserHome } from './home.js';
import { message } from '../scripts/utils/utils.js';
import { getUsers } from './getUsers.js';

const signInForm = document.querySelector('.sign-in__form');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const signInButton = document.getElementById('sign-in-button');
const signUpLink = document.getElementById('sign-up-link');
const mobileHome = document.querySelector('.mobile-home');

signInButton.addEventListener('click', async e => {
  e.preventDefault();

  const phone = document.getElementById('phone-sign-in').value.trim();
  const password = document.getElementById('password-sign-in').value.trim();

  const users = await getUsers();

  if (phone == '') {
    message('info', 'Enter your phone number');
  } else if (phone.length < 10) {
    message('info', 'Not a valid phone number, should be ten digits');
  } else if (!users.find(user => user.phone_number == phone)) {
    message('error', 'The entered number was not found');
  } else if (password === '') {
    message('info', 'Enter your password');
  } else if (!users.find(user => user.password == password)) {
    message('error', 'Incorrect password');
  } else {
    const foundUser = users.find(
      user => user.phone_number == phone && user.password == password
    );
    if (foundUser) {
      message('success', `Welcome ${foundUser.name}`);
      signInForm.reset();
      // console.log(foundUser);
      signIn.style = 'display: none';
      mobileHome.style = 'display: block';
      displayUserHome(foundUser);
    } else {
      message('error', `The user was not found`);
      // console.log('user not found');
    }
  }
});

signUpLink.addEventListener('click', e => {
  e.preventDefault();
  signIn.style = 'display: none';
  signUp.style = 'display: block';
});

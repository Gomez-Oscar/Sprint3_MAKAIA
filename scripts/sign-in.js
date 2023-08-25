import { message } from '../scripts/utils/utils.js';
import { getUsers } from './getUsers.js';

const signInButton = document.getElementById('sign-in-button');

signInButton.addEventListener('click', async e => {
  e.preventDefault();

  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();

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
      console.log(foundUser);
    } else {
      console.log('user not found');
    }
  }
});

import { message } from '../scripts/utils/utils.js';
import { getUsers } from './getUsers.js';

const d = document;
const signInButton = d.getElementById('sign-in-button');

signInButton.addEventListener('click', async e => {
  e.preventDefault();

  const phone = d.getElementById('phone').value.trim();
  const password = d.getElementById('password').value.trim();

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
      console.log(foundUser);
      message('success', `Welcome ${foundUser.name}`);
    } else {
      console.log('user not found');
    }
  }
});

import { message } from '../scripts/utils/utils.js';
import { updateUser } from './updateUser.js';

export async function editProfile(user) {
  const currentNameText = document.querySelector('#current-name-text');
  const inputNamePlaceholder = document.querySelector('#input-name');
  const profilePicture = document.querySelector('#profile-picture-edit');

  const editNameIcon = document.getElementById('edit-icon');
  const checkIcon = document.getElementById('check-icon');
  const currentName = document.querySelector('.current-name');
  const editInformation = document.querySelector('.edit-information');

  currentNameText.innerHTML = user.name;
  inputNamePlaceholder.placeholder = user.name;
  profilePicture.src = user.profile_picture;

  editNameIcon.addEventListener('click', e => {
    e.preventDefault();
    currentName.style = 'visibility: hidden;';
    editInformation.style = 'visibility: visible;';
  });

  checkIcon.addEventListener('click', e => {
    e.preventDefault();
    const updatedName = document.querySelector('#input-name').value;

    if (updatedName.trim() !== '') {
      const updatedUser = {
        name: updatedName,
        phone_number: user.phone_number,
        password: user.password,
        profile_picture: user.profile_picture,
        online: true,
      };

      updateUser(user.id, updatedUser);

      currentNameText.innerHTML = updatedUser.name;
      inputNamePlaceholder.placeholder = updatedUser.name;
    }

    currentName.style = 'visibility: visible;';
    editInformation.style = 'visibility: hidden;';
  });
}

import { message } from '../scripts/utils/utils.js';
import { updateUser } from './updateUser.js';
import { displayUserHome } from './home.js';

export async function editProfile(user) {
  const currentNameText = document.querySelector('#current-name-text');
  const inputNamePlaceholder = document.querySelector('#input-name');
  const currentProfilePicture = document.querySelector('#profile-picture-edit');
  const profilePictureContainer = document.querySelector('.auxiliar-container');
  const editUrl = document.querySelector('.edit-url');

  const closeIconUrl = document.getElementById('close-icon-url');
  const editNameIcon = document.getElementById('edit-icon');
  const checkIconName = document.getElementById('check-icon-name');
  const checkIconUrl = document.getElementById('check-icon-url');
  const currentName = document.querySelector('.current-name');
  const editInformation = document.querySelector('.edit-information');

  const backArrow = document.querySelector('#left-arrow-icon');
  const mobileHome = document.querySelector('.mobile-home');
  const mobileEditProfile = document.querySelector('.mobile-edit-profile');

  let newUser = undefined;

  currentNameText.innerHTML = user.name;
  inputNamePlaceholder.placeholder = user.name;
  currentProfilePicture.src = user.profile_picture;

  /*   editNameIcon.addEventListener('click', e => {
    e.preventDefault();
    currentName.style = 'visibility: hidden;';
    editInformation.style = 'visibility: visible;';
  }); */
  /* 
  checkIconName.addEventListener('click', async e => {
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

      newUser = updateUser(user.id, updatedUser);

      currentNameText.innerHTML = updatedUser.name;
      inputNamePlaceholder.placeholder = updatedUser.name;
    } 

    currentName.style = 'visibility: visible;';
    editInformation.style = 'visibility: hidden;';
  });*/

  /*   checkIconUrl.addEventListener('click', e => {
    e.preventDefault();
    const updatedUrl = document.querySelector('#input-url').value;

    let regexUrl =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    if (updatedUrl.trim() === '') {
      message('info', 'Enter a new URL');
    } else if (!regexUrl.test(updatedUrl)) {
      message('error', 'Not a valid URL');
    } else {
      const updatedUser = {
        name: user.name,
        phone_number: user.phone_number,
        password: user.password,
        profile_picture: updatedUrl,
        online: true,
      };

      newUser = updateUser(user.id, updatedUser);
      currentProfilePicture.src = updatedUser.profile_picture;

      editUrl.style = 'visibility: hidden;';
    }
  }); */

  profilePictureContainer.addEventListener('click', e => {
    e.preventDefault();
    editUrl.style = 'visibility: visible;';
  });

  closeIconUrl.addEventListener('click', e => {
    e.preventDefault();
    editUrl.style = 'visibility: hidden;';
  });

  backArrow.addEventListener('click', async e => {
    e.preventDefault();
    mobileEditProfile.style = 'display: none';
    mobileHome.style = 'display: block';
    newUser != undefined ? displayUserHome(newUser) : displayUserHome(user);
  });
}

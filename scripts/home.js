import { getUsers } from './getUsers.js';

export async function displayUserHome(foundUser) {
  const users = await getUsers();
  const itemsContainer = document.querySelector(
    '.mobile-message-list-container'
  );

  const signIn = document.querySelector('.sign-in');
  const mobileHome = document.querySelector('.mobile-home');
  const logoutButton = document.getElementById('log-out-icon');

  const mobileHomeProfilePicture = document.querySelector('.mobile-header img');

  mobileHomeProfilePicture.src = foundUser.profile_picture;

  logoutButton.addEventListener('click', e => {
    e.preventDefault();

    mobileHome.style = 'display: none';
    signIn.style = 'display: block';

    // delete the old users in the interface
    [
      ...document.querySelectorAll(
        'div.mobile-home > div.mobile-message-list-container > div'
      ),
    ].map(e => e.remove());
  });

  users.forEach(user => {
    const { name, profile_picture } = user;

    if (name != foundUser.name) {
      const itemContent = /*html*/ `
          <div class="img-thumbnail-container">
            <img
              src=${profile_picture}
              alt="profile picture"
              class="img-thumbnail"
            />
          </div>
          <div class="mobile-message-information">
            <div class="mobile-message-header">
              <h4>${name}</h4>
              <p>Friday</p>
            </div>
            <div class="mobile-message-body">
              <img
                src="../assets/double-check-svgrepo-com.svg"
                alt="double check icon"
                width="20px"
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </div>
    `;

      const itemElement = document.createElement('div');
      itemElement.classList.add('mobile-message-list-item');
      itemElement.innerHTML = itemContent;
      itemsContainer.appendChild(itemElement);
    }
  });
}

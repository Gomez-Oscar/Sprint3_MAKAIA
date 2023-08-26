import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const ENDPOINT = 'https://sprint3makaia-production-180a.up.railway.app/users/';

export async function createUser(user) {
  try {
    const response = await axios.post(ENDPOINT, user);
    // console.log(response);
    return response;
  } catch (error) {
    console.error('Error creating user:', error);
    return [];
  }
}

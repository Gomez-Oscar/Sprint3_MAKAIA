import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const ENDPOINT = 'https://sprint3makaia-production.up.railway.app/users/';

export async function updateUser(id, updatedUser) {
  try {
    const response = await axios.put(ENDPOINT + id, {
      ...updatedUser,
    });
    return response;
  } catch (error) {
    console.log('Error updating user');
  }
}

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const ENDPOINT = 'https://sprint3makaia-production.up.railway.app/users';

export async function getUsers() {
  try {
    const response = await axios.get(ENDPOINT);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

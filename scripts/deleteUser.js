import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export async function deleteUser(id) {
  try {
    await axios.delete(
      `https://sprint3makaia-production.up.railway.app/users/${id}`
    );
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

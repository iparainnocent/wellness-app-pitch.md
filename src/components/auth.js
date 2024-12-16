import axios from 'axios';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5555/login', { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem('user', JSON.stringify(data)); 
      return data; // Return user data for further use
    }
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Rethrow to handle in the calling function
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.delete('http://localhost:5555/logout');
    if (response.status === 200) {
      localStorage.removeItem('user'); // Clear user data from local storage
      return true; // Indicate successful logout
    }
  } catch (error) {
    console.error('Logout error:', error);
    throw error; // Rethrow to handle in the calling function
  }
};

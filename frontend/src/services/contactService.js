import axios from 'axios';

// Use environment variable or fallback for development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/contact/`,
  headers: { 'Content-Type': 'application/json' },
});

export const createContact = async (contactData) => {
  const response = await api.post('/', contactData);
  return response.data;
};

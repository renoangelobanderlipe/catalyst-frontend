import { create } from 'apisauce'

export const api = create({
  baseURL: process.env.APP_URL, // Replace it with your URL
});


/**
 * Authentication API 
 */
export const loginUser = (params) => api.post('/api/auth/login', params);
export const signupUser = (params) => api.post('/api/auth/signup', params);
export const forgetUserPassword = (params) => api.post('/api/verify-email', params)

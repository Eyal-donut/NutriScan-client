import Cookies from 'js-cookie';
export const setAuthCookie = (token) => {
  Cookies.set('authToken', token, { expires: 1, path: '/' });
};
export const getAuthCookie = () => {
  return Cookies.get('authToken');
};
export const removeAuthCookie = () => {
  Cookies.remove('authToken');
};
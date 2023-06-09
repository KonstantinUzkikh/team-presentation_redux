export const BASE_URL = 'https://reqres.in';

export const endPoints = {
  users: '/api/users',
  register: '/api/register',
  login: '/api/login'
}

export const initUser ={
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    like: false
}

// Количество карточек пользователей, отображаемое на одной странице при пагинации
export const usersOnPageLimit = 8;

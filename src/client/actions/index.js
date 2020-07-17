export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/users');
    dispatch({ type: FETCH_USERS, payload: res.data });
  } catch (error) {
    console.error(error.message);
  }
}
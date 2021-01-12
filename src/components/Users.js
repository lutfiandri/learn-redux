/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux';
import { useEffect } from 'react';

const Users = () => {
  const dispatch = useDispatch()
  const { loading, users, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  const usersElement = () => {
    if(loading) {
      return (
        <div>loading...</div>
      )
    } else if(error === '') {
      return (users.map(user => (
        <div key={user.id}>{user.name}</div>
      )))
    } else {
      return (
        <div>
          <div>error</div>
          <div>{error}</div>
        </div>
      )
    }
  }

  return (
    <div>
      <div>Users</div>
      <div>
      {usersElement()}
      </div>
    </div>
  );
}
 
export default Users;
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { getUsername } from '../../redux/auth/selectors';

//import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  //const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
}
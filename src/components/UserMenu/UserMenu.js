import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import { Wrapper, Username, UserLogin, Button} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>
        Welcome, <UserLogin >{user.name}</UserLogin>
      </Username>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};

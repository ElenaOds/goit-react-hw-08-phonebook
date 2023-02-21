import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { useAuth } from '../../hooks/useAuth';
import { Wrapper, Username} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
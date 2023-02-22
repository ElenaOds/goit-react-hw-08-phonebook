import * as React from "react";
import Button from "@mui/material/Button";

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import { Wrapper, Username, UserLogin } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>
        Welcome, <UserLogin >{user.name}</UserLogin>
      </Username>
      <Button variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};

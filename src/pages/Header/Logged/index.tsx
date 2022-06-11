import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';
import { UserInfo, Page, DocPass, Exit } from '@rsuite/icons';
import {
  NavBarContainer,
  NavItems,
  ProfileName,
  Diviser,
  LogOut,
} from './styles';

const Logged: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [page, setPage] = useState('posts');

  const handleSignOut = () => {
    signOut();
    handleGoTo('/home');
  };

  const handleGoTo = (to: string) => {
    navigate(to, { replace: true });
  };

  return (
    <NavBarContainer>
      <NavItems activeKey={page} onSelect={(item: string) => setPage(item)}>
        <NavItems.Item
          eventKey="posts"
          icon={<Page style={{ fontSize: 25 }} />}
          onClick={() => handleGoTo('/home')}
        >
          POSTS
        </NavItems.Item>
        <NavItems.Item
          eventKey="my-posts"
          icon={<DocPass style={{ fontSize: 25 }} />}
          onClick={() => handleGoTo('/my-posts')}
        >
          MEUS POSTS
        </NavItems.Item>
      </NavItems>
      <Diviser />
      <UserInfo style={{ fontSize: 25, marginLeft: 5 }} />
      <ProfileName>{user.name}</ProfileName>
      <LogOut appearance="subtle" onClick={() => handleSignOut()}>
        <Exit style={{ fontSize: 25 }} />
      </LogOut>
    </NavBarContainer>
  );
};

export default Logged;

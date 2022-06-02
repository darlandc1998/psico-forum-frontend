import React, { useState } from 'react';
import { UserInfo, Page, DocPass } from '@rsuite/icons';
import { NavBarContainer, NavItems, ProfileName, Diviser } from './styles';

export default function Logged() {
  const [page, setPage] = useState('posts');

  return (
    <NavBarContainer>
      <NavItems activeKey={page} onSelect={(item: string) => setPage(item)}>
        <NavItems.Item
          eventKey="posts"
          icon={<Page style={{ fontSize: 25 }} />}
        >
          POSTS
        </NavItems.Item>
        <NavItems.Item
          eventKey="my-posts"
          icon={<DocPass style={{ fontSize: 25 }} />}
        >
          MEUS POSTS
        </NavItems.Item>
      </NavItems>
      <Diviser />
      <UserInfo style={{ fontSize: 25, marginLeft: 5 }} />
      <ProfileName>Darlan Domingos Candiotto</ProfileName>
    </NavBarContainer>
  );
}
import React from 'react';
import { UserInfo } from '@rsuite/icons';
import { ProfileContent, ProfileName } from './styles';

export default function Profile() {
  return (
    <ProfileContent>
      <UserInfo style={{ fontSize: 25 }} />
      <ProfileName>Darlan Domingos Candiotto</ProfileName>
    </ProfileContent>
  );
}

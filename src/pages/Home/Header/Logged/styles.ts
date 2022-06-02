import styled from 'styled-components';
import { Content, Nav } from '../../../../components';

export const NavBarContainer = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const NavItems = styled(Nav)`
  flex: 1;
  text-align: end;

  .rs-nav-item {
    width: 150px;
    text-align: center;
    vertical-align: middle;
    color: #212121;
  }

  .rs-nav-item:hover {
    background: none;
  }

  .rs-nav-item.rs-nav-item-active {
    font-weight: bold;
    background: none;

    > svg {
      font-weight: bold;
    }
  }
`;

export const ProfileName = styled(Content)`
  flex: none;
  text-align: end;
  font-size: 15px;
  margin-left: 5px;
`;

export const Diviser = styled(Content)`
  flex: none;
  background: #757575;
  width: 2px;
  min-height: 50px;
  margin: 5px;
`;

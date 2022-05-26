import styled from 'styled-components';
import { Content, Header, Footer } from '../../components';

export const HeaderHome = styled(Header)`
  display: flex;
  height: 10vh;
  align-items: center;
`;

export const ContentHome = styled(Content)`
  display: flex;
  height: 100vh;
`;

export const FooterHome = styled(Footer)`
  display: flex;
  height: 5vh;
  align-items: center;
  padding: 5px;
  background-color: #eeeeee;
  color: #616161;

  > svg {
    margin-left: 5px;
  }
`;

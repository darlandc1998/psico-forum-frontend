import styled from 'styled-components';
import { Content, Header, Footer } from '../../components';

export const HeaderHome = styled(Header)`
  display: flex;
  height: 7vh;
  align-items: center;

  background: #80deea;
  background: -webkit-linear-gradient(to left, #80deea, #006064);
  background: linear-gradient(to left, #80deea, #006064);

  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  right: 0px !important;
  overflow: hidden !important;
`;

export const ContentHome = styled(Content)`
  display: flex;
  position: absolute;
  top: 65px;
  bottom: 20px;
  left: 0px;
  right: 0px;
  overflow: auto;
`;

export const FooterHome = styled(Footer)`
  display: flex;
  height: 4vh;
  align-items: center;
  padding: 5px;
  background-color: #eeeeee;
  color: #616161;

  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow: hidden;

  > svg {
    margin-left: 5px;
  }
`;

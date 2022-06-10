import styled from 'styled-components';
import { Content, Header } from '../../components';

export const ContainerHeader = styled(Header)`
  display: flex;
  height: 10vh;
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

export const ContentHeader = styled(Content)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;

  .rs-form-group {
    margin: 5px;
  }
`;

export const TitleHeader = styled(Content)`
  font-size: 18px;
  color: white;
  flex: 1;
`;

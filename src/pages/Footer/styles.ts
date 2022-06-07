import styled from 'styled-components';
import { Footer } from '../../components';

export const FooterStyled = styled(Footer)`
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

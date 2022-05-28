import styled from 'styled-components';
import { Panel, Content } from '../../../../../components';

export const Card = styled(Panel)`
  display: inline-block;
  width: 240px;
  background: white;
`;

export const Body = styled(Panel)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const Title = styled(Content)`
  font-size: 13px;
`;

export const Cover = styled.img`
  height: 240px;
  padding: 15px;
`;

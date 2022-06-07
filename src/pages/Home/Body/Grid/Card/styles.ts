import styled from 'styled-components';
import { Panel, Content } from '../../../../../components';

export const Card = styled(Panel)`
  display: inline-block;
  width: 240px;
  background: white;
  cursor: pointer;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Body = styled(Panel)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const Title = styled(Content)`
  font-size: 13px;
`;

export const Date = styled(Content)`
  font-size: 10px;
  margin-top: 5px;
  text-align: right;
  font-weight: bold;
`;

export const Cover = styled.img`
  height: 225px;
  padding: 15px;
  border-radius: 20px;
`;

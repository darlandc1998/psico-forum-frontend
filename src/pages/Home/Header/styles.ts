import styled from 'styled-components';
import { Content } from '../../../components';

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

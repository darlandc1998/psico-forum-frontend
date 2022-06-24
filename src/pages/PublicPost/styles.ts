import styled from 'styled-components';
import { Content } from '../../components';

export const ContainerPost = styled(Content)`
  padding: 30px;
`;

export const ContentPost = styled(Content)`
  flex: 1;
`;

export const TitlePost = styled(Content)`
  font-size: 25px;
  padding: 5px;
`;

export const ContentCoverPost = styled(Content)`
  text-align: center;
`;

export const CoverPost = styled.img`
  max-height: 250px;
  padding: 15px;
  border-radius: 20px;
`;

export const TextPost = styled(Content)`
  font-size: 15px;
  padding: 5px;
`;

export const ContentDetailsPost = styled(Content)`
  display: -webkit-box;
  padding: 10px 0px;
`;

export const AuthorPost = styled(Content)`
  display: flex;
  font-size: 13px;
`;

export const AuthorTitlePost = styled(Content)`
  flex: initial;
  margin-right: 5px;
  font-weight: bold;
`;

export const AuthorValuePost = styled(Content)`
  flex: initial;
`;

export const CreationPost = styled(Content)`
  display: flex;
  justify-content: end;
  font-size: 13px;
`;

export const CreationTitlePost = styled(Content)`
  flex: initial;
  margin-right: 5px;
  font-weight: bold;
`;

export const CreationValuePost = styled(Content)`
  flex: initial;
`;

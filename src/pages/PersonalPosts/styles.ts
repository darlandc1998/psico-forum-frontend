import styled from 'styled-components';
import { Content, Table, IconButton } from '../../components';

export const ContainerPosts = styled(Content)`
  display: flex;
  flex: 1;
  padding: 10px;
  justify-content: center;
`;

export const TablePosts = styled(Table)`
  flex: 1;

  .rs-table-body-row-wrapper {
    cursor: pointer;
  }

  .rs-table-cell-header .rs-table-cell-content {
    font-weight: bold;
    color: #424242;
    font-size: 14px;
  }
`;

export const ButtonNewPost = styled(IconButton)`
  position: absolute;
  height: 50px;
  width: 50px;
  z-index: 2;
  bottom: 25px;
  right: 20px;
`;

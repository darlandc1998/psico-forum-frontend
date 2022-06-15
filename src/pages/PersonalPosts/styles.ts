import styled from 'styled-components';
import { Content, Table } from '../../components';

export const ContainerPosts = styled(Content)`
  display: flex;
  flex: 1;
  padding: 10px;
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

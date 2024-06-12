import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
  }

  .ant-table {
  font-size: 14px !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important; 
  transition: box-shadow 0.3s ease-in-out !important;
}

.ant-table:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
}

.ant-table-thead > tr > th {
  background-color: #f5f5f5 !important;
  color: #333 !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  border-bottom: 2px solid #d9d9d9 !important;
}

.ant-table-tbody > tr > td {
  padding: 16px !important;
  border-bottom: 1px solid #e8e8e8 !important;
}

.ant-table-row:hover {
  background-color: #f0f0f0 !important;
}

  .ant-pagination-item, .ant-pagination-prev, .ant-pagination-next {
  border-radius: 15px !important;
}

.ant-pagination-item-active a {
    border-color: #3C4043 !important;
    color: #000 !important;
  }

  .ant-pagination-item-active {
    border-color: #3C4043 !important;
  }

  .ant-btn {
    border-radius: 100px;
    background-color: #3C4043;
    color: #f0f2f5;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;

    &:hover {
        background-color: #1c1c1c !important;
        border-color: #1c1c1c !important;
        color: #f0f2f5 !important;
    }
}

 .confirmButtonPopUp {
    background-color: #00B094;
    width: 150px; 
    margin-left: auto; 

    &:hover {
      background-color: #00897b !important;
    border-color: #00897b !important;
    }
  }

  .cancelButtonPopUp {
    background-color: #EB1D68;
    width: 150px;
    margin-right: auto;

    &:hover {
      background-color: #c2185b !important;
      border-color: #c2185b !important;
  }
}

.saveButton {
    margin: 20px;
    display: block;
    width: 200px;
}

.editButton {
    margin-left: auto;
    margin-right: 20px;
    margin-top: 20px;
    width: 200px;
  }

  .cancelButton {
    background-color: #ffffff;
    border: 1px solid #3C4043;
    color: #3C4043;
    margin-left: auto;
    margin-right: 20px;
    margin-top: 20px;
    width: 200px;

    &:hover {
      background-color: #3C4043 !important;
    border-color: #3C4043 !important;
    }
  }

.defaultButton {
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    width: 200px;
  }

  .modalConfirmButton {
    background-color: #00B094;
    width: 150px;

    &:hover {
      background-color: #00897b !important;
    border-color: #00897b !important;
    }
  }

  .modalCancelButton {
    background-color: #EB1D68;
    width: 150px;
    margin-right: 60px;

    &:hover {
      background-color: #c2185b !important;
      border-color: #c2185b !important;
  }
  }

  .ant-btn:not(.ant-btn-primary) {
  color: #f0f2f5
}

  .ant-menu.ant-menu-horizontal {
    .ant-menu-item {
        transition: color 0.3s; 

        &::after {
            transition: background-color 0.3s;
        }
    }
}

.ant-menu.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu.ant-menu-horizontal > .ant-menu-item-selected a {
    color: #1c1c1c;
    font-weight: 600; 
}

.ant-menu.ant-menu-horizontal > .ant-menu-item-selected::after{
    background: #3C4043;
    border: none;
    height: 2px;
}

.ant-menu.ant-menu-horizontal > .ant-menu-item:hover::after,
.ant-menu.ant-menu-horizontal > .ant-menu-item-active:hover::after,
.ant-menu.ant-menu-horizontal > .ant-menu-item-selected:hover::after {
    background-color: #3C4043; 
    border: none;
    height: 2px;
}

.ant-select-selector {
  border-radius: 100px !important; 
  border-color: #d9d9d9 !important; 
}

.ant-select-focused .ant-select-selector,
.ant-select-selector:focus,
.ant-select-selector:active {
  border-color: #bfbfbf !important;
  box-shadow: none !important;
}
`;

export const Cabecalho = styled.div`
  padding: 20px;
  margin-left: auto;

  > * {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  overflow-x: hidden;

  .ant-btn {
    border-radius: 100px;
    background-color: #3c4043;
    width: 250px;
  }

  .ant-breadcrumb {
    margin-left: 20px;
    cursor: default;
  }
`;

export const ReadOnlyField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;

  .label {
    font-size: 25px;
  }

  .value {
    font-size: 20px;
    color: #747474;
  }
`;
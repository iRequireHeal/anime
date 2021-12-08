import styled from "styled-components";

export const SearchInput = styled.input `
  margin-top: 20px;
  padding-left: 10px;
  width: 300px;
  height: 20px;
  -webkit-border-radius: 10px;
  display: flex;
  font-size: 16px;
  transition-duration: 500ms;
  &:focus {
    background: #dcfce8;
    box-shadow: 0 0 5px rgba(189, 252, 212, 1);;
    color: black;
  }
`
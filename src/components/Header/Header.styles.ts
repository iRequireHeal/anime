import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledNav = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #282c34;
  justify-content: space-around;
`
export const StyledLogo = styled(Link)`
  font-size: 26px;
  text-decoration: none;
  height: 20px;
  color: #61dafb;
  margin: 0;
  padding: 10px;
  transition-duration: 500ms;
  &:hover {
    color: red;
    border-radius: 45px;
  }
`
export const StyledGenres = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  height: 20px;
  color: #61dafb;
  margin: 0;
  padding: 10px;
  transition-duration: 500ms;
  &:hover {
    color: red;
    border-radius: 45px;
  }
`
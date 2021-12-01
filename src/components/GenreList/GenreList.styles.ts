import styled from "styled-components";
import {Link} from "react-router-dom";

export const GenreListItem = styled(Link)`
  width: 100px;
  height: 20px;
  font-size: 20px;
  color: antiquewhite;
  margin: 5px;
  text-decoration: none;
  text-align: center;
  transition: 0.2s;
  &:active{
    color: #e6007e;
  }
`

export const GenreListWrapper = styled.div`
  margin: 50px 100px ;
  height: 250px;
  display: grid;
  grid-template-columns:repeat(auto-fill, 300px) 100px;
  
`
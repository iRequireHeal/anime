import styled from "styled-components";
import {Link} from "react-router-dom";

export const AnimePreviewStyles = styled.div`
  text-align: center;
  display: flex;
  margin: 30px 50px;
`

export const AnimeTitle = styled(Link)`
  cursor: pointer;
  text-align: left;
  border: none;
  background-color: transparent;
  padding: 0 20px;
  color: cyan;
  text-decoration: none;
  font-size: 30px;
`

export const AnimeImage = styled.img`
  border-radius: 10%;
  border: 2px solid grey;
  width: 305px;
  height: 406px;
  max-height: 406px;
  &:hover {
    border: red solid 2px;
  }
`
export const Title = styled.div`
  display: flex;
`

export const Description = styled.div`
  display: block;
  width: 1284px;
  text-align: left;
  padding: 10px 20px;
  color: antiquewhite;
`
export const DescriptionWrapper = styled.div`
  width: 1500px;

  padding: 10px 30px 30px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.11);
  border-radius: 12px;
`

export const AgeRating = styled.div`
  font-weight: bold;
  color: red;
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: white;
`
export const AttributesWrapper = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
  width: 300px;
  padding-left: 20px;
`
export const AttributeName = styled.p`
  color: antiquewhite;
  margin: 10px 0;
`
export const Attribute= styled.p`
  margin: 10px 0;
  width: 90px;
  text-align: left;
  color: lightskyblue;
`
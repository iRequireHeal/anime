import styled from "styled-components";

export const StyledAnimePrev = styled.div`
  text-align: center;
  display: flex;
  margin: 30px 50px;
`

export const AnimeTitle = styled.a`
  padding: 0 20px;
  color: cyan;
  text-decoration: none;
  font-size: 30px;
`

export const AnimeImage = styled.img`
  border-radius: 10%;
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
  color: white;
`
export const DescriptionWrapper = styled.div`
  width: 1500px;
  padding: 20px 30px;
  margin: 10px 20px;
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
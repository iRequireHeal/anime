import styled from "styled-components";

export const FlippingPageWrapper = styled.div`
  display: flex;
  text-align: center;
  margin: 10px;
  justify-content: center;
`

export const FlippingButton = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  border-radius: 45px;
  margin: 10px 50px;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: aqua;
  background: darkviolet;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
  &:hover {
    background: #2EE59D;
    box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
    color: white;
    transform: translateY(-4px);
  }
`
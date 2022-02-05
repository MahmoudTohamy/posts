/** @format */

import styled from "styled-components";
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 8%;
`;
export const Card = styled.div`
  width: 300px;
  height: 400px;
  margin-bottom: 25px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 200px;
`;
export const CardImg = styled.img`
  width: 300px;
  height: 200px;
`;
export const DateTag = styled.span`
  margin-top: auto;
  color: #bcbcbc;
`;
export const CardTitle = styled.span`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const CardText = styled.span`
  color: #bcbcbc;
`;

/** @format */

import styled from "styled-components";
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 8%;
`;
export const HeaderTag = styled.div`
  padding-left: 20px;
  border-bottom: 1px solid gray;
  text-align: left;
`;
export const Card = styled.div`
  width: 300px;
  height: 400px;
  margin-bottom: 25px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 200px;
  text-align: left;
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
export const LoadMore = styled.button`
  color: white;
  background-color: #d84141;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const PostDetailsContainer = styled.div`
  padding: 3%;
`;
export const PostDetailsBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const PostDataImg = styled.img`
  width: 100%;
  height: 400px;
  min-width: 300px;
`;

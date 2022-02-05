/** @format */

import React from "react";
import styled from "styled-components";
import { CardProps } from "../Constants/CommonConstants";
import {
  Card,
  CardImg,
  CardInfo,
  CardText,
  CardTitle,
  DateTag,
} from "./StyledComponents";
export default function PostCard(props: CardProps) {
  return (
    <Card>
      <CardImg src={props.post.image} />
      <CardInfo>
        <CardTitle>
          {props.post.owner.title} {props.post.owner.firstName}{" "}
          {props.post.owner.lastName}
        </CardTitle>
        <CardText>{props.post.text}</CardText>
        <DateTag>
          Published at: <b>{props.post.publishDate}</b>
        </DateTag>
      </CardInfo>
    </Card>
  );
}

/** @format */

import React from "react";
import { useRouter } from "next/router";
import Header from "../Components/Header";
import { Post, PostDetailsProps } from "../Constants/CommonConstants";
import {
  PostDetailsContainer,
  PostDetailsBody,
  PostData,
  PostDataImg,
  CardText,
  DateTag,
} from "../Components/StyledComponents";
import PostCard from "../Components/PostCard";

export default function PostDetails(props: PostDetailsProps) {
  return (
    <div>
      <Header />
      <PostDetailsContainer>
        <h1>
          {" "}
          {props.post.owner.title} {props.post.owner.firstName}{" "}
          {props.post.owner.lastName}
        </h1>

        <PostDetailsBody>
          <PostData>
            <PostDataImg src={props.post.image} />
            <CardText>{props.post.text}</CardText>
          </PostData>
          <div>
            <h3>Recommended Posts</h3>
            {props.userPosts.map((post) => (
              <PostCard post={post} />
            ))}
          </div>
        </PostDetailsBody>
      </PostDetailsContainer>
    </div>
  );
}
export async function getServerSideProps(context) {
  let postId = context.params.postId;
  const res = await fetch(`https://dummyapi.io/data/v1//post/${postId}`, {
    headers: { "app-id": "61fdc5feccc5eb03c2b64a7e" },
  });
  let post = await res.json();
  const userPostRes = await fetch(
    `https://dummyapi.io/data/v1//user/${post.owner.id}/post?limit=5`,
    {
      headers: { "app-id": "61fdc5feccc5eb03c2b64a7e" },
    }
  );
  let userPosts = await userPostRes.json();
  userPosts = userPosts.data.filter(
    (singlePost: Post) => singlePost.id !== post.id
  );
  // Pass data to the page via props
  return { props: { post, userPosts } };
}

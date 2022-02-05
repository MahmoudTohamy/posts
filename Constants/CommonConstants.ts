/** @format */

export interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: object;
  publishDate: string;
  owner: Owner;
}
interface Owner {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
}
export interface CardProps {
  post: Post;
}
export interface HomeProps {
  posts: Post[];
}
export interface PostDetailsProps {
  userPosts: Post[];
  post: Post;
}

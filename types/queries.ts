// export interface PostsType {
//   posts: PostType[];
// }
export type PostsType = any;

export interface PostType {
  id?: string;
  title?: string;
  description?: string;
  content?: string;
  createdAt?: string;
  catagory?: CatagoryType;
}

export interface PostsCountArgs {
  offset: number;
  limit: number;
}

export interface PostsCount {
  postsCount: number;
}

export interface CatagoryType {
  id?: string;
  name?: string;
  createdAt?: any;
}

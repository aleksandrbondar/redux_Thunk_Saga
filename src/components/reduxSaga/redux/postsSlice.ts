import { createSlice } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export type PostsState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'postsStorage',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    fetchPostsRequest(state) {
      state.posts.length = 0;
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action) {
      state.posts = action.payload.slice(0, 4);
      state.loading = false;
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Failed to fetch posts';
    },
    deletePosts: (state) => {
      state.posts.length = 0
      state.loading = false;
    },
    setPostsAsync: () => { }
  },

})

export const { setPostsAsync, setPosts, fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure, deletePosts } = postsSlice.actions
export default postsSlice.reducer
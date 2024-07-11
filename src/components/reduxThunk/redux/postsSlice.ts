import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

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

const createAsyncAction = (type: string, url: string) => {
  return createAsyncThunk(
    type,
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return { value: data };
    }
  );
};

const getPosts = createAsyncAction('postsStorage/getPosts', 'https://jsonplaceholder.typicode.com/posts');

const postsSlice = createSlice({
  name: 'postsStorage',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    deletePosts: (state) => {
      state.posts.length = 0
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.posts.length = 0;
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload.value.slice(0, 4);
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
  }
});

export const { setPosts, deletePosts } = postsSlice.actions;
export { getPosts };
export default postsSlice.reducer;
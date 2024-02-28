import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchQuestions = createAsyncThunk(
  'question/fetchQuestions',
  async (token ) => {
    try {
      const response = await axios.get("https://portal.learnabble.xyz/api/v2/accounts/me/questions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return (error.message);
    }
  }
);

export const postQuestion = createAsyncThunk(
  'question/postQuestion',
  async ({ token, questionData }) => {
    try {
      const response = await axios.post('https://portal.learnabble.xyz/api/v2/core/questions/add/', questionData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    questions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions=action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       .addCase(postQuestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(postQuestion.fulfilled, (state, action) => {
      //   state.questions=action.payload,
      //   state.loading = false;
      //   state.error = null;
      // })
      .addCase(postQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default questionSlice.reducer;


import { RootState } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  locale: string;
  isLoading: boolean;
  toast: {
    duration?: number;
    type?: string;
    show: boolean;
    title?: string;
    message: string;
  };
  profile: any;
  isMenuOpen: boolean;
  isNotFound: boolean;
  audioPlaying: string | number;
}

const initialState: CommonState = {
  locale: "en-US",
  isLoading: false,
  toast: {
    duration: 3000,
    show: false,
    message: "",
  },
  profile: {},
  isMenuOpen: false,
  isNotFound: false,
  audioPlaying: "",
};

export const commonSlices = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLoading: (state: RootState, action: PayloadAction<any>) => {
      state.isLoading = action.payload;
    },
    setMenu: (state: RootState, action: PayloadAction<any>) => {
      state.isMenuOpen = action.payload;
    },
    setToast: (
      state,
      action: PayloadAction<{
        title?: string;
        message: string;
        show: boolean;
        duration?: number;
        type?: "success" | "error";
      }>
    ) => {
      state.toast = { ...initialState.toast, ...action.payload };
    },
    setProfile: (state: RootState, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
    setNotFound: (state: RootState, action: PayloadAction<boolean>) => {
      state.isNotFound = action.payload;
    },
    setAudioPlaying: (
      state: RootState,
      action: PayloadAction<string | number>
    ) => {
      state.audioPlaying = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setToast,
  setProfile,
  setMenu,
  setNotFound,
  setAudioPlaying,
} = commonSlices.actions;

export default commonSlices.reducer;

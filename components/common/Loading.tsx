import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-main-1">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loading;

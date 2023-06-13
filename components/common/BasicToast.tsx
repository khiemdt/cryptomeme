import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { setToast } from "@mfc/redux/slices/common";

const BasicToast = () => {
  const dispatch = useAppDispatch();
  const { toast } = useAppSelector((state) => state.common);
  const { show, message, title, type = "error", duration = 1500 } = toast;
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setToast({ show: false, message: "", type: "success" }));
  };

  // const action = (
  //   <React.Fragment>
  //     <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // )
  if (!show) return null;
  const isError = type === "error";
  return (
    <Snackbar
      open={show}
      autoHideDuration={2000}
      onClose={handleClose}
      message={message}
      // action={action}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        "& .MuiSnackbar-anchorOriginBottomRight": { borderRadius: "16px" },
      }}
    >
      <div
        className={`bg-white rounded-[2px] flex px-[16px] py-[12px] min-w-[280px] max-w-[345px] w-auto items-center gap-[12px] shadow-[1px_1px_3px_rgba(0,0,0,0.15)] border ${isError ? "border-[#F5222D]" : "border-[#52C41A]"
          }`}
      >
        <div className={"w-[24px]"}>
          {show && (
            <IconButton>
              {type === "error" ? (
                <ErrorIcon color={"error"} />
              ) : (
                <CheckCircleRoundedIcon style={{ color: "#52C41A" }} />
              )}
            </IconButton>
          )}
        </div>
        <div className={"grow ml-[12px]"}>
          <p
            className={`text-16-22 ${isError ? "text-[#F5222D]" : "text-[#52C41A]"
              }`}
          >
            {title}
          </p>
          <p
            className={`text-14-22 ${isError ? "text-[#F5222D]" : "text-[#52C41A]"
              }`}
          >
            {message}
          </p>
        </div>
        {/* <button className={'w-[24px]'} onClick={handleClose}>
          <CloseIcon />
        </button> */}
      </div>
    </Snackbar>
  );
};

export default BasicToast;

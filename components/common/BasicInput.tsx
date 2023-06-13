import { FormError } from "@mfc/helpers/interfaces";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Tooltip from "@mui/material/Tooltip";
import clsx from "clsx";
import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from "react";
import ic_copy from "@mfc/assests/icons/ic_copy.svg";
import Error from "./Error";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  tooltip?: string;
  classes?: string;
  showIconPassword?: boolean;
  showPasswordFirstTime?: boolean;
  error?: FormError;
  endAdornment?: any;
  placeholderClasses?: string;
  showIconCopy?: boolean;
  onCopy?: () => void;
}

const BasicInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isRequired,
      tooltip,
      classes,
      showIconCopy,
      onCopy,
      showIconPassword,
      showPasswordFirstTime,
      type,
      error,
      endAdornment,
      placeholderClasses,
      ...props
    },
    ref
  ) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const [htmlType, setHtmlType] = useState<
      HTMLInputTypeAttribute | undefined
    >("text");

    useEffect(() => {
      if (showPasswordFirstTime) {
        setHtmlType("text");
      } else {
        setHtmlType(type);
      }
      setIsShowPassword(!!showPasswordFirstTime);
    }, [type, showPasswordFirstTime]);

    const toggletPasswod = (isShow: boolean) => {
      setIsShowPassword(isShow);
      setHtmlType(isShow ? "text" : "password");
    };

    return (
      <>
        <label className="block relative">
          {label && (
            <p className={"text-16-24 text-gray-5c5c5c mb-[8px] font-medium"}>
              {label}
              &nbsp;
              {isRequired && <span className={"text-red"}>*</span>}
              &nbsp;
              {tooltip && (
                <Tooltip
                  placement="top"
                  title={tooltip}
                  sx={{ fontSize: 16 }}
                  arrow
                >
                  <HelpOutlineIcon />
                </Tooltip>
              )}
            </p>
          )}
          <div className="relative">
            <input
              ref={ref}
              className={clsx(
                "w-full h-[48px] text-16-24 px-4 py-3 rounded-lg text-neutral-7 outline-none",
                `placeholder:${
                  placeholderClasses ? placeholderClasses : "text-neutral-5"
                }`,
                `border border-neutral-5 hover:border-neutral-5`,
                "focus:border-neutral-5 focus:outline-none focus:border-solid",
                classes,
                {
                  ["text-red-6 border border-red-6 hover:border-red-6 focus:border-red-6"]:
                    error?.show,
                  ["pr-[42px]"]:
                    type === "password" && showIconPassword && !showIconCopy,
                  ["pr-[82px]"]:
                    type === "password" && showIconPassword && showIconCopy,
                }
              )}
              type={htmlType}
              {...props}
            />
            {type === "password" && showIconPassword && (
              <button
                className={`absolute ${
                  showIconCopy ? "right-[48px]" : "right-[12px]"
                } top-1/2 -translate-y-1/2 opacity-50`}
                onClick={() => toggletPasswod(!isShowPassword)}
              >
                {isShowPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </button>
            )}
            {error && <Error {...error} />}
          </div>
          {showIconCopy && (
            <button
              className={"absolute right-[12px] top-1/2 -translate-y-1/2"}
              onClick={onCopy}
            >
              <img
                src={ic_copy}
                alt={"ic_copy"}
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          )}
          {endAdornment}
        </label>
      </>
    );
  }
);

export default BasicInput;

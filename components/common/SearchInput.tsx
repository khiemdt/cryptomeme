import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "@mfc/helpers/hooks/useWindowDimensions";
import { isEmpty } from "@mfc/helpers/utils/common";
import { useRouter } from "next/router";
import { PRACTICE_TYPES } from "@mfc/helpers/constants/constants";

interface SearchProps {
  placeholder?: string;
  handleChange?: any;
  classContainer?: string;
  defaultValue?: string
}

const SearchInput = ({
  placeholder,
  handleChange,
  classContainer,
  defaultValue,
}: SearchProps) => {
  const router = useRouter();
  const { subtype, practice_type } = router.query;
  const windowDimensions = useWindowDimensions();
  const isMobile = windowDimensions.width < 768;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e?.target?.value;
    setValue(newValue);
    // if (value.trim() !== newValue.trim() && handleChange)
    //   handleChange(newValue);
  };

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (practice_type === PRACTICE_TYPES.LICH_SU) {
      setValue("");
    }
  }, [subtype]);

  useEffect(() => {
    if (inputRef && inputRef?.current && showInput) inputRef?.current?.focus();
  }, [showInput, inputRef]);

  return (
    <div
      className={`
        flex items-center border rounded-[5px] border-neutral-5 max-h-[44px] overflow-hidden md:min-w-[320px]
        ${isMobile && showInput
          ? "w-full absolute top-0 z-[1] left-0 bg-white"
          : ""
        }
        ${classContainer || ""}
      `}
    >
      <input
        ref={inputRef}
        value={value}
        placeholder={placeholder || "Tìm kiếm"}
        onChange={onChange}
        onKeyDown={(e: any) => {
          if (e.key === "Enter" && handleChange) {
            handleChange(value);
            setShowInput(false);
            if (e?.blur) e?.blur();
            if (inputRef) inputRef?.current?.blur();
          }
        }}
        className={`px-4 outline-none h-[44px] lg:border-r lg:border-neutral-5 w-full ${isMobile && !showInput ? "hidden" : "block"
          }`}
      />
      <div
        className="p-2 items-center flex opacity-50 cursor-pointer"
        onClick={() => {
          if (isMobile) {
            if (showInput && handleChange) handleChange(value);
            setShowInput(!showInput);
          } else {
            if (handleChange) {
              handleChange(value);
              setShowInput(false);
            }
          }
        }}
      >
        {isMobile && showInput ? <CloseIcon /> : <SearchIcon />}
      </div>
      {!isEmpty(value) && isMobile && !showInput && (
        <p
          className="w-[60px] max-w-[60px] mr-3 text-[#58595B] block text-16-20 whitespace-nowrap overflow-hidden text-ellipsis"
          onClick={() => setShowInput(!showInput)}
        >
          {value}
        </p>
      )}
    </div>
  );
};

export default SearchInput;

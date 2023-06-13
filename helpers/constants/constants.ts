import { WatcheMeeTypesProps } from "../interfaces";
import { MenuPracticeProps } from "../interfaces/practice";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://dev-apigw.mfacilities.net";
export const API_UPLOAD_SHOW =
  process.env.NEXT_API_UPLOAD_SHOW || "https://test-api.classforme.net/storage";
export const CLIENT_ID =
  process.env.NEXT_PUBLIC_CLIENT_ID || "c9a21722-4580-4ff8-ba94-e62f1343193c";
export const HEADER_URL =
  process.env.NEXT_PUBLIC_HEADER_URL || "https://test-web.classforme.edu.vn";

export const RAW_TYPES = [
  {
    type: [1, 2, 3, 4, 5, 10, 12, 13, 23, 30, 31, 33, 43],
    name: "điền vào chỗ trống",
  },
  {
    type: [0, 17, 18, 20, 24, 36],
    name: "trắc nghiệm",
  },
  {
    type: [8, 40, 41, 42],
    name: "nối",
  },
  {
    type: [35],
    name: "sắp xếp",
  },
  {
    type: [7, 26],
    name: "đúng sai",
  },
  {
    type: [32],
    name: "kéo thả",
  },
  {
    type: [29],
    name: "tô màu vào hình",
  },
];

export const QUESTION_TYPE = {
  CHOICE: "CHOICE",
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
  REORDER: "REORDER",
  RECORD: "RECORD",
};

export const PRACTICE_TYPES = {
  CHUYEN_DE: "chuyen-de",
  KIEM_TRA: "kiem-tra",
  LICH_SU: "lich-su",
  WATCH_MEE: "watch-mee",
  CHAT_MEE: "chat-mee",
  GUIDE_MEE: "guide-mee",
};
export const MENU_PRACTICE: Array<MenuPracticeProps> = [
  {
    name: "Chuyên đề",
    url: `/luyen-tap/${PRACTICE_TYPES.CHUYEN_DE}`,
    type: PRACTICE_TYPES.CHUYEN_DE,
  },
  {
    name: "Kiểm tra",
    url: `/luyen-tap/${PRACTICE_TYPES.KIEM_TRA}`,
    type: PRACTICE_TYPES.KIEM_TRA,
  },
  {
    name: "Lịch sử luyện tập",
    url: `/luyen-tap/${PRACTICE_TYPES.LICH_SU}`,
    type: PRACTICE_TYPES.LICH_SU,
    subMenu: [
      {
        name: "Lịch sử kiểm tra",
        url: `/luyen-tap/${PRACTICE_TYPES.LICH_SU}`,
        type: "EXAM",
      },
      {
        name: "Lịch sử chuyên đề",
        url: `/luyen-tap/${PRACTICE_TYPES.LICH_SU}`,
        type: "PRACTICE",
      },
    ],
  },
  {
    name: "Watch Mee",
    url: `/luyen-tap/${PRACTICE_TYPES.WATCH_MEE}`,
    type: PRACTICE_TYPES.WATCH_MEE,
  },
  {
    name: "Chat Mee",
    url: `/luyen-tap/${PRACTICE_TYPES.CHAT_MEE}`,
    type: PRACTICE_TYPES.CHAT_MEE,
  },
  {
    name: "Guide Mee",
    url: `/luyen-tap/${PRACTICE_TYPES.GUIDE_MEE}`,
    type: PRACTICE_TYPES.GUIDE_MEE,
  },
];

export const STATUS = {
  PENDING: "PENDING",
  DONE: "DONE",
  CANCEL: "CANCEL",
  UPCOMING: "UPCOMING",
  DOING: "DOING",
  CONFIRM: "CONFIRM",
  REJECT: "REJECT",
};

export const WATCH_MEE_TYPES: WatcheMeeTypesProps = {
  FAVOURITE: "favourite",
  VIDEO: "video",
  PLAYLIST: "playlist",
};

export const PAGINATION = {
  size: 10,
  page: 1,
};

export const ACCOUNT_TYPES = {
  STUDENT: "STUDENT",
  PARENT: "PARENT",
};

export const GUIDE_MEE_STATUS = {
  SUCCESS: "SUCCESS",
  PENDING: "PENDING",
  FAIL: "FAIL",
  DRAFT: "DRAFT",
};
export const WATCH_MEE_FILTER_KEY = "watch-mee-filter";

export const LOGIN_QUESTION_CODES = {
  SEX: "sex",
  DOB: "dob",
  HOBBY: "hobby",
};

export const LOGIN_QUESTION_TYPES = {
  USER_INFO: "USER_INFO",
  LABEL: "LABEL",
};

export const SIGN_UP_TYPES = {
  PHONE: "PHONE",
  OTP: "OTP",
  PASSWORD: "PASSWORD",
  ZALO: "ZALO",
  SUCCESS: "SUCCESS",
};

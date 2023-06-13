export interface ServerResponse {
  success?: boolean;
  data?: any;
  result?: any;
  status?: any;
  [propsName: string]: any;
}
export interface MenuProps {
  name: string;
  url: string;
}
export interface FormError {
  show: boolean;
  message: string;
}
export type WatcheMeeType = "favourite" | "video" | "playlist";
export type FavouriteType = "videos" | "playlist";
export interface WatcheMeeTypesProps {
  FAVOURITE: "favourite";
  VIDEO: "video";
  PLAYLIST: "playlist";
}
export interface QuestionInfoProps {
  appearanceTime: number;
  questionId: number;
  skipAfterTime: number;
  skipAble: boolean;
}
export interface ItemContentSendMessageProps {
  name: string;
  url: string;
  type: string;
}
export interface ContentSendMessageProps {
  text: string;
  type?: string;
  files?: ItemContentSendMessageProps[];
  photos?: ItemContentSendMessageProps[];
  event?: {
    actorId: string;
    actor: string;
    action: string;
  };
}
export interface SpellDataProps {
  id?: number;
  language: string;
  format: string;
  title: string;
  question: string;
  answer: string;
}

export interface LoginQuestionProps {
  code: string;
  type: string;
  value?: string | null;
  label?: Array<string> | null;
}

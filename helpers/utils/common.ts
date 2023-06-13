import moment from "moment";

const has = Object.prototype.hasOwnProperty;
export const isEmpty = (prop: any) => {
  return (
    prop === null ||
    prop === undefined ||
    (has.call(prop, "length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
};
export function isEmailValid(email: string) {
  // let re = /^[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\\.]+$/
  let re = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

export function convertMiniSecond(time: number, type: string) {
  const result = moment.utc(time).format(type);
  return result;
}
export const secToHHMMSS = (secs: number) => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor(secs / 60) % 60;
  const seconds = secs % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
};
export const removeDuplicate = (arr: any[], key?: string) => {
  return [...new Map(arr.map((item) => [item[key || "id"], item])).values()];
};

export const addSpellCheck = (answer: string, errors: Array<any>) => {
  let result: Array<any> = [];
  if (!isEmpty(errors)) {
    errors.forEach((el: any, index: number) => {
      if (index === 0) {
        result.push({
          text: answer.substring(0, Number(el?.fromIndex)),
          isCorrect: true,
        });
      } else {
        const prevText = answer.substring(
          Number(errors[index - 1]?.toIndex) + 1,
          Number(el?.fromIndex)
        );
        result.push({ text: prevText, isCorrect: true });
      }
      result.push({
        ...el,
        text: el?.error,
        isCorrect: false,
        color:
          el.type === "grammar"
            ? "#F01843"
            : el.type === "vocabulary" || el.type === "spelling"
            ? "#0CB0F0"
            : "#F09530",
      });
      if (index === errors.length - 1)
        result.push({
          text: answer.substring(Number(el?.toIndex) + 1, answer.length),
          isCorrect: true,
        });
    });
  } else {
    result.push({
      text: answer,
      isCorrect: true,
    });
  }
  return result;
};

export const joinArrayOfString = (
  stringArr: Array<string> = [],
  splitStr: string = ""
) => {
  return stringArr.join(splitStr);
};
export const isScrolledIntoView = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  return elemTop >= 0 && elemBottom <= window.innerHeight;
};
export const isNumber = (str: string) => {
  const numberRegex = /^[0-9]+$/;
  return str.match(numberRegex);
};
export const isMobileTablet = (userAgent: any) => {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i.test(
    userAgent
  );
};
export const replaceAll = (str: any, find: string, replace: string) => {
  if (isEmpty(str)) return str;
  return str.replace(new RegExp(find, "g"), replace);
};

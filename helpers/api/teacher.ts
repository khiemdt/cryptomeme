import queryString from "query-string";
import api from "./api";

export const getMyClass = (param: any, cancelParams?: any) => {
  let optionsApi: any = {
    url: `/clms/v1/teachers/my-lesson?${queryString.stringify({
      size: 500,
      ...param,
    })}`,
    method: "get",
  };
  if (cancelParams) optionsApi = { ...optionsApi, ...cancelParams };
  return api(optionsApi);
};

export const getClassInfo = (data: any) => {
  return api({
    url: `/clms/classes/lessons/get-live-link`,
    method: "post",
    data,
  });
};

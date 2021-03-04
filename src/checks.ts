import {user} from "./user";
export const hasAccess = (inputData: any) => {
  user.forEach((userDbItem) => {
    if (userDbItem.name === inputData.name && userDbItem.pswd === inputData.superpswd) {
      return true;
    }
  });
  return false;
};

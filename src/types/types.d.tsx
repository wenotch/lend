import { Dispatch, SetStateAction } from "react";

export type AuthContextType = {
  //   showLeftDash: Boolean;
  //   setShowLeftDash?:()=>{}
  //   showLeftMenu: Boolean;
  //   setShowLeftMenu: () => {};
  showLeftMenu: Boolean;
  setShowLeftMenu: Dispatch<SetStateAction<boolean>>;
};

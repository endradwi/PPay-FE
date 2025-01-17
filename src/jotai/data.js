import { atomWithStorage } from "jotai/utils";

export const profileAtom = atomWithStorage({
  fullname: "",
  phone: "",
  email: "",
  image: "",
});
export const tokenAtom = atomWithStorage("");

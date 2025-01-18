import { atomWithStorage } from "jotai/utils";

export const profileAtom = atomWithStorage({
  id: 0,
  fullname: "",
  phone: "",
  email: "",
  image: "",
});
export const tokenAtom = atomWithStorage("");

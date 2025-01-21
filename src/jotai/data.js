import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const profileAtom = atomWithStorage({
  id: 0,
  fullname: "",
  phone: "",
  email: "",
  image: "",
});

export const tokenAtom = atomWithStorage("");

export const amountAtom = atom(0);

export const formTopupAtom = atom("");

export const statusAtom = atom(0);

export const incomeAtom = atom(0);

export const expenseAtom = atom(0);

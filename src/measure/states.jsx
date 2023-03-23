import {
  atom
} from 'recoil';

export const myTypeOfBody = atom({
  key: 'myTypeOfBody', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const closedSideBar = atom({
  key: 'closedSideBar', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
import { API } from "../config";

export const getData = () => {
  return fetch(`${API}/mockdata`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};

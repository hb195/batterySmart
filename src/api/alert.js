import { API } from "../config";

export const getAlerts = () => {
  return fetch(`${API}/alert/getAlerts`, {
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

export const createAlert = (values) => {
  return fetch(`${API}/alert/createAlert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};

export const deleteAlert = (_id) => {
  return fetch(`${API}/alert/removeAlert/${_id}`, {
    method: "DELETE",
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

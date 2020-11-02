import axios from "axios";
import { URL } from "../config/constants";
import moment from "moment";

export const getLastWorkingTime = async (time) => {
  const start = moment(time, "HH:mm:ss")
    .subtract(10, "seconds")
    .format("HH:mm:ss");
  const end = moment(time, "HH:mm:ss")
    .add(10, "seconds")
    .format("HH:mm:ss");
  const startDate = `${moment().format("YYYY-MM-DD")} ${start}`;
  const endDate = `${moment().format("YYYY-MM-DD")} ${end}`;
  const workingtimes = await getWorkingtimes(startDate, endDate);
  return workingtimes[0];
};

export const getWorkingtimes = async (start, end) => {
  const response = await axios.get(
    `${URL}/workingtimes/1?start=${start}&end=${end}`
  );

  const workingtimes = response.data.data;

  return workingtimes;
};

export const addWorkingtime = async (start, end) => {
  console.log(start);
  console.log(end);
  const data = JSON.stringify({
    working_time: {
      start,
      end,
    },
  });

  const config = {
    method: "post",
    url: "http://localhost:4000/api/workingtimes/1",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  await axios(config);
};

export const updateWorkingtime = async (start, end, id) => {
  const data = JSON.stringify({
    working_time: {
      start,
      end,
    },
    id,
  });

  const config = {
    method: "post",
    url: "http://localhost:4000/api/workingtimes/1",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  await axios(config);
};

export const deleteWorkingtime = async (id) => {
  const config = {
    method: "delete",
    url: `http://localhost:4000/api/workingtimes/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios(config);
};

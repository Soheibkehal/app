import axios from "axios";
import { URL } from "../config/constants";
import moment from "moment";

export const getClock = async () => {
  const res = await axios.get(`${URL}/clocks/1`);
  const clock = res.data.data;
  return clock;
};

export const postClock = async (bool) => {
  const data = JSON.stringify({
    clock: { status: bool, time: moment().format("HH:mm:ss") },
  });

  const config = {
    method: "post",
    url: `${URL}/clocks/1`,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  await axios(config);
};

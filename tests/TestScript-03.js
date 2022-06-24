/** RampUp and RampDown */

import http from "k6/http";

export let options = {
  stages: [
    /** 5 users for 10s */
    {
      duration: "20s",
      target: 15,
    },
    /** 3 users for 20s */
    {
      duration: "20s",
      target: 20,
    },
  ],
};

export default function () {
  http.get("https://www.google.com");
}

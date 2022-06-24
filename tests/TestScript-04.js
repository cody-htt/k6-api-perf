/** Check/Assert the test result */

import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 10,
  duration: "10s",
};

export default function () {
  //   let response = http.get("https://run.mocky.io/v3/aa519161-a753-44e6-83e7-08bd48a398ac");

  let response = http.get("https://run.mocky.io/v3/63e8c99e-e002-4aa2-abe6-cde0a9e0ac5c");

  console.log(
    `Response body length ${response.body.length} for VU=${__VU} with ITERA=${__ITER}`
  );

  check(response, {
    "Is response status is 200": (res) => res.status === 200,
    "Is response body length is 28 chars": (res) => res.body.length == 28,
  });
}

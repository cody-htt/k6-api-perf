/**
 * Check will not fail the whole test suite
 * hence we will use Rate along with check
 */

import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("Error Rate");

export let options = {
  vus: 10,
  duration: "10s",
  threshholds: {
    errors: ["rate<0.05"],
  },
};

export default function () {
  let response = http.get("https://run.mocky.io/v3/63e8c99e-e002-4aa2-abe6-cde0a9e0ac5c");

  console.log(
    `Response body length ${response.body.length} for VU=${__VU} with ITERA=${__ITER}`
  );

  const checkResponse = check(response, {
    "Is response status is 200": (res) => res.status === 201,
  });

  const checkBody = check(response, {
    "Is response body length is 28 chars": (res) => res.body.length == 28,
  });

  errorRate.add(!checkResponse);
  errorRate.add(!checkBody);
}

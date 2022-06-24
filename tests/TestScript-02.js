// Sample API test script
import http from "k6/http";

/** OPTIONS **/
export let options = {
  vus: 10,
  duration: "10s",
};

//Main Function where user will be spread
export default function () {
  http.get("https://www.google.com");
}

/* Execute the test by the command with 1 user
 * k6 run test/TestScript.js
 */

/* To execute the test by the command with 10 user and duration 10s
 * k6 run --vus 10 --duration 10s test/TestScript.js
 */

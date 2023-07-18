/* Frontend bootcamp code linked here for convenience:
https://codesandbox.io/s/frontend-bootcamp-fyuxuo?file=/src/App.js */

/* Take home project instructions:
https://farisashai.notion.site/ACM-Dev-Frontend-Take-Home-Challenge-1cb58313b63c438e9bf676ffad34c207 */

import "./styles.css";
import PastEvents from "./PastEvents";

const API_BASE_URL = "https://api.acmucsd.com/api/v2";

export default function App() {
  return (
    <div className="App">
      <h1>ACM UCSD Past Events</h1>
      <PastEvents />
    </div>
  );
}

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// 1. 將url儲存firestore。接下來就可以針對產品(或其他)的照片進行新增、刪除、修改

// 2. 在你們的專案裡，如何使用照片?

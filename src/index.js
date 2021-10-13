import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import App from "./App";
import Main from "./ui/Main";
import ProductList from "./product/ProductList";
import EmployeeList from "./employee/EmployeeList";
import CustomerList from "./customer/CustomerList";
import ForgetPassword from "./account/ForgetPassword";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#7e57c2"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#ffb300"
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#ffcc00"
    },
    text: {
      primary: "rgba(0, 0, 0,0.87)",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.38)"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product" component={ProductList} />
          <Route exact path="/employee" component={EmployeeList} />
          <Route exact path="/customer" component={CustomerList} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
        </Switch>
      </Router>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);

// 1. 想想看，你們的系統要如何處理登入、登出? OK

// 2. 如果一開始一定要登入，那要怎麼修改你們的程式? OK

// 3. 如何處理登出? OK

// 4. 如何處理自動登入?  還在想??

// 5. 如何處理忘記密碼? OK

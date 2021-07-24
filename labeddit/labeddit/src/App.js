import React from "react"
import Router from "./routes/router"
import theme from "./constants/theme"
import { ThemeProvider } from '@material-ui/core/styles'


const  App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router />
    </ ThemeProvider>
  );
}

export default App;

import "./styles/globals.css";
import "./styles/fonts.css";
import Menu from "./components/Menu";
import Grid from "./components/default/grid";
import Row from "./components/default/row";
import Container from "./components/default/container";
import Column from "./components/default/column";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { ThemeProvider } from "./components/Theme/theme-provider";
import Sidebar from "./components/Menu/sidebar";
import ContentArea from "./components/ContentArea/contentarea";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Container className="h-[100dvh]">
        <Grid className="grid-rows-[54px_1fr]">
          <Menu />
          <Grid className="grid-cols-[250px_1fr]">
            <Sidebar className=""></Sidebar>
            <ContentArea className="">
              <RouterProvider router={router} />
            </ContentArea>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

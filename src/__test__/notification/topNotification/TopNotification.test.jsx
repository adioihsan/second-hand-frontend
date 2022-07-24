import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNotification from "../../../components/notification/topNotification/TopNotification";
import { Provider as ReduxProvider } from "react-redux";
import ReduxStore from "../../../services/ReduxStore";

test("test topNotification", () => {
  render(
    <ReduxProvider store={ReduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopNotification />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
});

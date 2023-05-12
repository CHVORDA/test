import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders home page by default", () => {
  const { getByText } = render(<App />);
  const homeButton = getByText("Home");
  expect(homeButton).toBeInTheDocument();
});

test("changes page on button click", () => {
  const { getByText } = render(<App />);
  const galleryButton = getByText("Gallery");
  fireEvent.click(galleryButton);
  const galleryPage = getByText("This is the Gallery page");
  expect(galleryPage).toBeInTheDocument();
});

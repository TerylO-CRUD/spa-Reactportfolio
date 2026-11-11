import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("adds a new project when form is submitted", async () => 
{
  render(<App />);

  await userEvent.type(screen.getByLabelText(/title/i), "Poster Series");
  await userEvent.type(screen.getByLabelText(/description/i), "Gallery prints.");
  await userEvent.click(screen.getByRole("button", { name: /add/i }));

  expect(screen.getByText("Poster Series")).toBeInTheDocument();
});

test("search shows only matching projects", async () => {
  render(<App />);

  await userEvent.type(screen.getByPlaceholderText(/search projects/i), "portfolio");

  expect(screen.getByText("Portfolio Site")).toBeInTheDocument();
  expect(screen.queryByText("Mobile Banking UI")).not.toBeInTheDocument();
});
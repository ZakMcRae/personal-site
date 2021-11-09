import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../content/theme";
import Landing from "./Landing";

const MockLanding = () => {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
};

describe("Test of Landing Section", () => {
  test("Name is shown on page", async () => {
    render(<MockLanding />);
    const name = screen.getByText("Zak McRae");
    expect(name).toBeInTheDocument();
  });

  test("Title is shown on page", async () => {
    render(<MockLanding />);
    const jobTitle = screen.getByText("Web Developer");
    expect(jobTitle).toBeInTheDocument();
  });
});

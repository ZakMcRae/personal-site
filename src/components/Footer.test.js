import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../content/theme";
import Footer from "./Footer";

const MockFooter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );
};

describe("Tests of Footer Section", () => {
  test("All links shown", () => {
    render(<MockFooter />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);
  });
});

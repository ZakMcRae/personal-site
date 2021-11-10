import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../content/theme";
import Timeline from "./Timeline";

const MockTimeline = () => {
  return (
    <ThemeProvider theme={theme}>
      <Timeline />
    </ThemeProvider>
  );
};

describe("Tests of Timeline Section", () => {
  test("Main heading is shown", () => {
    render(<MockTimeline />);
    const heading = screen.getByRole("heading", {
      name: "My Timeline",
    });
    expect(heading).toBeInTheDocument();
  });

  test("Sub heading is shown", () => {
    render(<MockTimeline />);
    const heading = screen.getByRole("heading", {
      name: /Here is a rough/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("All headings shown", () => {
    render(<MockTimeline />);
    const headings = screen.getAllByRole("heading");
    // 1 main + 1 sub + 11 x 1 per card = 13 total
    expect(headings.length).toBe(13);
  });

  test("All links shown", () => {
    render(<MockTimeline />);
    const headings = screen.getAllByRole("link");
    // 11 x 1 per card = 11 total
    expect(headings.length).toBe(11);
  });

  test("All paragraphs shown", () => {
    render(<MockTimeline />);
    const paragraphs = screen.getAllByRole("link");
    // 11 x 1 per card = 11 total
    expect(paragraphs.length).toBe(11);
  });
});

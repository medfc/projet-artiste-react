import { render, screen } from "@testing-library/react";
import ScrollingText from "../components/ScrollingText";
import '@testing-library/jest-dom';
import { describe, test, expect } from "vitest";
import { SCROLLING_BANNER_TEXT } from "../constants/texts";



describe("ScrollingText", () => {
  test("affiche le texte fourni en prop", () => {
  render(<ScrollingText />);
  const element = screen.getByText(SCROLLING_BANNER_TEXT);
  expect(element).toBeInTheDocument();
  });
});

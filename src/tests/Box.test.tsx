import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Box, BoxProps } from "../components/layout/Box";

describe("Box Component", () => {
  it("renders its children", () => {
    render(<Box><p>Hello, world!</p></Box>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  it("always has the base 'box' class for flex styling", () => {
    const { container } = render(<Box>Content</Box>);
    const div = container.firstChild as HTMLElement;
    // The base 'box' class should be present.
    expect(div.className).toContain("box");
  });

  describe("Flex direction", () => {
    it("applies row styling when the row prop is true", () => {
      const { container } = render(<Box row>Row Content</Box>);
      const div = container.firstChild as HTMLElement;
      // When row is true, it should have the 'box--row' class.
      expect(div.className).toContain("box--row");
      // And it should not have the column class.
      expect(div.className).not.toContain("box--column");
    });

    it("applies column styling when the row prop is false or not provided", () => {
      const { container } = render(<Box>Column Content</Box>);
      const div = container.firstChild as HTMLElement;
      // The default should be column layout.
      expect(div.className).toContain("box--column");
      expect(div.className).not.toContain("box--row");
    });
  });

  describe("Centered content", () => {
    it("applies centered styling when the centered prop is true", () => {
      const { container } = render(<Box centered>Centered Content</Box>);
      const div = container.firstChild as HTMLElement;
      expect(div.className).toContain("box--centered");
    });

    it("does not apply centered styling when the centered prop is false", () => {
      const { container } = render(<Box>Not Centered</Box>);
      const div = container.firstChild as HTMLElement;
      expect(div.className).not.toContain("box--centered");
    });
  });

  describe("Interactivity and style overrides", () => {
    it("calls the onClick handler when clicked", () => {
      const handleClick = jest.fn();
      const { container } = render(<Box onClick={handleClick}>Clickable</Box>);
      const div = container.firstChild as HTMLElement;
      fireEvent.click(div);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies inline style overrides", () => {
      const customStyle: React.CSSProperties = { backgroundColor: "red", padding: "10px" };
      const { container } = render(<Box style={customStyle}>Styled Box</Box>);
      const div = container.firstChild as HTMLElement;
      // Verify that the inline styles are applied.
      expect(div.style.backgroundColor).toBe("red");
      expect(div.style.padding).toBe("10px");
    });
  });

  describe("Prop forwarding", () => {
    it("forwards additional props to the container div", () => {
      const dataTestId = "my-box";
      const { container } = render(<Box data-testid={dataTestId}>Test Box</Box>);
      const div = container.firstChild as HTMLElement;
      expect(div.getAttribute("data-testid")).toBe(dataTestId);
    });
  });
});

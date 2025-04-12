import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom";

test("Should load contactus component", () => {
    render(<ContactUs/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

it("Should load 2 input boxes", () => {
    render(<ContactUs/>);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3);
});
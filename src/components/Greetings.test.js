import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

describe("Greetings Tests", () => {
  // all unit tests will be taken into account
  test("renders welcome to homepage as text", () => {
    // Arrange
    render(<Greetings />);
    //   Act
    // Not here..

    // Assert
    const homepagewelcomeElement = screen.getByText("Welcome to homepage");
    expect(homepagewelcomeElement).toBeInTheDocument();
  });

  test("renders 'Here is the React App' as text if button was not clicked", () => {
    // Arrange
    render(<Greetings />);

    //   Act
    // Not here..

    // Assert
    const homeReactAppText = screen.getByText("Here is the React App");
    expect(homeReactAppText).toBeInTheDocument();
  });

  test("renders 'text changed' as text if button was clicked", () => {
    // Arrange
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const homeReactAppChangedText = screen.getByText("Text Changed");
    expect(homeReactAppChangedText).toBeInTheDocument();
  });

  test("does not render 'Here is the React App' as text if button was clicked", () => {
    // Arrange
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const output = screen.queryByText("Here is the React App");
    expect(output).toBeNull();
  });
});

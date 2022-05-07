import { render, screen } from "../../tests";
import { CustomButton } from ".";

const setup = () => {
  render(<CustomButton text="test" clickHandler={() => {}} />, {});
  const component = screen.queryByTestId("CustomButton");
  return { component };
};

describe("<CustomButton />", () => {
  it("Should Render CustomButton Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

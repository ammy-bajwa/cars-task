import { render, screen } from "../../tests";
import { CarDetails } from ".";

const setup = () => {
  render(<CarDetails />, {});
  const component = screen.queryByTestId("CarDetails");
  return { component };
};

describe("<CarDetails />", () => {
  it("Should Render CarDetails Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

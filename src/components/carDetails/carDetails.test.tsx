import { render, screen } from "../../tests";
import { CarDetails } from ".";

const setup = () => {
  render(<CarDetails />, {});
  const component = screen.queryByTestId("CarDetails");
  const component2 = screen.queryByTestId("CarDetailsInfoSection");
  const component3 = screen.queryByTestId("CarFavSection");
  return { component, component2, component3 };
};

describe("<CarDetails />", () => {
  it("Should Render CarDetails Component", () => {
    const { component, component2, component3 } = setup();
    expect(component).toBeInTheDocument();
    expect(component2).toBeInTheDocument();
    expect(component3).toBeInTheDocument();
  });
});

import { render, screen } from "../../tests";
import { CarList } from ".";

const setup = () => {
  render(<CarList />, {});
  const component = screen.queryByTestId("CarList");
  return { component };
};

describe("<CarList />", () => {
  it("Should Render CarList Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

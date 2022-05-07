import { render, screen } from "../../tests";
import { Filters } from ".";

const setup = () => {
  render(<Filters />, {});
  const component = screen.queryByTestId("Filters");
  return { component };
};

describe("<Filters />", () => {
  it("Should Render Filters Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

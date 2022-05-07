import { render, screen } from "../../tests";
import { Home } from ".";

const setup = () => {
  render(<Home />, {});
  const component = screen.queryByTestId("Home");
  return { component };
};

describe("<Home />", () => {
  it("Should Render Home Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

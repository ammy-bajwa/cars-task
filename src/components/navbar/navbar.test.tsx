import { render, screen } from "../../tests";
import { Navbar } from ".";

const setup = () => {
  render(<Navbar />, {});
  const component = screen.queryByTestId("Navbar");
  return { component };
};

describe("<Navbar />", () => {
  it("Should Render Navbar Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

import { render, screen } from "../../tests";
import { NavItem } from ".";

const setup = () => {
  render(<NavItem text="test" link="test" />, {});
  const component = screen.queryByTestId("NavItem");
  return { component };
};

describe("<NavItem />", () => {
  it("Should Render NavItem Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

import { render, screen } from "../../tests";
import { Details } from ".";

const setup = () => {
  render(<Details />, {});
  const component = screen.queryByTestId("Details");
  return { component };
};

describe("<Details />", () => {
  it("Should Render Details Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

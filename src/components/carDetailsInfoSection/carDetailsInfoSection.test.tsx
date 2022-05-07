import { render, screen } from "../../tests";
import { CarDetailsInfoSection } from ".";

const setup = () => {
  render(<CarDetailsInfoSection />, {});
  const component = screen.queryByTestId("CarDetailsInfoSection");
  return { component };
};

describe("<CarDetailsInfoSection />", () => {
  it("Should Render CarDetailsInfoSection Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

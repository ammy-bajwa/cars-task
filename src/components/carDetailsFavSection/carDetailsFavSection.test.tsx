import { render, screen } from "../../tests";
import { CarDetailsFavSection } from ".";

const setup = () => {
  render(<CarDetailsFavSection />, {});
  const component = screen.queryByTestId("CarFavSection");
  return { component };
};

describe("<CarDetailsFavSection />", () => {
  it("Should Render CarDetailsFavSection Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});

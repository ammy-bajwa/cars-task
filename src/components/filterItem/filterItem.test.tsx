import { render, screen } from "../../tests";
import { FilterItem } from ".";

const setup = () => {
  render(
    <FilterItem options={["a"]} title="test" onChangeHandler={() => {}} />,
    {}
  );
  const component = screen.queryByTestId("FilterItem");
  return { component };
};

describe("<FilterItem />", () => {
  it("Should Render FilterItem Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("test");
  });
});

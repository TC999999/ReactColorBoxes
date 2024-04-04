import { render } from "@testing-library/react";
import Box from "./Box.jsx";

it("renders without crashing", function () {
  render(<Box />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

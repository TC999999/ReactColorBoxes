import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList.jsx";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("makes a box when the form is submitted", function () {
  const { queryByText, getByLabelText, container } = render(<BoxList />);
  const colorInput = getByLabelText("Color");
  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");

  const btn = queryByText("Make a Box!");

  expect(
    container.querySelector('div[class="box-div"]')
  ).not.toBeInTheDocument();
  expect(container.querySelector('div[class="box"]')).not.toBeInTheDocument();

  fireEvent.change(colorInput, { target: { value: "purple" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.submit(btn);

  expect(container.querySelector('div[class="box-div"]')).toBeInTheDocument();
  const box = container.querySelector('div[class="box"]');
  expect(box).toBeInTheDocument();
  expect(box.style["background-color"]).toBe("purple");
  expect(box.style["height"]).toBe("100px");
  expect(box.style["width"]).toBe("100px");
});

it("deletes a box when the 'X' button is clicked", function () {
  const { queryByText, getByLabelText, container } = render(<BoxList />);
  const colorInput = getByLabelText("Color");
  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");
  const btn = queryByText("Make a Box!");
  fireEvent.change(colorInput, { target: { value: "purple" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.submit(btn);
  expect(container.querySelector('div[class="box"]')).toBeInTheDocument();

  const delBtn = queryByText("X");
  fireEvent.click(delBtn);
  expect(container.querySelector('div[class="box"]')).not.toBeInTheDocument();
});

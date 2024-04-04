import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm.jsx";
import { vi } from "vitest";

it("renders without crashing", function () {
  render(<NewBoxForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("should be empty at the start", function () {
  const { getByLabelText } = render(<NewBoxForm />);
  const colorInput = getByLabelText("Color");
  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");

  expect(colorInput).toBeEmptyDOMElement();
  expect(heightInput).toBeEmptyDOMElement();
  expect(widthInput).toBeEmptyDOMElement();
});

it("should have value when filled in", function () {
  const { getByLabelText } = render(<NewBoxForm />);
  const colorInput = getByLabelText("Color");
  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");

  fireEvent.change(colorInput, { target: { value: "purple" } });
  expect(colorInput).toHaveValue("purple");
  fireEvent.change(heightInput, { target: { value: "100" } });
  expect(heightInput).toHaveValue("100");
  fireEvent.change(widthInput, { target: { value: "100" } });
  expect(widthInput).toHaveValue("100");
});

it("should empty itself when submitted", function () {
  const addBoxMock = vi.fn();
  expect(addBoxMock).not.toHaveBeenCalled();

  const { getByLabelText, queryByText } = render(
    <NewBoxForm addBox={addBoxMock} />
  );
  expect(addBoxMock).not.toHaveBeenCalled();
  const colorInput = getByLabelText("Color");
  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");

  const btn = queryByText("Make a Box!");
  fireEvent.change(colorInput, { target: { value: "purple" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.submit(btn);

  expect(addBoxMock).toHaveBeenCalled();
  expect(colorInput).toBeEmptyDOMElement();
  expect(heightInput).toBeEmptyDOMElement();
  expect(widthInput).toBeEmptyDOMElement();
});

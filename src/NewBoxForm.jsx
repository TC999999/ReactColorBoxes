import { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    color: "",
    height: "",
    width: "",
  };

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color of box"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="height of box in px"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="width of box in px"
        value={formData.width}
        onChange={handleChange}
      />
      <button>Make a Box!</button>
    </form>
  );
};

export default NewBoxForm;

import "./Box.css";

const Box = ({ id, color, height, width, delBox }) => {
  const style = {
    backgroundColor: `${color}`,
    height: `${height}px`,
    width: `${width}px`,
  };
  return (
    <div className="box-div" id={id}>
      <div className="box" style={style}></div>
      <button className="remove-btn" onClick={delBox}>
        X
      </button>
    </div>
  );
};

export default Box;

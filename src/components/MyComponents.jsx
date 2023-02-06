const ButtonComponent = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        color: "white",
        fontSize: props.size / 1.5 + "em",
        fontFamily: props.family,
        fontWeight: props.weight,
        borderRadius: props.size / 3 + "em",
        padding: props.size / 4 + "em",
        margin: props.size / 5 + "em",
      }}
    >
      {props.title}
    </button>
  );
};
export default ButtonComponent;

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 22,
    width: "90%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    // margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    transition: "width 1s ease-in-out",
    backgroundColor: "rgb(59, 130, 246)",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="flex my-8 w-full justify-center overflow-hidden">
      <div style={containerStyles} className="overflow-hidden">
        <div style={fillerStyles} className="overflow-hidden">
          <span className="text-sm" style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

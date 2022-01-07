export const customStyle = {
  dropdownIndicator: (styles) => ({ ...styles, color: "#1EB7F3" }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  placeholder: (styles) => ({
    ...styles,
    color: "#103D56",
    // borderLeft: "0.1rem solid #1EB7F3",
    left: "0%",
    lineHeight: "1.3rem",
    paddingLeft: "0.5rem",
    marginLeft: "0rem"
  }),
  control: () => ({
    // ...styles,
    fontSize: "0.75rem",
    marginLeft: "1rem",
    display: "flex",
    border: "none",
    height: "25px",
    width: "300px",
    border: "0.1rem solid black",
    borderRadius: "0px",
    fontWeight: "bold"
  }),
  option: (styles) => ({
    ...styles,
    padding: "5px",
    fontSize: "0.75rem",
    textAlign: "left",
    color: "#103D56"
  }),
  menu: (styles) => ({
    ...styles,
    marginLeft: "1rem",
    borderRadius: 0,
    // border: "0.1rem solid #103D56",
    width: "300px"
    // border: "none"
  })
  // multiValue: styles => ({ ...styles, background: "orange" }),
  // multiValueRemove: styles => ({ ...styles, color: "green" }),
  // clearIndicator: styles => ({ ...styles, color: "pink" }),
  // multiValueLabel: styles => ({
  //   ...styles,
  //   border: "1px solid red"
  // })
};

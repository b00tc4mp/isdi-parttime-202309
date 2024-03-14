function Button(props) {
  return (
    <button
      onMouseEnter={props.handleOnMouseEnter}
      onMouseLeave={props.handleOnMouseLeave}
      onClick={props.handleOnClick}
    >
      {props.children}
    </button>
  )
}

export default Button

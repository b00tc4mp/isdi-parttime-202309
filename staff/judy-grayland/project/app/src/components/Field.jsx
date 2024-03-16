function Field(props) {
  return (
    <>
      <label htmlFor={props.inputId}>{props.children}</label>
      <input name={props.name} id={props.inputId} />
    </>
  )
}

export default Field

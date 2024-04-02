function Field(props) {
  if (props.type === 'radio') {
    return (
      <>
        <input
          name={props.name}
          type="radio"
          id={props.inputId}
          checked={props.checked}
          onChange={props.onChange}
        ></input>
        <label htmlFor={props.inputId}>{props.children}</label>
      </>
    )
  }
  return (
    <>
      <label htmlFor={props.inputId}>{props.children}</label>
      <input name={props.name} type={props.type ?? 'text'} id={props.inputId} />
    </>
  )
}

export default Field

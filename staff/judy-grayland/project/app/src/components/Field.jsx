function Field(props) {
  if (props.type === 'radio') {
    return (
      <>
        <input
          name={props.name}
          type="radio"
          id={props.inputId}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        ></input>
        <label htmlFor={props.inputId}>{props.children}</label>
      </>
    )
  }
  if (props.type === 'checkbox') {
    return (
      <>
        <input
          name={props.name}
          type="checkbox"
          id={props.inputId}
          value={props.value}
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

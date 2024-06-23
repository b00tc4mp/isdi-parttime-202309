import { useState } from 'react'

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
          readOnly={props.readOnly}
        ></input>
        <label htmlFor={props.inputId}>{props.children}</label>
      </>
    )
  }
  if (props.type === 'checkbox') {
    const [isChecked, setChecked] = useState(
      props.checked ? props.checked : false
    )
    // we use this to control if it's checked or not from the start. It then checks or unchecks itself when we click on it. The ternary is needed to avoid triggering a warning when you create new resources.

    function updateList() {
      const { value, valuesList, valuesListSetter } = props.updateListReq // we pass the topic, resourceTopic and the setResourceTopic as props

      let updatedList = valuesList
      if (valuesList.includes(value)) {
        updatedList = valuesList.filter((_value) => _value !== value)
      } else {
        updatedList.push(value)
      }
      valuesListSetter(updatedList)
    }

    return (
      <>
        <input
          name={props.name}
          type="checkbox"
          id={props.inputId}
          value={props.value}
          checked={isChecked} // instead of props.checked we use the useState hook
          onChange={
            props.onChange ? props.onChange : () => setChecked(!isChecked)
          } // if we don't pass an onChange then we set the checked to the opposite of what we had
          onClick={props.updateListReq ? () => updateList() : null} // if we do pass it an updatedListReq object (which contains all the info we need to update the resourceTopic array) we tell it to call the function when we click on the checkbox
        ></input>
        <label htmlFor={props.inputId}>{props.children}</label>
      </>
    )
  }
  return (
    <>
      <label htmlFor={props.inputId}>{props.children}</label>

      <input
        name={props.name}
        type={props.type ?? 'text'}
        id={props.inputId}
        defaultValue={props.value}
      ></input>
      {/* <label htmlFor={props.inputId}>{props.children}</label>
      {props.defaultValue ? (
        <input
          name={props.name}
          type={props.type ?? 'text'}
          id={props.inputId}
          defaultValue={props.defaultValue}
        />
      ) : (
        <input
          name={props.name}
          type={props.type ?? 'text'}
          id={props.inputId}
          value={props.value}
        />
      )} */}
    </>
  )
}

export default Field

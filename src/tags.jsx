import { whitelistProps } from "./utils"
import React from 'react'
import { TextField, Button } from 'react-md';

export const CheckBoxTag = ({
  checkedValue = 1,
  uncheckedValue = 0,
  ...props
}) => {
  return (
    <span>
      <HiddenFieldTag name={props.name} value={uncheckedValue} />
      <input type="checkbox" value={checkedValue} {...props} />
    </span>
  )
}

export const ColorFieldTag = props => <TextField type="color" {...props} />

export const DateFieldTag = props => <input type="date" {...props} />

export const DatetimeFieldTag = props => <input type="datetime" {...props} />

export const DatetimeLocalFieldTag = props => (
  <input type="datetime-local" {...props} />
)

export const EmailFieldTag = props => <TextField type="email" {...props} />

export const HiddenFieldTag = props => (
  <input type="hidden" readOnly {...props} />
)

export const LabelTag = props => <label {...whitelistProps(props)} />

export const MonthFieldTag = props => <input type="month" {...props} />

export const NumberFieldTag = props => <TextField type="number" {...props} />

export const PasswordFieldTag = props => <TextField type="password" {...props} />

export const RadioTag = props => <input type="radio" {...props} />

export const RangeFieldTag = props => <input type="range" {...props} />

export const SearchFieldTag = props => <input type="search" {...props} />

export const SelectTag = props => <select {...whitelistProps(props)} />

export const SubmitTag = props => <Button raised primary type="submit" {...props} />

export const TelephoneFieldTag = props => <TextField type="tel" {...props} />

export const TextAreaTag = props => <textarea {...whitelistProps(props)} />

export const TextFieldTag = props => <TextField type="text" {...props} />

export const TimeFieldTag = props => <input type="time" {...props} />

export const UrlFieldTag = props => <TextField type="url" {...props} />

export const WeekFieldTag = props => <input type="week" {...props} />

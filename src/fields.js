import * as Tags from "./tags"
import React from 'react'
import { nameWithContext } from "./utils"

export const CheckBox = nameWithContext(Tags.CheckBoxTag)
export const ColorField = nameWithContext(Tags.ColorFieldTag)
export const DateField = nameWithContext(Tags.DateFieldTag)
export const DatetimeField = nameWithContext(Tags.DatetimeFieldTag)
export const DatetimeLocalField = nameWithContext(Tags.DatetimeLocalFieldTag)
export const EmailField = nameWithContext(Tags.EmailFieldTag)
export const HiddenField = nameWithContext(Tags.HiddenFieldTag)
export const Label = nameWithContext(Tags.LabelTag, "htmlFor")
export const MonthField = nameWithContext(Tags.MonthFieldTag)
export const NumberField = nameWithContext(Tags.NumberFieldTag)
export const PasswordField = nameWithContext(Tags.PasswordFieldTag)
export const Radio = nameWithContext(Tags.RadioTag)
export const RangeField = nameWithContext(Tags.RangeFieldTag)
export const SearchField = nameWithContext(Tags.SearchFieldTag)
export const Select = nameWithContext(Tags.SelectTag)
export const Submit = nameWithContext(Tags.SubmitTag)
export const TelephoneField = nameWithContext(Tags.TelephoneFieldTag)
export const TextArea = nameWithContext(Tags.TextAreaTag)
export const TextField = nameWithContext(Tags.TextFieldTag)
export const TimeField = nameWithContext(Tags.TimeFieldTag)
export const UrlField = nameWithContext(Tags.UrlFieldTag)
export const WeekField = nameWithContext(Tags.WeekFieldTag)
export const DestroyField = () => <HiddenField name="_destroy" value="1" />

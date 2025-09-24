export enum StatusType {
  Normal = 'normal',
  Warn = 'warn',
  Error = 'error',
  Success = 'success',
}

export type TableStatusType =
  | 'normal'
  | 'success'
  | 'progress'
  | 'warning'
  | 'danger'

export type InputType =
  | 'number'
  | 'text'
  | 'colorPicker'
  | 'select'
  | 'datepicker'
  | 'dateTimePicker'
  | 'colorSelector'
  | 'textarea'
  | 'checkbox'
  | 'multipleSelect'
  | 'password'
  | 'email'
  | 'switch'

export type StepRound = {
  name: string
  type: StatusType
}

export type TableListDataType<T> = {
  key: React.Key
  data: T
}

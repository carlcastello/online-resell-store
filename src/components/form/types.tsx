export interface IField {
  id: string,
  label: string,
  type: string,
  helperText?: string,
  required?: boolean,
  validator?: (value: string | number) => string
}

interface IFieldValidation {
  value?: string,
  validationMessage?: string,
}

interface IFieldsValidation {
  id: string,
  field: IFieldValidation
}

export interface IOwnState {
  fields: IFieldsValidation | object
}

export interface IOwnProps {
  fields: IField[],
  classes: {
    formControl: string,
    formLabel: string,
    formInput: string,
    formHelperText: string
  }
}
import React, { Component, ReactNode } from 'react';
import {
  withStyles,
  FormControl,
  Input,
  InputLabel,
  FormHelperText
} from '@material-ui/core';

import styles from './styles';
import { IOwnProps, IField, IOwnState } from './types';

class Form extends Component<IOwnProps, IOwnState> {

  state = {
    fields: {}
  }

  onInputChange = (id: string, validator?: (value: string | number) => string) => (event: any) => {
    const value = event.target.value;
    const error = validator ? validator(value) : false;
    this.setState((state) => ({
      fields: {...state.fields, [id]: {value, error}}
    }));
  }

  render(): ReactNode {
    const {
      fields,
      classes: {
        formControl,
        formLabel,
        formInput,
        formHelperText
      }
    } = this.props;
    return (
      <form>
        {fields.map((field: IField) => 
          <FormControl className={formControl} required={field.required}>
            <InputLabel className={formLabel} htmlFor={field.id}>{field.label}</InputLabel>
            <Input className={formInput} id={field.id} onChange={
              this.onInputChange(field.id, field.validator)
            }/>
            {field.helperText ? 
              <FormHelperText className={formHelperText}>{field.helperText}</FormHelperText> :
               null
            }
          </FormControl>
        )}
      </form> 
    );
  } 
}

export default withStyles(styles)(Form);
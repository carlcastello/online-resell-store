import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  container: {
    padding: `0 ${theme.spacing(3)}px ${theme.spacing(2)}px `,
    paddingTop: 0,
  },
  contentContainer: {
    
  },
  formControl: {
    width: '100%',
    marginBottom: `${theme.spacing(1.5)}px`
  },
  formInput: {
    fontSize: `${theme.spacing(1.5)}px`
  },
  formLabel: {
    fontSize: `${theme.spacing(1.5)}px`,
    '&.MuiInputLabel-shrink': {
      fontSize: `${theme.spacing(1)}px`
    }
  }
});
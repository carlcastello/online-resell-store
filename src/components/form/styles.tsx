import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  formControl: {
    width: '100%',
    paddingBottom: `${theme.spacing(.75)}px`,
    marginBottom: `${theme.spacing(.75)}px`
  },
  formInput: {
    fontSize: `${theme.spacing(1)}px`
  },
  formLabel: {
    fontSize: `${theme.spacing(1)}px`,
    '&.MuiInputLabel-shrink': {
      fontSize: `${theme.spacing(1)}px`
    }
  },
  formHelperText: {
    position: 'absolute' as 'absolute',
    bottom: 0,
  }
});
import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  container: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`
  },
  underline: {
    width: `${theme.spacing(3)}px`,
    borderBottom: 'none',
    borderTop:  `3px solid ${theme.palette.primary.main}`,
    margin: 0,
  }
});
import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  footerContainer: {
    marginTop: `${theme.spacing(2)}px`,
  },
  mainFooter: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`
  },
  postFooter: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`
  }
});
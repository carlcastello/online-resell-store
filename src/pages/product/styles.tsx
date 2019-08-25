import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  container: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`
  },
  paragraph: {
    marginBottom: theme.spacing(1)
  },
  descriptionFooter: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row ' as 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1)
  }
});
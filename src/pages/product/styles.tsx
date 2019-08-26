import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  container: {
    padding: `0 ${theme.spacing(3)}px ${theme.spacing(2)}px `,
    paddingTop: 0,
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
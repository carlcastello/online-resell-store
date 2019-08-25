import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  listContainer: {
    color: '#000',
    backgroundColor: theme.palette.secondary.dark,
  },
  listItem: {
    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
    },
  }
});
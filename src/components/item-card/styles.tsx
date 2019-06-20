import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  cardMedia: {
    height: 0,
    paddingTop: '100%',
  },
  cardContent: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
  sellerNameContent: {
    fontSize: theme.typography.fontSize / 1.2
  },
  cardAction: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    display: 'flex'
  },
  priceContent: {
    flex: 1,
  },
  addToCartButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    }
  }
})
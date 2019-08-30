import { Theme } from "@material-ui/core";

import { IStyleProps, IPadding } from './types';

export default (theme: Theme) => ({
  iconStyle: {
    marginLeft: theme.spacing(.5)
  },
  primaryContainer: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    padding:  (({ padding }: IStyleProps) => {
      switch(padding) {
        case IPadding.LARGE:
        case IPadding.MEDIUM:
          return `${theme.spacing(.5)}px ${theme.spacing(1)}px`;
        case IPadding.SMALL:
        default:
          return null;
      }
    }) as unknown as string, 
  },
  secondaryContainer: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    }
  },
  defaultContainer: {
    
  }
});
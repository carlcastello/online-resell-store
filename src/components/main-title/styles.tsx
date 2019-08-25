import { Theme } from "@material-ui/core";

import { IStyleProps } from './types';

export default (theme: Theme) => ({
  container: {
    padding: ((props: IStyleProps) => {
      var horizontalPadding = props.horizontalPadding !== undefined ? props.horizontalPadding : 3;
      return `${theme.spacing(2)}px ${theme.spacing(horizontalPadding)}px`;
    }) as unknown as string,
  },
  underline: {
    width: `${theme.spacing(3)}px`,
    borderBottom: 'none',
    borderTop:  `3px solid ${theme.palette.primary.main}`,
    margin: 0,
  }
});
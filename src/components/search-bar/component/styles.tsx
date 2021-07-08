import { Theme } from '@material-ui/core/styles';

import { IStyleProps } from './types';

export default (theme: Theme) => ({
  searchBarContainer: {
    display: 'flex',
    width: ((props: IStyleProps) => props.fullwidth? '100%': '400px') as unknown as string,
    border: `1px solid ${theme.palette.primary.main}`,
    margin: `${theme.spacing(.5)}px 0`
  },
  searchBar: {
    flex: '1 100%',
    '& .select__control': {
      border: 'none !important',
      boxShadow: 'none !important'
    },
    '& .select__menu': {
      zIndex: 999
    }
  },
  searchBarInput: {
    height: '100%',
  },
  searchIcon: {
    background: theme.palette.primary.main,
    fill: '#ffffff',
    fontSize: theme.spacing(1.5),
    padding: theme.spacing(.2),
  },
  searchIconContainer: {
    height: 'inherit',
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
  },
});
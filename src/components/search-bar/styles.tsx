import { Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default (theme: Theme) => ({
  searchBarContainer: {
    display: 'flex',
    width: '400px',
    border: `1px solid ${theme.palette.primary.main}`,
    margin: `${theme.spacing(.5)}px 0`
  },
  searchBar: {
    flex: '1 100%',
    '& .css-yk16xz-control': {
      border: 'none',
      boxShadow: 'none'
    },
    '& .css-1pahdxg-control:hover': {
      border: 'none',
      boxShadow: 'none'
    },
    '& .css-1pahdxg-control': {
      border: 'none',
      boxShadow: 'none'
    },
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
  }
});
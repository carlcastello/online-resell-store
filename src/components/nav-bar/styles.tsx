import { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  transparentAppBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: 'background-color 200ms linear'
  },
  solidAppBar: {
    backgroundColor: theme.palette.primary.main,
    transition: 'background-color 200ms linear'
  },
  transparentLogo: {
    flex: 1,
    color: theme.palette.primary.main,
    transition: 'color 200ms linear'
  }, 
  solidLogo: {
    flex: 1,
    color: theme.palette.primary.contrastText,
    transition: 'color 200ms linear'
  }
})
export default styles;

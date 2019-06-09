import { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  logo: {
    flex: 1,
    color: theme.palette.primary.main
  } 
})
export default styles;

import { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  container: {
    display: 'flex' as 'flex'
  },
  price: {
    display: 'flex' as 'flex',
    width: '50px',
    '& > *': {
      textAlign: 'center' as 'center',
      alignSelf: 'center' as 'center',
      width: '100%'
    } 
  },
  detail: {
    flexGrow: 2
  },
  image: {
    width: 100,
    flexShrink: 0
  },
  cardContent: {
    display: 'flex' as 'flex',
    flexDirection: 'row' as 'row',
    width: '100%'
  }
});

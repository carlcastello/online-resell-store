import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  container: {
    position: 'relative' as 'relative'
  },
  menu: {
    '& .MuiMenu-paper': {
      width: '400px',
      boxShadow: '2px 2px 4px #dbdbdb', 
      border: '.5px solid #cccccc',
      maxHeight: 250,
    },
    '& .MuiMenu-list': {
      padding: 0,
    }
  },
  menuListContainer: {
    maxHeight: 181,
    overflow: 'auto' as 'auto',
    marginBottom: 50 + theme.spacing(.5),
    paddingTop: theme.spacing(.5),
  },
  menuBottomBar: {
    borderTop: '1px solid #cccccc',
    position: 'fixed' as 'fixed',
    bottom: 0,    
    width: '100%',
    background: '#ffffff',
    zIndex: 2,
    padding: `${theme.spacing(.5)}px 0px `,
  },
  buttonContainer: {
    textAlign: 'right' as 'right',
    padding: `0px ${theme.spacing(.5)}px`,
  }
})
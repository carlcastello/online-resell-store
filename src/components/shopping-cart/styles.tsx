import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  container: {
    position: 'relative' as 'relative'
  },
  menu: {
    '& .MuiMenu-paper': {
      width: '400px',
      boxShadow: '2px 2px 4px #dbdbdb', 
    }
    // '& .MuiMenu-paper': {
    //   right: theme.spacing(4)
    // }
  }
})
import { Theme } from '@material-ui/core/styles';

import { StyleProps } from './types';
import { HeadingSize } from './enums';

const styles = (theme: Theme) => ({
  header: {
    height: ((props: StyleProps) => {
      switch(props.size) {
        case HeadingSize.LARGE:
          return "100vh";
        case HeadingSize.MEDIUM:
          return theme.spacing(35);
        case HeadingSize.SMALL:
        default:
          return theme.spacing(10);
      }
    }) as unknown as string,
  },
  contentMedia: {
    height: '100%',
    width: '100%',
  },
  contentText: {
    position: 'absolute' as 'absolute',
    bottom: ((props: StyleProps) =>  {
      switch(props.size) {
        case HeadingSize.LARGE:
          return theme.spacing(3);
        case HeadingSize.MEDIUM:
          return theme.spacing(2);
        case HeadingSize.SMALL:
        default:
          return theme.spacing(1);
      }
    }) as unknown as string,
    left: theme.spacing(3),
    padding: 0,
    width: ((props: StyleProps) => {
      switch(props.size) {
        case HeadingSize.LARGE:
        case HeadingSize.MEDIUM:
          return '65%';
        case HeadingSize.SMALL:
        default:
          return '100%';
      }
    }) as unknown as string, 
  },
})
export default styles;

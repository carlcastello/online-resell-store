import { Theme } from '@material-ui/core/styles';

import { IStyleProps } from './types';
import { HeadingSize } from './enums';

const styles = (theme: Theme) => ({
  header: {
    overflow: 'visible' as 'visible',
    position: 'relative' as 'relative',
    height: ((props: IStyleProps) => {
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
  contentTextContainer: {
    position: 'absolute' as 'absolute',
    bottom: ((props: IStyleProps) =>  {
      switch(props.size) {
        case HeadingSize.LARGE:
          return theme.spacing(4);
        case HeadingSize.MEDIUM:
          return theme.spacing(3);
        case HeadingSize.SMALL:
        default:
          return theme.spacing(2);
      }
    }) as unknown as string,
    left: `${theme.spacing(3)}px`,
    right: `${theme.spacing(3)}px`,
  },
  contentText: {
    width: ((props: IStyleProps) => {
      switch(props.size) {
        case HeadingSize.LARGE:
        case HeadingSize.MEDIUM:
          return '65%';
        case HeadingSize.SMALL:
        default:
          return '100%';
      }
    }) as unknown as string, 
  }
})
export default styles;

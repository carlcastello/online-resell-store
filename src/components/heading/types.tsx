import PropTypes from 'prop-types';
import { HeadingSize } from './enums';

export interface OwnProps {
  size: HeadingSize,
  classes: {
    header: string,
    contentMedia: string,
    contentText: string
  }
} 

export interface StyleProps {
  size: HeadingSize,
}
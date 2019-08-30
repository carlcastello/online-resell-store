import PropTypes from 'prop-types';
import { HeadingSize } from './enums';

export interface IOwnProps {
  classes: {
    header: string,
    contentMedia: string,
    contentTextContainer: string,
    contentText: string
  }
} 

export interface IStyleProps {
  size: HeadingSize,
}
import React, {Component} from 'react'

import { withStyles } from '@material-ui/styles'

import styles from './styles';
import { IOwnProps, IStyleProps } from './types'
 
class Heading extends Component<IOwnProps & IStyleProps> {

  renderCardContent = () => {
    const {
      children,
      classes: {
        contentText,
        contentTextContainer
      }
    } = this.props;
    if (children) {
      return (
        <div className={contentTextContainer}>
          <div className={contentText}>
            { this.props.children }
          </div>
        </div>
      )
    }
  };

  renderMedia = () => {
    const {
      classes
    } = this.props;
    return (
      // Uncomment Once an Image is ready.
      // <CardMedia image="" title="HelloWorld"/>
      <div className={classes.contentMedia}></div>
    )
  }
 
  render(): React.ReactNode {
    return(
      <div className={this.props.classes.header}>
        {this.renderMedia()}
        {this.renderCardContent()}
      </div>
    );
  } 
}
 
export default withStyles(styles)(Heading);

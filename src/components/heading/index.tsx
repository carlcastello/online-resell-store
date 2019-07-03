import React, {Component} from 'react'

import { Card, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'

import styles from './styles';
import { OwnProps } from './types'
 
class Heading extends Component<OwnProps> {

  renderCardContent = () => {
    const {
      children,
      classes: {
        contentText
      }
    } = this.props;
    if (children) {
      return (
        <CardContent className={contentText}>
          { this.props.children }
        </CardContent>
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
      <Card className={this.props.classes.header}>
        {this.renderMedia()}
        {this.renderCardContent()}
      </Card>
    );
  } 
}
 
export default withStyles(styles)(Heading);

import React, { Component, ReactNode } from "react";

import { IOwnProps } from "./types";
import { withStyles, Typography, Grid } from "@material-ui/core";
import styles from "./styles";


class Footer extends Component<IOwnProps> {

  renderLeftContent = (): ReactNode => {
    return (
      <div>
        <Typography variant="h5">
          THRIFT.ca
        </Typography>
        <Typography variant="subtitle1">
          Donec malesuada lacus sed enim volutpat
          pharetra finibus sit amet leo. Nam ultrices sed
          risus a blandit.<br/><br/>
        </Typography>
        <Typography variant="subtitle1">
          2369 29A Ave,<br/>
          Edmonton, Alberta<br/>
          Canada, T6T2B1<br/>
        </Typography>
      </div>
    );
  }

  renderRightContent = (): ReactNode => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Typography  variant="subtitle1">
            Company
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">
            How It Works
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">
            Resources
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">
            Legal
          </Typography>
        </Grid>
      </Grid>
    );
  }

  renderMainFooterContent = (): ReactNode => {
    return (
      <Grid container spacing={4}>
        <Grid item md={3}>
          {this.renderLeftContent()}
        </Grid>
        <Grid item md={9}>
          {this.renderRightContent()}
        </Grid> 
      </Grid>
    );
  }


  render(): ReactNode {
    const {
      classes: {
        mainFooter,
        postFooter,
        footerContainer,     
      }
    } = this.props;
    return(
      <div className={footerContainer}>
        <div className={mainFooter}>
          {this.renderMainFooterContent()}
        </div>
        <div className={postFooter}>
        </div>
      </div>
    );
  }  
}

export default withStyles(styles)(Footer)
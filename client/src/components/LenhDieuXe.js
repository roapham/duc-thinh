import React, { Component } from "react";
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import TextInput from './TextInput';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { Grid } from "@material-ui/core";
import DemoBase from "./DemoBase";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class LenhDieuXe extends Component {
  render() {
    return (
      <div className="flexGrow">
        <h1>Lệnh Điều Xe</h1>
        <Grid container spacing={16}>
          <Grid item>
            <TextInput
              id="ke-toan"
              label="Kế Toán"
            />
          </Grid>
          <Grid item>
            <TextInput
              id="chi-phi"
              label="Chi Phí"
            />
          </Grid>
          <Grid item>
            <TextInput
              id="tai-xe-1"
              label="Tài Xế 1"
            />
          </Grid>
          <Grid item>
            <TextInput
              id="tai-xe-2"
              label="Tài Xế 2"
            />
          </Grid>
          <Grid item>
            <TextInput
              id="ngay"
              label="Ngày"
            />
          </Grid>
          <Grid item>
            <TextInput
              id="so-lenh"
              label="Số Lệnh"
            />
          </Grid>
          <Grid item>
            <TextInput
              id="so-xe"
              label="Số Xe"
            />
          </Grid>
        </Grid>
        <DemoBase />
        <Button variant="contained" color="primary">
          <SaveIcon />Save
        </Button>
      </div>
    )
  }
}

export default withRouter(LenhDieuXe)

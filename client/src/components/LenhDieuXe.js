import React, { Component } from "react";
import { withRouter } from 'react-router';
import TextInput from './TextInput';
import { Grid } from "@material-ui/core";
import DemoBase from "./DemoBase";

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
      </div>
    )
  }
}

export default withRouter(LenhDieuXe);


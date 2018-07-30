import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    // width: 200,
  },
});

class TextInput extends React.Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const { id, label, classes } = this.props;
    return (
      <div>
        <TextField
          id={id}
          label={label}
          className={classes.textField}
          value={this.state.text}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        />
      </div>
    )
  }
};

TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextInput);

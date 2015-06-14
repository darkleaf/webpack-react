import React from 'react';
import mui, {AppBar, TextField} from 'material-ui';


//import 'material-design-icons/sprites/css-sprite/sprite-navigation-white.css'


const ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function() {
    return (
      <div>
        <AppBar title='Title' />

        <TextField
          hintText="Hint Text" />

      </div>
    );
  }
});

import React from 'react';
import mui, {List, ListItem, ListDivider, Checkbox, TextField, Toolbar, ToolbarGroup, ToolbarSeparator, FontIcon, FlatButton} from 'material-ui';

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
        <List>
          <ListItem>All mail</ListItem>
          <ListItem>All mail</ListItem>

          <ListDivider />

          <ListItem leftCheckbox={<Checkbox />} style={{overflow: 'visible'}}>
            Первая задача
          </ListItem>
          <ListItem leftCheckbox={<Checkbox />} style={{overflow: 'visible'}}>
            Вторая задача
          </ListItem>
          <ListItem>
            <TextField fullWidth hintText="Новая задача" />
          </ListItem>
        </List>
      </div>
    );
  }
});

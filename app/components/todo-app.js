import React from 'react';
import mui, {List, ListItem, ListDivider, Checkbox, TextField, FontIcon, Menu, Paper, IconButton, FlatButton} from 'material-ui';

import styles from './todo-app.css';

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
      <div className={styles.container}>
        <div className={styles.projectList}>
          <Menu
              autoWidth={false}
              zDepth={1}
              menuItems={[
            {text: 'Покупки', number: 22},
            {text: 'Дела', number: 33},
            {text: 'Добавить'},
          ]} />
        </div>
        <div className={styles.project}>
          <Paper zDepth={1}>
            <List>
              <ListItem rightIcon={<FontIcon>2</FontIcon>}>
                Активные
              </ListItem>
              <ListItem rightIcon={<FontIcon>2</FontIcon>}>
                Завершенные
              </ListItem>

              <ListDivider />

              <ListItem disableTouchTap style={{paddingBottom: 0, paddingTop: 0}}>
                <div className={styles.todoItem}>
                  <div className={styles.todoCheckbox}>
                    <Checkbox label="Первая задача"/>
                  </div>
                  <div className={styles.todoButtons}>
                    <IconButton>
                      <i className="material-icons">edit</i>
                    </IconButton>
                    <IconButton>
                      <i className="material-icons">delete</i>
                    </IconButton>
                  </div>
                </div>
              </ListItem>


              <ListItem disableTouchTap style={{paddingBottom: 0, paddingTop: 0}}>
                <div className={styles.todoItem}>
                  <div className={styles.todoTextField}>
                    <TextField fullWidth hintText="Редактируемая задача" />
                  </div>
                  <div className={styles.todoButtons}>
                    <IconButton>
                      <i className="material-icons">delete</i>
                    </IconButton>
                  </div>
                </div>
              </ListItem>

              <ListItem>
                <TextField fullWidth hintText="Новая задача" />
              </ListItem>

            </List>
          </Paper>
        </div>
      </div>
    );
  }
});


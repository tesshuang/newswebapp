import React, { Component, Fragment } from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import Categories from './Categories.js';
import Countries from './Countries.js';
import Icon from '@material-ui/core/Icon';

class Header extends Component {
  constructor(props){
    super(props);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleCountries = this.handleCountries.bind(this);
    this.handleNews = this.handleNews.bind(this);
  }
  handleCategories(arg){
    this.props.handleCategories(arg);
  }
  handleCountries(arg){
    this.props.handleCountries(arg);
    this.props.handleNews();
  }
  handleNews(){
    this.props.handleNews();
  }     
  render() {
    return (
      <Fragment>
        <AppBar position="static">
        <Toolbar>
          <IconButton style={classes.menuButton} color="inherit" aria-label="Menu">
            <Icon className={classes.icon}>book</Icon>
          </IconButton>
          <Typography variant="title" color="inherit" style={classes.flex}>
            News
          </Typography>
          <Countries
            countries={this.props.countries} 
            handleCountries={this.handleCountries}/>
          <Categories 
            categories={this.props.categories}
            handleCategories={this.handleCategories}
            handleNews={this.handleNews}/>
        </Toolbar>
      </AppBar>
    </Fragment>
    );
  }
}
const classes = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
};

export default Header;

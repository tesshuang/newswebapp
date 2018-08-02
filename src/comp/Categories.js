import React, { Component, Fragment } from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';


class Categories extends Component {  
  constructor(props){
		super(props);
		
		this.state = {
      anchorEl: null,
		}
		
  }  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = (arg) => {
    this.props.handleCategories(arg);
    this.setState({ 
      anchorEl: null
    });
    this.props.handleNews();
  };
  render() {
    const newsCategories = this.props.categories.map((obj, index)=>{
      return(
        <div key={index}>
          <MenuItem onClick={this.handleClose.bind(this, obj)} value={obj}>{obj.toUpperCase()}</MenuItem>
        </div>
      )
    });
    return (
      <Fragment>
        <Button
          aria-owns={this.state.anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Categories
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          {newsCategories}
        </Menu>
    </Fragment>
    );
  }
}


export default Categories;

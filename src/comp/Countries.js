import React, { Component, Fragment } from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';


class Countries extends Component {  
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
    this.props.handleCountries(arg);
    this.setState({ 
      anchorEl: null
    });
  };
  render() {
    const newsCountries = this.props.countries.map((obj, index)=>{
      return(
        <div key={index}>
          <MenuItem onClick={this.handleClose.bind(this, obj.id)} value={obj.id}>{obj.name.toUpperCase()}</MenuItem>
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
          Countries
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          {newsCountries}
        </Menu>
    </Fragment>
    );
  }
}


export default Countries;

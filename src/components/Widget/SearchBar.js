import React from 'react';
import * as styleGuide from '../../constants/styleGuide'
import {Grid, Input} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";


const styles = theme => ({
   root:{
       padding: '5px 20px',
fontSize:styleGuide.L,
       display:'inline-block',
       backgroundColor:'white',
       border:'1px solid' + styleGuide.greyDivider,
       height: '40px',
boxShadow:styleGuide.textBoxShadow,
       width:'400px'






}
});

class SearchBar extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            placeHolder: '',


        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };


    render() {
        const {classes} = this.props;

        return (
          <Grid container alignItems={'center'} className={classes.root}>
                    <span className={' icon-search-16'} style={{}}/>

                    <Input placeholder={this.props.placeHolder}
                           disableUnderline={true}
                           className={'Thin'}
                    />
          </Grid>
                )
                }}


SearchBar.propTypes = {
                classes: PropTypes.object.isRequired,
            };

                export default withStyles(styles)(SearchBar);
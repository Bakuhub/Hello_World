import React, {Fragment} from 'react';
import * as styleGuide from '../../constants/styleGuide'
import {Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
    root: {
        display: 'inline-block',
        backgroundColor: 'white',
        border: '1px solid' + styleGuide.greyDivider,

    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.XL,

        fontWeight: 'lighter',
        paddingBottom: styleGuide.M,
    },
    btnText: {
        fontSize: styleGuide.L,


    },
    icon: {
        fontSize: styleGuide.XL,
        marginRight: '5px',
    }

});
const options = [
    'Shoes',
    'Coats',
    'Hats',
    'Feature',
];

class WhiteButton extends React.Component {

    constructor() {
        super()
        this.state = {
            anchorEl: null,
            selectedIndex: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };


    handleClickListItem = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuItemClick = (event, index) => {
        this.setState({selectedIndex: index, anchorEl: null});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;

        return (
<span className={classes.root}>
                <ListItem button
                          onClick={this.handleClickListItem}
                         >
                        <span className={classes.icon + ' ' + this.props.icon}/>
                        <span className={classes.btnText}>
                            {(this.state.selectedIndex||this.state.selectedIndex===0)
                                ?options[this.state.selectedIndex]:this.props.value}

                    </span>
                        <span className={classes.icon + ' ' + this.props.icon2}/>
                </ListItem>

                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
</span>
        )
    }
}

WhiteButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhiteButton);
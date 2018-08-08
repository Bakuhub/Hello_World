import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";

const statusOptions = {
    success: 'green',
    inProgress: 'yellow',
    cancelled: 'red',
}


const styles = theme => ({

    success: {
        display: 'inline-block',
        padding: '5px 10px',
        backgroundColor: '#f4faee',
        color: '#aad2a1',
        fontFamily: 'ocsSemiBold',

    },
    inProgress: {

        display: 'inline-block',
        padding: '5px 10px',
        backgroundColor: '#fdf7ea',
        color: '#f2b532',
        fontFamily: 'ocsSemiBold',

    },
    cancelled: {

        display: 'inline-block',
        padding: '5px 10px',
        backgroundColor: '#fcf1f3',
        color: '#f0808f',
        fontFamily: 'ocsSemiBold',

    },

});

class StatusLabel extends React.Component {
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
            <div className={classes[this.props.value]}>
                {this.props.value}
            </div>
        )
    }
}

StatusLabel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusLabel);
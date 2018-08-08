import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import * as  styleGuide from '../../constants/styleGuide'

const styles = theme => ({
    colorSwitchBase: {
        color: purple[300],
        '&$colorChecked': {
            color: purple[500],
            '& + $colorBar': {
                backgroundColor: purple[500],
            },
        },
    },
    colorBar: {},
    colorChecked: {},
    iOSSwitchBase: {
        '&$iOSChecked': {
            color: theme.palette.common.white,
            '& + $iOSBar': {
                backgroundColor: styleGuide.purpleButton,
            },
        },
        transition: theme.transitions.create('transform', {
            height: 20,
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.sharp,
        }),
    },
    iOSChecked: {
        transform: 'translateX(19px)',
        '& + $iOSBar': {
            opacity: 1,
            border: 'none',
            height:'22px',
            width: '43px',
            backgroundColor: purple[500],

        },
    },
    iOSBar: {
        borderRadius: 13,
        width: 41,
        height: 20,
        marginTop: -11,
        marginLeft: -19,
        border: 'solid 1px',
        borderColor: theme.palette.grey[400],
        backgroundColor:'#b5b2bf',
        opacity: 1,
    },
    iOSIcon: {
        width: 16,
        height: 16,
        backgroundColor:'white',
    },
    iOSIconChecked: {
        boxShadow: theme.shadows[1],
    },
});

class CustomizedSwitches extends React.Component {
    state = {
        checkedA: true,
        checkedB: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;

        return (

                <FormControlLabel
                    control={
                        <Switch
                            classes={{
                                switchBase: classes.iOSSwitchBase,
                                bar: classes.iOSBar,
                                icon: classes.iOSIcon,
                                iconChecked: classes.iOSIconChecked,
                                checked: classes.iOSChecked,
                            }}
                            disableRipple
                            checked={ this.props.checked}
                            onChange={ this.props.onChange}


                            value="checkedB"
                        />
                    }
                />
        );
    }
}

CustomizedSwitches.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedSwitches);
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as  styleGuide from '../../constants/styleGuide'
import {Grid,ListItem} from '@material-ui/core'
import {Link} from 'react-router-dom'

const styles = theme => ({
    root:{
margin:0,
        padding:'5px 0px',
        display:'inline-block',
    },
    backArrow: {
        fontSize: styleGuide.M,
        fontWeight: 'bold',
        color: styleGuide.lighterText,
        textTransform:'Uppercase',
    },
    icon: {
        compose: 'icon-left-16',
        color: "red",
    }
});

class BackArrow extends React.Component {

    constructor() {
        super()
        this.state = {
            title: '',
            link:''
        }
    }

    render() {
        const {classes} = this.props;

        return (
                <Fragment>
                    <a  href={this.props.link} className={classes.root}>
                    <span className={'icon-left-16'} style={{fontSize: '10px'}}/>
                    <span className={classes.backArrow}>
                     &nbsp;   {this.props.title}
                    </span>
                    </a>
                    <br/>
                    <br/>
                </Fragment>

        );
    }
}

BackArrow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackArrow);
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Divider, Grid,ListItem} from '@material-ui/core'
import * as  styleGuide from '../../../constants/styleGuide'
import TagsBar from '../../Widget/TagsBar'
import InputBar from '../../Widget/InputBar'

const styles = theme => ({
    root: {
        fontWeight: 'bold',
        border:' 1px solid #E8E4ED',
        fontSize:styleGuide.M,
        height:'35px',
        width:'100%'
    }
});

class StockLogs extends React.Component {

    constructor() {
        super()
        this.state = {
            title: '',
            isProductOptionsShow: false
        }
    }
    dialogSwitch = () => event => {
        this.setState({
            isProductOptionsShow: !this.state.isProductOptionsShow
        });
    }

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <br/>
                <ListItem
                    onClick={this.dialogSwitch()}
                    button container alignItems={'center'}
                    justify={'center'}
                    className={classes.root}>
                    <span className={'icon-list-16'}/>
                    <span> Stock Logs</span>
                </ListItem>
            </Fragment>



        );
    }
}

StockLogs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StockLogs);
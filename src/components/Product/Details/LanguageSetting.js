import React, {Fragment} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import * as  styleGuide from '../../../constants/styleGuide'

import {Divider, Grid} from '@material-ui/core'

const drawerWidth = 235;

const shops = [{

    id: 1,
    name: "test1"

}, {

    id: 1,
    name: "test2"

}, {

    id: 1,
    name: "test3"

}, {

    id: 1,
    name: "test4"

}]
const styles = theme => ({
    root: {
        marginBottom: '15px',
    },

    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#2E2833',
        color: 'white'

    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    nestedList: {
        color: '#9D91A8',
        backgroundColor: '#494151',
        borderRadius: '30px 0 0 30px',
        padding: '10px',
        fontSize: '14px',
        marginLeft: '10px',
        borderRight: '15px solid #905CC4'

    },
    normalList: {
        padding: '10px',
        fontSize: '14px',
        marginLeft: '10px',
    },
    icon: {
        fontSize: '20px'
    },
    shopListItem: {
        height: '20px',
        width: '20px',
        borderRadius: "5px",
        marginTop: '5px'
    },
    active: {},
    disActive: {},
    addButton: {
        fontSize: styleGuide.L,
        padding: '3px 10px',
        backgroundColor: styleGuide.purpleButton,
        borderRadius: '2px',
        color: 'white',
    },
    removeButton: {
        float: 'right',
        fontSize: styleGuide.M,
    },
    listText: {

        marginRight:'5px',

    },
    languageIcon:{
        marginRight:'5px',

    },
    addProduct:{
        color:styleGuide.purpleButton,
    }
});

class LanguageSetting extends React.Component {
    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    dodajAktywne = event => {
        console.log(event)
    }

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                {shops.map((shop, i) =>
                    <Grid container alignItems={'center'} justify={'space-between'} className={classes.root}>
                        <Grid item>
                        <span

                        className={classes.languageIcon  +' ' + 'icon-chat-16'}
                        />
                        <span
                            className={classes.listText}

                        >{shop.name}
                                </span>
                        <a
                            className={classes.addButton}

                        >
                            Set Active
                        </a></Grid>
                        <Grid item >
                        <Link to={'#'}>
                            <span className={'icon-remove-16' + ' ' + classes.removeButton}/>
                        </Link></Grid>

                    </Grid>
                )}
                <a href={'#'}>
                    <span className={'icon-add-16 purpleIcon'} />
                    <span className={classes.addProduct}>
                        Add product language
                    </span>
                </a>
            </Fragment>)

    }
}

LanguageSetting.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LanguageSetting);
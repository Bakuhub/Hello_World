import React from 'react';
import List from '@material-ui/core/List';
import {Grid} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const drawerWidth = 235;

const shops = [{

    id: 1,
    name: "English"

}, {

    id: 1,
    name: "Cantonesse"

}, {

    id: 1,
    name: "Mandarin"

}, {

    id: 1,
    name: "Other_Tests"

}]
const styles = theme => ({
    root: {
        flexGrow: 1,
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
        padding: '10px 0px',
        fontSize: '14px',
    },
    listContainer: {
        display: 'flex',
        'align-items': 'center',
    },
    icon: {
        fontSize: '18px'
    },
    iconLanguageTbl: {
        fontSize: '18px',
        marginRight: '5px',
    },
    textIconColor:{
        color:'#905CC4',
    },
    shopListItem: {
        height: '20px',
        width: '20px',
        borderRadius: "5px",
        marginTop: '5px'
    },
    active: {},
    disActive: {},
    addButton: {},
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
            <List>
                {shops.map((shop, i) =>
                    <ListItem className={classes.normalList} key={i}>
                        <Grid container>

                            <Grid item sm={11} className={classes.listContainer}>
                                <span className={classes.iconLanguageTbl+ ' ' +'icon-chat-16'}/>
                                <span>{shop.name}</span>
                            </Grid>
                            <Grid item sm={1} className={classes.listContainer}>
                                <div className={'icon-remove-16'} style={{fontSize: '10px'}}/>
                            </Grid>

                        </Grid>

                    </ListItem>
                )}
                <ListItem className={classes.normalList} button>
                    <span className={classes.iconLanguageTbl+ ' ' +'icon-add-16'+ ' ' +classes.textIconColor}/>
                    <span className={classes.textIconColor}>Add product language</span>
                </ListItem>
            </List>)

    }
}

LanguageSetting.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LanguageSetting);
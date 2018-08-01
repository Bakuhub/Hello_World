import React from 'react';
import List from '@material-ui/core/List';
import {Grid,Tooltip,Button} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


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
                        <Grid container alignItems={'center'}>

                            <Grid item sm={2}>
                                <div className={'icon-chat-16'}/>
                            </Grid>
                            <Grid item sm={9}>

                                <div>{shop.name}
                                </div>
                            </Grid>
                            <Grid item sm={1}>
                                    <Button variant={'fab'} style={{ backgroundColor:'#efefef'}}>
                                        <div className={'icon-remove-16'} style={{fontSize: '12px'}}/>
                                    </Button>
                            </Grid>

                        </Grid>

                    </ListItem>
                )}
                <ListItem button>
                    <div className={'icon-add-16'} style={{color: 'red'}}/>
                    <div>
                        Add product language
                    </div>
                </ListItem>
            </List>)

    }
}

LanguageSetting.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LanguageSetting);
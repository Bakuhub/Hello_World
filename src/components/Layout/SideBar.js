import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {Divider, Grid} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const drawerWidth = 240;

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

});

class PermanentDrawer extends React.Component {
    state = {
        anchor: 'left',
    };

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
        const {anchor} = this.state;

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={anchor}
            >
                <div className={'icon-logo'} style={{padding: '10px'}}/>

                <Divider/>

                <List>
                    <ListItem>
                        <div className={' Light Sub-Heading uppercase'}
                             style={{fontSize: "12px"}}>General</div>
                    </ListItem>
                    <ListItem button className={classes.nestedList}>
                        <Grid container
                              alignItems={'center'}
                        >

                            <Grid item sm={2}>
                                <Grid container alignItems={'center'}
                                >
                                    <Grid item sm={2}/>

                                    <Grid item sm={10}>
                                        <div className={"icon-house-24 "}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={9}>
                                <div className={'Sub-Heading Lighter'}>Dashboard</div>
                            </Grid>
                        </Grid>

                    </ListItem>

                    <ListItem button component={Link} to={'/login'} className={classes.normalList}>
                        <Grid container alignItems={'center'}>

                            <Grid item sm={2}>
                                <Grid container alignItems={'center'}>
                                    <Grid item sm={2}/>

                                    <Grid item sm={10}>
                                        <div className=" icon-shirt-24  "/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={9}>
                                <div className={'Sub-Heading Lighter'}>Products</div>
                            </Grid>
                        </Grid>

                    </ListItem>
                    <ListItem button className={classes.nestedList}>
                        <Grid container alignItems={'center'}>
                            <Grid item sm={2}>
                                <Grid container alignItems={'center'}
                                >
                                    <Grid item sm={2}/>

                                    <Grid item sm={10}>
                                        <div className=" icon-box-24  "/>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sm={9}>
                                <div className={'Sub-Heading Lighter'}>Orders</div>
                            </Grid>
                        </Grid>

                    </ListItem>
                    <ListItem button className={classes.nestedList}
                    >
                        <Grid container alignItems={'center'}>

                            <Grid item sm={2}>
                                <Grid container alignItems={'center'}
                                >
                                    <Grid item sm={2}/>

                                    <Grid item sm={10}>

                                        <div className=" icon-cog-24  "/>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sm={9}>
                                <div className={'Sub-Heading Lighter'}>Settings</div>
                            </Grid></Grid>
                    </ListItem>
                </List>
                < Divider/>
                < List>
                    < ListItem>
                        < Grid
                            container
                            alignItems={'center'}>
                            < Grid
                                item
                                sm={11}>

                                < div
                                    className={' Light Sub-Heading uppercase'}
                                    style={{fontSize: "12px"}}> Store Management
                                </div>
                            </Grid>
                            <
                                Grid
                                item
                                sm={1}>
                                < div
                                    className={'icon-add-16'}
                                    style={{fontSize: '13px'}}
                                />
                            </Grid></Grid>

                    </ListItem>
                    <
                        ListItem
                        button>

                        < ListItemText
                            primary=""/>
                    </ListItem>
                </List>
            </Drawer>)

    }
}

PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
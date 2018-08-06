import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {Divider, Grid} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
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
shopListItem:{
        height:'20px',
    width:'20px',
    borderRadius:"5px",
    marginTop:'5px'
}
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
                <div className={'icon-logo'} style={{paddingLeft: '20px', paddingBottom: '20px'}}/>


                <List>
                    <ListItem>
                        <div className={' Light Sub-Heading uppercase'}
                             style={{fontSize: "12px"}}>General
                        </div>
                    </ListItem>
                    <ListItem button component={Link} to={'/feeds'} className={classes.nestedList}>
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

                    <ListItem button component={Link} to={'/products'} className={classes.normalList}>
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

                    <ListItem  component={Link} to={'/orders'}  button className={classes.nestedList}>
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
                            alignItems={'center'}
                            style={{paddingTop: '15px'}}>
                            < Grid item
                                   sm={11}>

                                <div
                                    className={' Light Sub-Heading uppercase'}
                                    style={{fontSize: "12px"}}> Store Management
                                </div>
                            </Grid>
                            <
                                Grid
                                item
                                sm={1}>
                                <Grid container alignItems={'center'}>
                                    <Grid item sm={7}/>
                                    <Grid item sm={3}>
                                        < div

                                            className={'icon-add-16'}
                                            style={{fontSize: '15px'}}
                                        />
                                    </Grid>
                                </Grid>

                            </Grid>


                        </Grid>

                    </ListItem>
                    {shops.map((shop,i)=>
                        <ListItem button className={classes.normalList} key ={i}>
                            <Grid container alignItems={'center'}>

                                <Grid item sm={2}>
                                    <Grid container alignItems={'center'}>
                                        <Grid item sm={2}/>

                                        <Grid item sm={10}>

                                            <img
                                                className={classes.shopListItem}
                                                src={'data:image/jpeg;base64,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'}/>

                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item sm={9}>

                                    <div className={'Sub-Heading Lighter'}>{shop.name}</div></Grid></Grid>

                        </ListItem>


                    )}

                </List>
            </Drawer>)

    }
}

PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
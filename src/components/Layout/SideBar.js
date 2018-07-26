import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';

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
    appFrame: {
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },

    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'fixed',
        width: drawerWidth,
        backgroundColor: '#3f3d52',
        color: 'white'


    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    nestedList: {
        color: 'white'
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
                <div className={classes.toolbar}/>
                <Divider/>

                <List className={'Lighter'}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <div >General</div>

                    </ListItem>
                    <ListItem button className={classes.nestedList}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <div className={'Display1 Lighter'}>Dashboard</div>

                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <StarIcon/>
                        </ListItemIcon>
                        <div className={'Display1 Lighter'}>Products</div>

                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon/>
                        </ListItemIcon>
                        <div className={'Display1 Lighter'}>Orders</div>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon color={'primary'}/>
                        </ListItemIcon>
                        <div className={classes.nestedList}>Settings</div>

                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon/>
                        </ListItemIcon>
                        <ListItemText primary=""/>
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
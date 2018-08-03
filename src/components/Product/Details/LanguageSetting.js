import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PurpleButton from '../../Widget/PurpleButton'
import {Link} from 'react-router-dom'


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
    addButton: {

    },
    removeButton:{

    },
    listText:{

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
            <List>
                {shops.map((shop, i) =>
                    <div>
                        <span className={'icon-chat-16'}/>
                        <span
                            className={classes.listText}

                        >{shop.name}
                                </span>
                        <PurpleButton
                            link={'#'}
                            value={'Set Active'}
                        />
                        <Link to={'#'}>
                            <span className={'icon-remove-16'+' '+classes.removeButton} />
                        </Link>
                    </div>
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
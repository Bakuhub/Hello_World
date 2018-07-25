import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import {Grid, MenuList, MenuItem} from '@material-ui/core'

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

class SideBar extends React.Component {
// eslint-disable-next-line
    constructor() {// eslint-disable-next-line
        // eslint-disable-next-line
        super()
        // eslint-disable-next-line
    }

    render() {
        const {location: {pathname},} = this.props

        return (
            <div class="SideBar">

                <MenuList>
                    <MenuItem component={Link} to={'/login'} selected={'/login' === pathname}>
                        Home</MenuItem>
                    <MenuItem>
                        Writers</MenuItem>
                </MenuList>

                <List>
                    GENERAL
                    <ListItem button>
                        <Link to='/feeds'>
                            FEEDS
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to='/products'>
                            PRODUCTS</Link>
                    </ListItem>

                    <ListItem button>
                        <Link to="/orders"> ORDERS</Link>
                    </ListItem>

                </List>

                <List> SHOP MANAGEMENT
                    <div>
                        <button type="button">
                            <i className="fa fa-plus" aria-hidden="true">

                            </i>
                        </button>
                    </div>
                    {shops.map((shop, i) =>
                        <ListItem key={i} button
                        > <Link to={'/ggg'}>{shop.name}</Link>
                        </ListItem>)}
                </List>
            </div>

        )
    }
}

export default SideBar


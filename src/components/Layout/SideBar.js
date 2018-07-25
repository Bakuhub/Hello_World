import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

const shops = [{

    id:1,
    name:"test"

},{

    id:1,
    name:"test"

},{

    id:1,
    name:"test"

},{

    id:1,
    name:"test"

}]

class SideBar extends React.Component{
// eslint-disable-next-line
    constructor(){// eslint-disable-next-line
        // eslint-disable-next-line
        super()
        // eslint-disable-next-line
    }
render(){
        return (
            <div class="SideBar">
                <div>
                    <Link to="/">OneShop <span >(Beta)</span></Link>
                </div>
                <List>
                    GENERAL
                    <ListItem button>
                        <Link  to='/feeds'>
                            FEEDS
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to='/products'>
                            PRODUCTS</Link>
                    </ListItem>

                    <ListItem button>
                        <Link to="/orders" > ORDERS</Link>
                    </ListItem>

                </List>

                <List> SHOP MANAGEMENT
                    <div >
                        <button type="button">
                            <i className="fa fa-plus" aria-hidden="true">

                            </i>
                        </button>
                    </div>
                    {shops.map((shop, i) =>
                        <ListItem key={i} button
>                            <Link to={'/ggg'}>{shop.name}</Link>
                        </ListItem>)}
                </List>
            </div>

        )}
}
export default SideBar


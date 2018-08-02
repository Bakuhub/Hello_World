import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import {
    Checkbox,
    Grid,
    IconButton,
    Input,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Toolbar,
    Tooltip,
    Typography
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import SearchBar from '../Widget/SearchBar'
import PurpleButton from '../Widget/PurpleButton'
let counter = 0;

function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return {id: counter, name, calories, fat, carbs, protein};
}

function getSorting(order, orderBy) {
    return order === 'desc'
        ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
        : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
    {id: 'name', numeric: false, disablePadding: true, label: 'Product Title'},
    {id: 'calories', numeric: true, disablePadding: false, label: 'Category'},
    {id: 'fat', numeric: true, disablePadding: false, label: 'SKU'},
    {id: 'carbs', numeric: true, disablePadding: false, label: 'Inventory on Hand'},
    {id: 'protein', numeric: true, disablePadding: false, label: ' '},
];

class EnhancedTableHead extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const {onSelectAllClick, order, orderBy, numSelected, rowCount} = this.props;

        return (

            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {columnData.map(column => {
                        return (
                            <TableCell
                                key={column.id}
                                numeric={column.numeric}
                                padding={column.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === column.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === column.id}
                                        direction={order}
                                        onClick={this.createSortHandler(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({

    productPic: {
        height: '30px',
        width: '30px'
    }
});

let EnhancedTableToolbar = props => {
    const {numSelected, classes} = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subheading">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant="title" id="tableTitle">
                        Nutrition
                    </Typography>
                )}
            </div>

            <div className={classes.spacer}/>
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="Filter list">
                            <FilterListIcon/>
                        </IconButton>
                    </Tooltip>
                )}
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
    root: {},
    table: {
        minWidth: 1000,
    },

});

class EnhancedTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            category: [],
            data: [
                createData('Cupcake', 305, 3.7, 67, 4.3),
                createData('Donut', 452, 25.0, 51, 4.9),
                createData('Eclair', 262, 16.0, 24, 6.0),
                createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                createData('Gingerbread', 356, 16.0, 49, 3.9),
                createData('Honeycomb', 408, 3.2, 87, 6.5),
                createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                createData('Jelly Bean', 375, 0.0, 94, 0.0),
                createData('KitKat', 518, 26.0, 65, 7.0),
                createData('Lollipop', 392, 0.2, 98, 0.0),
                createData('Marshmallow', 318, 0, 81, 2.0),
                createData('Nougat', 360, 19.0, 9, 37.0),
                createData('Oreo', 437, 18.0, 63, 4.0),
            ],
            page: 0,
            rowsPerPage: 5,
        };
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({order, orderBy});
    };
    goDetail = (e, id) => {
        console.log(e)
        console.log(id)

    }
    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState(state => ({selected: state.data.map(n => n.id)}));
            return;
        }
        this.setState({selected: []});
    };

    handleClick = (event, id) => {
        const {selected} = this.state;

        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({selected: newSelected});
    };

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const {classes} = this.props;
        const {data, order, orderBy, selected, rowsPerPage, page} = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <Grid container direction={'column'}
                  className={'greyBackGround'}
                  style={{paddingLeft: '35px', paddingRight: '35px'}}>
                <br/>
                <br/>
                <br/>
                <Grid item>
                    <div className={'Darker Display4'}> Product List</div>
                </Grid>
                <br/>
                <Grid item>
                    <Grid container alignItems={'center'}>
                        <Grid item sm={5}>
                            <Grid container alignItems={'center'}>
                                <Grid item sm={3}>
                                    <Select

                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>

                                </Grid>
                                <Grid item sm={7}>


                                    <SearchBar placeHolder={'search products...'}/>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item sm={5}/>
                        <Grid item sm={2}>
                            <Grid container alignItems={'center'}>
                                <Grid item sm={4}/>
                                <Grid item sm={8}>

<PurpleButton
link={'/products/new'}
value={'Add Product'}
icon={'icon-add-16'}



/>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <br/>

                    <Paper className={classes.root}>
                        <EnhancedTableToolbar numSelected={selected.length}/>
                        <div>
                            <Table className={classes.table} aria-labelledby="tableTitle">
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={this.handleSelectAllClick}
                                    onRequestSort={this.handleRequestSort}
                                    rowCount={data.length}
                                />
                                <TableBody>
                                    {data
                                        .sort(getSorting(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(n => {
                                            const isSelected = this.isSelected(n.id);
                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={event => this.handleClick(event, n.id)}
                                                    role="checkbox"
                                                    aria-checked={isSelected}
                                                    tabIndex={-1}
                                                    key={n.id}
                                                    selected={isSelected}

                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox checked={isSelected}/>
                                                    </TableCell>

                                                    <TableCell component="th" scope="row" padding="none">
                                                        <Grid container alignItems={'center'}>
                                                            <Grid item sm={4}>
                                                                <img style={{height: '45px', width: '45px'}}
                                                                     src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABYlBMVEXvRE3///+aHUf//v/8///uRE3///3//P/xQ03vQ0/uQ0ru0dXjOUTxvcHmO0TtRUzxOUPiMj3qjpPmQkj77OyXHkfmdXycHEfuRUrvQ1L3///zQkr8//vibXTrRVD1QE//9vfnYWb/+P/pk5XeTlWTIEfkS1X96+npM0TgRFbePUbsr7X/9fLvu7b93uDsRFP/7/mjHEqTCz7/8e3nnqHtwMbUVlz/zcvVZXHucnj5P03ptLXXNTvjf4HsK0TcPEvnT2Lvra36na7YZWbx2NTeoqXaUmHXISvhVVryt8Xsc3793OjhfHzxNTvnjZfvMUzqobDqgI3fSk3ujo3jYXP7vsHckpfzzsnwLDPSQD7nWFn1xdHdgpDpPz3pm6n3kp24KUeuV3Lgu8rGM0/UoreWN1eCADDpzdq0eY6gHj7RNlbFVGPz2eudGDXJj6LGJ0G7Eke5ZXukYXjScnfTnaSZHFEjLNQ/AAAT4UlEQVR4nO1d/VvbRrbWoNFoZixbMjJG8sgag40lbEfmw4bGhDoshFKSkEKTcHdT+pXbtNzbbe/d3v7/94xMUshiNukPIWvrffJgIJIf+eWced8zOjPStAwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkGEKYNz2BfybwAgltw2/6zONC0EpNWzNE0bo+xmD7wAjZIYmPDFwYsuyHEdQwwhDKUNKb/vS/i1Ahe1qTrPcu7O52d+qV4cFIcOQ2jyj7x1AhRCD5XYJIYwRgOzVl2Nq2zQb/t4JQrRmI1TBSNexbioSa/XhgPOMvneCGOYR1nUCCCoVIBHp5LRBIQBv+8o+IhihJuxQwnhGpYzjuADhpQnKNNrqowpE3UXuwgtBFVSqCo9KPzRoFoMKEEyShqFL4+HT+oP2Tq+8bFHOqLDaiAR6haDS97/89NMvP5oqFCtofdcRGpiXjL4UAqyclHywvxORQCkEqZ2Wu75XOIZ40xFp//f5WoqlXxYRqeBK1ABFpjRkt33lHwVsSl0qmzudCjYxjHAkALx4Gjci0AvSOX759/P5mZn5+bnV8x9+BnJNtGkJz2OhvO0r/yjg+0KwTxJQBtMMAkJwAAyRTm8LExOTcvd8bu53YG9+bmlmbe1nFJAKOpae52f0pWCMWtslbC6aQFyqEKZp6hUgL9DRFnu5BtTNzMzNAYFzaz+soEqAckNh+6G47Sv/GADK8eQrCDgM5OnJ94AVGP8CExKZ4NpBeA6hB+wBfyoEz39CJsHkN8kly+wLBQj36QoieoDM/P++UhLx6h8/phpLAtwvDIG7S1h9taL8XzsWrsyUV/HHu4lu6hjtPf2f1XSEW1179Qu4PdAQ1Dtbnr/K39p/ArUosbgtpz36RjMntI500Nzk5NelJUUfDHKrr35BqlJD287Lq/TNzf8D6MPrLc3I6KPUMOxmlMbTcDi/BCILo5ySiVffp+Xa3cHLuSvBt7S6tIIRDoacZfRRzbD5NgKJJVXQiPm5VGBVvK3+sAic1ha6387NXY2+NVAWFCxzmtFHNdsuPoNgwp8XXwI1KXdKYufUGIfQyvLy6sxbeFWCuAyWIXKnnT6biVBrgZPTSdn/9oK5mTR9Z+aXvtd//MeqYvQKe3NLK4q+rvQ9/7av/7bBaEgPagij0gkUFyl9KeC7edDfV2vzc3NvS4ca+1Bg+Rl9lGlM3FXTBLnC8Bwk9/UwN7+qPPLM6vxM+nqZvrXvzIqOohZj3rRP2dNQY4NHBBGcd67QB0G2ugrULS3NvJ27az8pnT61DGpn9BlsUA7Ax+WLambgEn1zKgTnZ+b/SOjXthkcDUI9aotw6ulj1BB3ifLM97rnM5eogqxdGlmYt9gD3wJso7sS6OO3ff23DyYPasBHaRh+qzh7k6nz86O0vSQdcyl73yFCcNSUNmfTHn0welE5jDDBpCyWQWZnrg50V8IOmBxVI3qAtlxpG2Lq6RNQ+Ft3kElQ3/HP5+fGs5eaGcjnHxZ1RFBZSkMT026bQ6gcmCwToK924L2cWZofz58qRVQtAgNlkAwls+nU08cotzUZRlC0oa0ClLc3JC8kLox8S6ZuYlKXLAT6pl06mOFxjxbq6g6ufhwvn78ls28PfqvgWkzQmaZgSjemfeyjhs25bXcjNfqV/ub+1/lSmqVjhr65+e904Bl94QgKg599XfQZlI86AI030IyJ1mivcKxjnaBof/Dr3EWgXR98r34E14JKfx2MHfWYLwRlzKCUhewCUvOlO7kMMqOwg80gQA8PjJdLM+czv1+rwKAbUK8hTI4K4wc9g0kIZ1B0F0LuAo5DJfz4AT/RB4UvRSvBKDBxtMBerqnS99ohcO2HlQrGeK8l3Zv4Y6HgVnPhD+wuLPvCntj7SlQa4iBCKCC4VnVAP+bnfr+GPZW6ql6rCsa9sW9m+74xGLZNQkxlEFXLR0BKR3JyG2I827fF/Q4KAoxrs60x/mU+nWrRUd6yjRvmmW2fctlT99p1ODiFWalAkTe59PGwKwsbCQxrEC75hvbr+XWp+90igtiLGtQHXRj3XpSG1BuWVEcgmKERwCl2DsTE0qdBMFFD3E9Upunmw+1i92LiftRZkH5dXXuITAil8kgTxr4Vpa5ziIKKustJRtEH35y2Jr5Eoct5pFoLTNTfj4d/V/NVKXdLS8Df6qvvUYB11C66hnYjfbbrfI6Ijju5vdMR9jbvbMiJ74fhIu4RBAYGo1LvxP/1fOl3FYMzq4rEtV+Q4iQZGkZBu2FdgqHZtFnC8Deox69hxTEUeZObvCkMwxOFcgSpppr8ot7J8OX57yqBl4BBkA0SmHpnQ8BxN9FnU8PZhsIE1xrgrT0PikIuPG5P/FIQJm1XxI07BFcCojSivjx8HYFr361gAlE5W0x7im56G0kFjAEE9+NB1zdU0aFJOVCj64f6ILcDKlyNhYNiOVFNBCmBvQMgcE6J7gqILkY7RRH+K/qYvFdTHb3b3PVHZZvh2uCZJ8o2U0hBzjlNP59qkITktaXfZRp1TnodpFr9II07+YXWr9/+/YefEQYTvNli8oI+Q9ihxj1BwQ1T7eId1FtRj1XBAKGo6bHXzacCVFdOVPBRIwyhti8WC+5baPqhc9KuobQ/DSM9qTf2V0ayceLZr/0eG9i+IYTjhsPhldOLxf2c6vm4U/ClMVGUXQaFlJLDo1wpKv0TouQ3azdvqg5TgqBwWF/RSQXUeD/0wjf+w2bSk9XT9fUoWr96domo2a9tl/kTyx4U9pwun4487VWYCFdKsVPcyNeQvqhD8VDBkLmVaF8Kw2cXcwXUZfKsC3UK0q+eDkdD1uMotiHPJ2m4uwIqvcIW+BPyTwgCE5OGByZmQ60FhLrVhAIC18oO5yCk7ut3kFAm4yBQqxgunw5HA+Oo/akt3cmNPkrFsKPkAKUMXQJUbWh96HddMSicfLmnq0LOrHTKlmfbGjfC0fk+hKI9jODkt8MXV4hOUJULyu2JneIDi7eMTLVUEummbv4BnSyWkkcOVy3PVPBWdQs4Qp3tgiZ90FpDNVWBJPhU0FCWH8Lp+sXp8Jr+U7eSEmBfE5MbfpR5TdXagnaLLaf4Nt6sdmb+WaH4qL2z4Lmh5GDjfCY85kue1v+UFy6dZME/67NWgiF3dwq3+Nk+ABjzwj0Y5FFdAi9jD/OkEzu8Kx0n1rjFPVeKJ7bhX7eanDMhQk00SvBHIQsTG3cjMCYKvUDNJFnsBnvGm73eLKPWo17vvlv/+oA2670FSr3rSgimpvrkNlL9RtaE02cYgu53MA5qT29yt2wDav/9QZxDqGwl6AvnN9Q5ELZg14iC6tKXrA9WkdyJJ58+bm2CMUYPCuMF0tA2QDeqohthVH5cx4mzg06fiBPv2rLXpowOa8q2POIT6/guwLgnj9NWM5eG4w4y5Aa4mrqzD2ledvYXg/0EHUOy28Y1ayltF0aEKqrouNSd8OAD0QRulksk0FE5vuGwDSg6nhXKQQUdnlkv0P/ptZZhS+26fKcnVFhfQMWB88WJ3+vAhviL+wgyLX/DbTO2QRBOij1EgL7CEeqg/lhLIkLqLCeqC+ErMfFTyzbVPPEVMjHuNN2xh4F01Eq1Vt/cw4ecN2oVcjzW5cDI5xwThILaMp/0uVEWgv1QvQXAX338XRxFX5/sR0kOHYayuFkpNccSY1MRt9V8wWk88VPLjHGgT/SwidDp+NJUbqDOc3REci/QXVc6dZS3xh5rGLSVQDijnnAnd6ZvBLWmhbmisYgJMTfGflgB9FXRKeq9QIecFWbRs/HVGDP4gZrSX6ye8Yk3LpRT36WFFxUQj16BwmdPl1eqZjx1K41zT92goPuoc69G0G+bqCx8C+iLVe+ZkU7LU8NWUBP/8BO4x0IdmRXU73picmf6rsCoB5C9SWvg+1CIUc2GstaQo7YyxZEE+j7brNQam+iuYEDPMyslTVPNkZqalrEN5ttqMwmu8TiHQTp2B+7E3xK/gD3sqxnTshNKCDZKBXddTXh26DNmAE8ckvfTdiX6bBMdCi8d+zwBFYsA5pjteSoIucsFDV2NyoMODtBKi7rjW2AmC8bgE7VKo1/wmK95EFS+PxA2laAstmuLgdxYiT4tk2f3NvW73HO+MZ9ZYJkpCDeTgAEUHx4okMeFHdqDOiEVlHuiMW3SXfMF/EFZzcXrG4PQl1C8UZt6ns3UF8hd3w9P7h847kFTNhc8wUVzoeFJ10t3AIPYA56Y9EOq7q8PJI1PVQfWnU+5SuypABMNtXkQbsceo2EojRPLtygMgG6XxUIFVtwM1X5fYSscxp4rfJer3ecgd1ssBpZbvj+0ulJzBdWGga4TNCuEVOozDbDPrC9U98VKU7hUUP84Kj1MetaTXrQSJfWhpAenpaTXHVSj5OFenclGkhSGm9EhbdX3onaDPo2iJIr29iWoBd8G+lBtX0DJNuG27zXsUO4T1dR8JDxJbVFXJSvqPd5CqjfvyAkfqtcHjx+lP7cfH6BaEbxx+ckD9Ytcsapa/vTOrqA2d/I4IBDHU7QzJ/WllVMNy6cWpwaN6+jFRg+Vhm20Ba85axtFG1+jqFBGe7vPzZp7oJdS+oYR/qpcQofd3epi7ZOnIRg91oxUc2p5mlYa+UyIdJO+YB/8HPXBFzv3a+vNHfQXZ4HsgU++83iB1IZAn1OM0EEDjehrIFJ8nENH8VlzsXYyAAtuyN9UI0c0vqibQPiGJ5rriJi4x8D4+d9goK+0frKDgT6k6MsXd0mtC/QV7yXo/hv6dFI8ayfb0m7Uag3msi532jjQ8ZZz2x/pQwIcGi+0ERT6ydC2Kaujzx/v10qNNurBuKbo+9xZMDthGeXiYTSiz0rQYUPXP6VPhuBdmp1Ow2eSiVYE9KFHU0WfJlh4ViWQvsFdj3GQjuRBDiShjXIPEvSsCHSeLSzWXIg+a5hA8uqKPlxukCB2B1Dt0mat0xxwzR6od0Gl5SnR3AtQxrwYrB9BW4+lLb5UW+RGuw4EJKqUDiRUaWdPzVpLJW9LjX2kVCwo+swgFgKqE9Gs1ZpQ8Nlwipqmj6dGdV+DQymrB3qpAMZlFiVfzG64wEWujaK/yllF36KiLxcXErR/gFas1kMY+0xieeXZBU1FX8O3NQH/C/xtiympdi+BbqhuWrTNOdD1eexQAfR9bXVItQj0PV4wU+Ut3Ivw/ftoPVbScYJMpbx1zhV9oDqDhQ7Yn9oyn8LtTK286nbpO9xQM1JGaIOa9M720F9G9Om1ZRV990qo2dA7nxUTAsZl0fqPHJ4d0UepPaiP3KM9hfSJR6oRvNTkLvg8S0pR3AH6dtCLYhnVnvdREpZJNNtGK62TFfTga0LuwzjYfl7TF2iavEJSS3VKono8jRsLida66qetCzUbf8+jGkTf14+P0fpJK6/6Tbedu2nr3pGw6lC7kS1WUK/oWYsq6WhwSTd0pDb7E9NTsP0BO94C+sip5Ry++MYRktGj/rHT6G/+7cw6yrefWs5C/8WLz8tFIeJqPj8bO9ypbr2YtRwhwny+5YjWHbXWMinwKZmlvwIXTJvasvmrp+VqtZxCvVRHX9LfVKtv/ufimz9ey+V6X4fCD/fOutMy13IZkrb2sBm83ST+PlAtzmjhzJ9C5dCk7dQD01RN3qap/2uu/pk71RMOdd907gZre2fDh2mbPRCovz/UEwLUWlXL0KZxO1ODu2w/wsp6YPInMpekzfnkEWd8GumjzB+cncy2T3N/EhHGJiqdcF/QabnFexnpjkqa9afQsgr3ttQKkWcF+6aFvpMOKjWbC/pe0Khm0HSqD0MBbE+jbXkDFoZqJdD7YwE0B5kHE7Vi971huExS1+PvA+pxoSplEui5QtrVN7UUUlGQrFV4X8SFe6e4EqCeM2rRuu2PcWsY9p7l3x9f5BNCdKRXxegBArf9KW4LVj71fO/v/CoVqJiTrpxm3dXoMMGqgCC6aaqtDN4FelrimepJM/VJX4f1L0BbCa6oHh8oId5a4jweQcq4XiH5oRi/qdpUoLDd+bNzLlG9Iad9H1jqHBxul8vlR9uHh4fH27PvgqP6l1/OHu8O5VROM1+B7dKBAygWi44jnHfC2WfF4uPHQtg0nPYHVlIZamJ4lCPBXm+ZcftmD2donLKDnUSv9bctmTaZfrAr/ShBhT1o9pVzCdDDasHj/g0LI6khPPm0hAjojJ5fll7YnfLspZptnepqcwiik/WNweiBx+MOtindjUB5cQXoPh2Kyd6a+R1ApShjPajgdJvDfuy5N9y4sG0ONlvH6ROjAzSrVoN8uEv9GMFk4RSD5et0AlOvmBvipudJuIJumKq1o0OwaVaS4dQ/dYyxkwgFOvpN7QGLUXlAr91UfQRDiFkEgfpwY3sRB5VSU4ZTT18z0oG+YfFHGADJIRAyfuZdukAfDJP9z05qONBLDTrtzzqm8mQPmUTP9aFwq5DdwU3S4btOVcWo3odKGeNk6E1jb9UVyHgHqechIPV87SQUoT/ei/jUaSZ4cTRxoOPep3wam4MuwwhFI1JN9roJYbU9EMYNhQSTNp0lmJgVUBscNQbG2O04pgSUUlZeD4IAoslsW5TTGwoJ6oei2EufYo5x53Dg3hSqUwGoOqhfPVUdaOt1f+Aa9AbjR5l0vSdHiTo690lXjJ4eM9XwPE1Qa+Po+XbTcXjXN26cgzI0Twxa1efPFyyHdamQUz5lwIXUXE8KAQOb4doM0vMmKwe67ApPxGpdJQ3daVl/nyFDhgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkCFDhgwZMnxE+H8PAFsrp+hN4wAAAABJRU5ErkJggg=='}/>
                                                            </Grid>
                                                            <Grid item sm={8}>
                                                                <div className={'Darker BodyCopy'}> {n.name}</div>
                                                            </Grid>
                                                        </Grid>

                                                    </TableCell>

                                                    <TableCell>
                                                        <div className={'Darker BodyCopy'}> {n.calories}</div>
                                                    </TableCell>
                                                    <TableCell numeric>
                                                        <Grid container alignItems={'center'}>
                                                            <Grid item sm={1}>
                                                                <div className={' icon-barcode-16'}/>
                                                            </Grid>
                                                            <Grid item sm={11}>
                                                                {n.fat}</Grid>
                                                        </Grid>


                                                    </TableCell>
                                                    <TableCell numeric>
                                                        <Grid container alignItems={'center'}>
                                                            <Grid item sm={3}>
                                                                <div className={' icon-subtract-16'}/>


                                                            </Grid>
                                                            <Grid item sm={6}>
                                                                <div>       {n.carbs}</div>

                                                            </Grid>
                                                            <Grid item sm={3}>
                                                                <div className={' icon-add-16'}/>
                                                            </Grid>

                                                        </Grid>


                                                    </TableCell>
                                                    <TableCell numeric onClick={e => this.goDetail(e)}>

                                                        <Link to={'/products/p'} className={' icon-more-16'}/>


                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{height: 49 * emptyRows}}>
                                            <TableCell colSpan={6}/>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                        <TablePagination
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page',
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
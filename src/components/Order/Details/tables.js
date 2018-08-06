import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid,ListItem,Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import * as styleGuide from '../../../constants/styleGuide'
import WhiteButton from '../../Widget/WhiteButton'
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: styleGuide.greyInputBackGround,
        color: styleGuide.purpleText,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    table: {
        width:'100%',

    },
    row: {
        '&:nth-of-type(odd)': {
        },
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CustomizedTable(props) {
    const { classes } = props;

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <CustomTableCell>color | size</CustomTableCell>
                    <CustomTableCell numeric>SKU</CustomTableCell>
                    <CustomTableCell numeric>price</CustomTableCell>
                    <CustomTableCell numeric> </CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(n => {
                    return (
                        <TableRow className={classes.row} key={n.id}>
                            <CustomTableCell component="th" scope="row">
                                {
                                    n.name+' | '+n.calories
                                }
                            </CustomTableCell>
                            <CustomTableCell numeric contenteditable="true">
                                {n.fat}
                            </CustomTableCell >
                            <CustomTableCell numeric contenteditable="true">
                                {n.carbs}
                            </CustomTableCell>
                            <CustomTableCell >

                                <WhiteButton
                                    icon={'icon-view-16'}
                                    link={'/products/productId/variantId'}
                                    value={'Manage Variant'}
                                />


                            </CustomTableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);

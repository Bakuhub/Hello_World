import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Divider, Grid} from '@material-ui/core'
import * as  styleGuide from '../../../constants/styleGuide'
import TagsBar from '../../Widget/TagsBar'
import InputBar from '../../Widget/InputBar'

const styles = theme => ({
    root: {
        fontSize: styleGuide.XXXL,
        fontWeight: 'bold',
        color: styleGuide.purpleText,
    }
});

class Options extends React.Component {

    constructor() {
        super()
        this.state = {
            title: '',
            data:[
                {
                'optionName1':['gggg1','fffff2','qqqqqq3']
            },   {
                    'optionName3':['gggg1','fffff2','qqqqqq3']
                }
            ]
        }
    }
     combine(left, right) {

        function carry() {
            return c.reduceRight(function (r, _, i, o) {
                return r && !(o[i] = (o[i] + 1) % left.length);
            }, 1);
        }

        var c = Array.apply(null, { length: right.length }).map(function () { return 0; }),
            result = [];

        do {
            result.push(c.reduce(function (r, a, i) {
                r[left[a]].push(right[i]);
                return r;
            }, left.reduce(function (r, a) {
                r[a] = [];
                return r;
            }, {})));
        } while (!carry());
        return result;
    }
    render() {
        const {classes} = this.props;

        return (

            <Grid container alignItems={'center'}>
                <Grid item sm={4}>
                    <InputBar title={'Option Name'} placeHolder={'please name your option'}/>
                </Grid>
                <Grid item sm={8}>
                    <TagsBar title={'Option Choice'}/>
                </Grid>
                <Grid item sm={12}>
                    <br/>

                    <Divider/>
                </Grid>
                <br/>
                <br/>

            </Grid>


        );
    }
}

Options.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Options);
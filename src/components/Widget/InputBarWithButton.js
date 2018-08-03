import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import {Input,Grid} from '@material-ui/core'
import WhiteButton from './WhiteButton'
import {Link} from 'react-router-dom'

const styles = theme => ({
    inputBar: {
        backgroundColor: '#f5f5f7',
        borderRadius: '5px',
        height: '35px',
        border: '1px solid #E8E4ED',
        fontSize: '14px',
        color: styleGuide.purpleText,
        boxShadow: 'inset 0 2px 2px 0px #ededed',

    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.L,

        fontWeight: '100',
        paddingBottom:'5px',

    },
    root:{
        display:'inline-block',
        backgroundColor:'white',
        padding:'10px 20px',
        borderLeft:'1px solid'+styleGuide.greyDivider,
        maxHeight:'40px'
    },

    btnText:{
        fontSize:styleGuide.L,


    },
    icon:{
        fontSize:styleGuide.XL,
        marginRight:'5px',
    }
});

class InputBar extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            placeHolder: '',
            title: '',
            startAdornment:'',
            endAdornment:'',

        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };


    render() {
        const {classes} = this.props;

        return (
<Fragment>
    <div className={classes.title}>
        {this.props.title}
    </div>
<div>
    < Input className={classes.inputBar}

            fullWidth={true}
            placeholder={this.props.placeHolder
            }
            disableUnderline={true}
            value={this.state.name}
            onChange={this.handleChange('name')}
            startAdornment={this.props.startAdornment}
            endAdornment={   (  <Link to={this.props.link?this.props.link:'#'} className={classes.root}>
                <Grid container alignItems={'center'}>
                    <span className={classes.icon + ' ' + this.props.icon}/>
                    <span className={classes.btnText}>
                                                {this.props.value}

                    </span>
                    <span className={classes.icon + ' ' + this.props.icon2}/>
                </Grid>
            </Link>)
            }

    />


</div>
</Fragment>

        );
    }
}

InputBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputBar);
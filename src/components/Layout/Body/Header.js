import React from 'react';
import * as styleGuide from '../../../constants/styleGuide'
import {Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


const styles = theme => ({
    root: {
      paddingBottom:'30px',
        marginBottom:'30px',
        borderBottom:'1px solid'+styleGuide.greyDivider,
        width:'100%',
    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.XL,

        fontWeight: 'lighter',
        paddingBottom: styleGuide.M,
    },
    controlGroup1:{
    },
    controlGroup2:{

    },
    rightControl:{
        display:'inline-block',

    },
    leftControl:{
        display:'inline-block',
  },
    backArrow:{
    },
toolBar:{

}


});

class WhiteButton extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            placeHolder: '',

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
          <div className={classes.root}>
          <div className={classes.backArrow}>
              {this.props.backArrow}
          </div>
              <Grid container  justify={'space-between'} alignItems={'center'}className={classes.controlGroup1}>
                  <Grid item className={classes.title}>
                      {this.props.title}
                  </Grid>

                  <Grid item  className={classes.rightControl}>
                      {this.props.titleButton}
                  </Grid>

              </Grid>

              <Grid container justify={'space-between'} alignItems={'center'} className={classes.controlGroup2}>
                  <Grid item  className={classes.leftControl}>
                      {this.props.leftControl}

                  </Grid>
                  <Grid item  className={classes.rightControl}>
                      {this.props.rightControl}
                  </Grid>
              </Grid>





              <div className={classes.toolBar}>
                  {this.props.toolBar}
              </div>
          </div>
        )
    }
}

WhiteButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhiteButton);
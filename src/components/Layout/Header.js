import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Grid,Input,Avatar} from '@material-ui/core'

const styles = {
    root: {
    },
};

class Header extends React.Component {

    render() {
        const {classes} = this.props;

        return (
                <Grid container alignItems={'center'}
                      style={{margin:"10px",
                          padding:'10px',
                          width:'100%',
                          borderBottom:'1px solid #C7C6CD'}}>
                    <Grid item sm={2}>
                      <Grid container alignItems={'center'}>
                          <Grid item sm ={1}/>
                          <Grid item sm = {1}>
                              <div className={'icon-search-24'} style={{fontSize:"20px"}}/>
                          </Grid>
                          <Grid item sm ={1}/>

                          <Grid item sm = {9}>
                              <Input placeholder={'Looking for anything?'}
                                     disableUnderline={true}
                              style ={{color:'#C7C6CD',}}/>
                          </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sm={7}/>
                    <Grid item sm={3}>
                        <Grid container alignItems={'center'}>
                            <Grid item sm={4}>
                                <Grid container alignItems={'center'}>
                                    <Grid item sm = {10}>
                                       </Grid>
                                    <Grid item sm = {1}>
                                <div className={'icon-bell-24'} style={{fontSize:"25px" ,
                                    padding:'15px',
                                    margin:'-20px',
                                    borderRight:'1px solid #C7C6CD'}}/>
                                    </Grid></Grid>
                            </Grid>
                            <Grid item sm={8}>
                                <Grid container alignItems={'center'}>
                                    <Grid item sm ={3}/>
                                    <Grid item sm={2}>
                                        <Avatar
                                            style={{width:'25px',height:'25px'}}
                                        src ="data:image/jpeg;base64,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"/>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <div className={'Dark'}> user name</div>
                                    </Grid>
                                    <Grid item sm={1} alignContent={'right'}>
                                        <div className={'icon-down-16'} style={{fontSize:'12px'}}/>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

        )

    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)
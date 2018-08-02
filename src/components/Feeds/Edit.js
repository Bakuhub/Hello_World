import React from 'react'
import {Divider, Grid, ListItem} from '@material-ui/core'
import SubTitle from '../Widget/SubTitle'
import BackArrow from '../Widget/BackArrow'
import {Link} from 'react-router-dom'
import BlogSection from './Blogs/Sections/Overview'
import * as styleGuide from "../../constants/styleGuide";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        padding: '40px'
    },
    title: {
        fontSize: styleGuide.XXL,
        fontWeight: 'bold',
    },
    body: {
        border: styleGuide.regBorder,
        padding: '0px 30px',
        marginTop: '30px',

    },
    toolBar: {
        border: styleGuide.regBorder,
    },
    whiteButton: {
        border: styleGuide.regBorder,
        fontSize: styleGuide.M,
        height: '35px',
        padding: '0 10%',

    },
    purpleButton: {
        backgroundColor: styleGuide.purpleText,
        border: styleGuide.regBorder,
        fontSize: styleGuide.M,
        color: 'white',
        height: '35px',

        padding: '0 10%',
    }


});

class FeedsEdit extends React.Component {
    constructor() {
        super()
        this.state = {}

    }


    render() {
        const {classes} = this.props;

        return (
            <Grid container alignItems={'center'} className={classes.root}>
                <Grid item sm={12}>

                    <BackArrow title={'back to blog list'} link={'/feeds'}/>


                </Grid>
                <Grid item sm={9}>
                    <SubTitle title={'Create a blog post'}/></Grid>
                <Grid item sm={3}>
                    <Grid container spacing={16} alignItems={'center'}>
                        <Grid item>
                            <ListItem button to={'/feeds/new'} className={classes.purpleButton}>
                                <span className={'icon-view-16'}/>
                                <span style={{color: 'white'}}> Preview Post</span>
                            </ListItem>
                        </Grid>
                        <Grid item>
                            <ListItem button to={'/feeds/new'} className={classes.whiteButton}>
                               <span>
                                   Publish Article
                               </span>

                            </ListItem>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item sm={12}>
                    <Divider/>
                </Grid>
                <Grid item sm={2}/>
                <Grid item sm={8}>
                    <Grid container alignItems={'center'} justify={'center'} className={classes.body}>

                        <Grid item sm={9}>
                            <div className={classes.title}>
                                Products that will make your life easier
                            </div>
                        </Grid>
                        <Grid item sm={3}>
                            <Grid container>
                                <Grid item sm={10}>
                                    <ListItem button to={'/feeds/new'} className={classes.purpleButton}>Save
                                        Changes...</ListItem>
                                </Grid>
                                <Grid item sm={2}>
                                    <Link to={'/feeds'} className={' icon-more-16'}/>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item sm={12}>
                            <Grid container>
                                <Grid item sm={12}>
                                    <div className={classes.toolBar}>
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                      <span className={'icon-upload-24'} />
                                    </div>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item sm={12}>
                            <Grid container>
                                <Grid item sm={12}>
                                    <BlogSection/>
                                </Grid><Grid item sm={12}>
                                <BlogSection/>
                            </Grid><Grid item sm={12}>
                                <BlogSection/>
                            </Grid><Grid item sm={12}>
                                <BlogSection/>
                            </Grid><Grid item sm={12}>
                                <BlogSection/>
                            </Grid>
                                <Grid item sm={12}>
                                    <ListItem
                                        button
                                    >
                                        <span className={'icon-add-16'}/>
                                        <span> Add a new section to this blog...</span>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item sm={2}/>

            </Grid>);
    }
}

FeedsEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedsEdit);
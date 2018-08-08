import React from 'react'
import {Grid, ListItem} from '@material-ui/core'
import SubTitle from '../Widget/SubTitle'
import BackArrow from '../Widget/BackArrow'
import {Link} from 'react-router-dom'
import BlogSection from './Blogs/Sections/Overview'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import PurpleButton from '../Widget/PurpleButton'
import WhiteButton from '../Widget/WhiteButton'
import Header from '../Layout/Body/Header'
import ToolBar from '../Widget/FeedsToolBar'
const styles = theme => ({
    root: {
        padding: '40px'
    },
    title: {
        fontSize: '20px',
        fontFamily: 'ocsSemiBold',
        borderBottom: '0',
        border: 'none',
        background: 'none',
        minWidth: '340px',

        '&::placeholder': {
            fontSize: '20px',
        }
    },
    content: {
        backgroundColor: 'white',
    },
    headerBar: {
        padding: '45px 30px 30px',
    },
    toolBar: {
        background: '#efefef',
        padding: '10px 30px',
        borderTop: '1px solid #dfdfdf',
        borderBottom: '1px solid #dfdfdf',
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
            <Grid container alignItems={'center'} justify={'center'} className={classes.root}>
                <Header
                    backArrow={(
                        <BackArrow title={'back to blog list'} link={'/feeds'}/>

                    )}
                    title={(
                        <SubTitle title={'Create a blog post'}/>

                    )}
                    titleButton={(
                        <Grid container
                              justify={'flex-end'}
                              spacing={16} alignItems={'center'}>
                            <Grid item>
                                <PurpleButton
                                    link={'/feeds/new'}
                                    icon={'icon-view-16'}
                                    value={'preview post'}
                                />
                            </Grid>
                            <Grid item>

                                <WhiteButton
                                    link={'/feeds'}
                                    value={'Publish Article'}

                                />
                            </Grid>
                        </Grid>
                    )}


                />


                <Grid item sm={10} className={classes.content}>


                    <Grid container alignItems={'center'} justify={'center'}>
                        <Grid item sm={12} container justify={'space-between'} className={classes.headerBar}>
                            <Grid item>
                                <input
                                    className={classes.title}
                                    placeholder={'What is the title of this blog post?'}
                                />
                            </Grid>

                            <Grid item>
                                <Grid container>

                                    <Link to={'/feeds'} className={' icon-more-16'}/>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item sm={12}>
                            <Grid container>
                                <Grid item sm={12}>
                                    <div className={classes.toolBar}>
                                   <ToolBar/>
                                    </div>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item sm={12}>
                            <Grid container>
                                <Grid item sm={12}>
                                    <BlogSection />
                                </Grid>
                                <Grid item sm={12}>
                                    <BlogSection/>
                                </Grid>
                                <Grid item sm={12}>
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

            </Grid>);
    }
}

FeedsEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedsEdit);
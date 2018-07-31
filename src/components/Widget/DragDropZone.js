import React from 'react'
import Dropzone from 'react-dropzone'
import {Grid, withStyles} from '@material-ui/core'
import PropTypes from "prop-types";
import * as styleGuide from "../../constants/styleGuide";

const styles = theme => ({
    dropZone: {
        width: '100%',
        padding:'20px 10px 20px 10px',
        backgroundColor: styleGuide.greyInputBackGround,
    },
    purple: {
        color: styleGuide.purpleButton,
        fontSize: styleGuide.M,
    },
});


class DragDropZone extends React.Component {
    constructor() {
        super()
        this.state = {
            accepted: [],
            rejected: []
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Dropzone
                accept="image/jpeg, image/png"
                onDrop={(accepted, rejected) => {
                    this.setState({accepted, rejected});
                }}
                className={classes.dropZone}
            >
                <Grid container
                      direction={'column'}
                      justify={'center'}
                      alignItems={'center'}>
                    <Grid item>
                        <div className={'icon-image-24'} style={ {color:styleGuide.purpleButton}}/>
                    </Grid>
                    <Grid item>
                        <div>
                            Drop an image here
                        </div>

                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <div>
                                    or  &nbsp;
                                </div>
                            </Grid>
                            <Grid item>

                                <div className={classes.purple}>
                                    browse
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Dropzone>

        );
    }
}


DragDropZone.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DragDropZone);
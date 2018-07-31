import React from 'react'
import Dropzone from 'react-dropzone'
import {withStyles} from '@material-ui/core'
import PropTypes from "prop-types";
import * as styleGuide from "../../constants/styleGuide";

const styles = theme => ({
    root: {
        padding: '30px'
    },
    title: {
        padding: ' 0 20px'

    },
    saveCancelButton: {
        paddingLeft: '60px',
    },
    form: {
        boxShadow: '-2px 2px 0px 0px' + styleGuide.greyPaperShadow,
        borderRadius: '5px',
        border: '1px solid #E8E4ED',
        padding: '30px 40px 50px 40px'
    }
    ,
    childInput: {
        padding: '60px'

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
        return (
            <section>
                <div className="dropzone">
                    <Dropzone
                        accept="image/jpeg, image/png"
                        onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
                    >
                        <p>Try dropping some files here, or click to select files to upload.</p>
                        <p>Only *.jpeg and *.png images will be accepted</p>
                    </Dropzone>
                </div>
                <aside>
                    <h2>Accepted files</h2>
                    <ul>
                        {
                            this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                    <h2>Rejected files</h2>
                    <ul>
                        {
                            this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>
            </section>
        );
    }
}


DragDropZone.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DragDropZone);
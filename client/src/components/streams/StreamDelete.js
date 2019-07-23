import React from 'react';
import Modal from '../Modal'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from '../../actions'
import history from '../../history'

class StreamDelete extends React.Component {
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        const { id } = this.props.match.params
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui red basic cancel inverted button">Bin it</button>
                <Link to="/" className="ui green ok inverted button">Cancgfgnhel</Link>
            </React.Fragment>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        
        return (
            <div>
                <p>Are you sure you want to delete this stream:</p>
                <p><strong>{this.props.stream.title}</strong></p>
            </div>
        ) 
    }

    render() {

        return (
            <Modal 
                onDismiss={() => history.push('/')} 
                title="Delete Stream" 
                message={this.renderContent()}
                actions={this.renderActions()} 
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
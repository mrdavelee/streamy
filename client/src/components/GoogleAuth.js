import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '819019299259-r5p171ntke8te3r1c32urqlr0osq5fdk.apps.googleusercontent.com', 
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn: this.auth.isSignedIn.get() })
            })
        })
    }

    render() {
        return (
            <div>g auth</div>
        ) 
    }
}

export default GoogleAuth
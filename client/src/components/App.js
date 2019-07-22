import React from 'react';
import {Router, Route } from 'react-router-dom'
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import history from '../history'


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/new" component={StreamCreate}/>
                    <Route path="/edit/:id" component={StreamEdit}/>
                    <Route path="/delete/:id" component={StreamDelete}/>
                    <Route path="/show/:id" component={StreamShow}/>
                </div>
            </Router>
        </div>
    )
}

export default App 
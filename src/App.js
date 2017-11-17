import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//components
import Header from './components/headercomponent/header'
import Footer from './components/footercomponent/footer'
import Nav from './components/navigationcomponent/nav'
import HomePage from './components/pages/homePage'
import Connect from './components/pages/Connect'
import AboutVirat from './components/pages/AboutVirat'

//includes
import './Assets/css/default.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <Header/>

                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/Connect' component={Connect}/>
                    <Route exact path='/AboutVirat' component={AboutVirat}/>

                    <Nav/>

                    <Footer/>

                </div>
            </Router>
        );
    }
}

export default App;
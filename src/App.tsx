  
import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import HomePage from './components/main/HomePage';
import FoodAdvisorsContainer from '../containers/FoodAdvisorsContainer'
import TrackerHome from './trackers/TrackerHome'
import JournalHome from './journal/JournalHome'
import JournalContainer from '../containers/JournalContainer'
import ResourceHome from './resources/ResourceHome'
import ResourcesContainer from '../containers/ResourcesContainer'
import CommunityHome from './community/CommunityHome'
import BottomNavbar from './BottomNavbar'
import { Layout } from './components/main/Layout'

class App extends Component {
  render(){
    return (
      <>
        <TopNavbar />
        <Layout>
          <Switch>
            {
              <Route 
                exact path='/' 
                component={Advisor}
              />
            }
            {
              <Route 
                exact path='/tracker_home' 
                component={TrackerHome}
              />
            }
            {
              <Route 
                exact path='/journal_home' 
                component={JournalHome}
              />
            }
            {
              <Route 
                exact path='/resource_home' 
                component={ResourceHome}
              />
            }
            {
              <Route 
                exact path='/community_home' 
                component={CommunityHome}
              />
            }
          </Switch>

          <FoodAdvisorsContainer />
          
          <JournalContainer />
          
          <ResourcesContainer />

        </Layout>
        <BottomNavbar />
      </>
    )
  }
}
export default App
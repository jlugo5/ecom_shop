import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-andsing-up/sign-in-and-sing-up.component'
import Contact from './pages/contact/contact.component'
import React from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import CheckOutPage from './pages/checkout/checkout.component'


class App extends React.Component {

unsubcribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props


    this.unsubcribeFromAuth = auth.onAuthStateChanged( async user => {
      
      if (user){
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(snapshot => {
          const user = {
              id: snapshot.id,
              ...snapshot.data()
          }
          setCurrentUser(user)
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }
  
  render(){
    const {currentUser} = this.props
    return (
      <div>
        <Header />
         <Switch>
           <Route exact path='/' component={HomePage} />
           <Route path='/shop' component={ShopPage} />
           <Route path='/contact' component={Contact} />
           <Route path='/signin' 
            render = {
              () => currentUser ?
              (<Redirect to='/'/>) : (<SignInAndSignUp/>)
            }
           />
           <Route exact path='/checkout' component={CheckOutPage} />
         </Switch>
      </div>
    )
  }
}


// returns currentUser
const mapStateToProps = ({user}) => (
  {
    currentUser: user.currentUser
  }
)

// returns setCurrentUser
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
  
)

// connect will do some function the return will be send to App and App will used it as props
// Note:
// Connect is HOC - High Order Component
// It take two parameters
//    mapStateToProps => Subscribe the data from the store
//    mapDispatchToProps => Dispatching Actions and Payload(Data) to the reducer
//       => Takes object as a patameter with multiple actions can be dispatched
//       => user => dispattch(serCurrentUser(user))

// HOC - higher-order component
// connect get two props
// one from mapStoreToProps - currentUser
// one from mapDispatchToProps - setCurrentUser
// then it will pass this two props to component App
// connect( mapStateToProps, mapDispatchToProps )
export default connect(mapStateToProps, mapDispatchToProps)(App);

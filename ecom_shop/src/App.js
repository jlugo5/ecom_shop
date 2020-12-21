import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-andsing-up/sign-in-and-sing-up.component'
import Contact from './pages/contact/contact.component'
import React from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

// const HatsPage = (props) =>{ 
//   return(
//     <h1>This is Hats Page</h1>
//   )
// }

// const TopicList = (props) => {
//   return(
//     <div>
//       <h1>This is a Topic List Page</h1>
//       <Link to='/hats'>Hats</Link>
//     </div>
//   )
// }

// const TopicDetailPage = (props) => {
//   return (
//     <div>This is a Topic Detail Page</div>
//   )
// }


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){



    this.unsubcribeFromAuth = auth.onAuthStateChanged( async user => {
      
      if (user){
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
        console.log(this.state)
      }

      this.setState({currentUser:user})
      console.log(this.state)
    })
    
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }
  
  render(){
    const {currentUser} = this.state
    return (
      <div>
        <Header currentUser = {currentUser} />
         <Switch>
           <Route exact path='/' component={HomePage} />
           <Route exact path='/shop' component={ShopPage} />
           <Route exact path='/contact' component={Contact} />
           <Route exact path='/signin' component={SignInAndSignUp} />
         </Switch>
      </div>
    )
  }
}

export default App;

import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'


import './App.css'
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


function App() {
  return (
    <div>
      <Header />
       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/shop' component={ShopPage} />
         {/* <Route exact path='/hats' component={HatsPage} />
         <Route exact path='/blog/awds/topics' component={TopicList} />
         <Route exact path='/blog/awds/topics/:topicId' component={TopicDetailPage} /> */}
       </Switch>
    </div>
    
  );
}

export default App;

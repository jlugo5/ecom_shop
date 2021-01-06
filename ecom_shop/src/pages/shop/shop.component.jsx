import CollectionOverview from '../../components/collection-overview/collection-overview.component'

import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'



const ShopPage = (props) => {
    console.log(props.match.path)
    return(
        <div className='shop-page'>
            <Route exact path={`${props.match.path}`} component={CollectionOverview} />
            {/* Using the ':' will tell the browser that is a parameter not a url */}
            <Route exact path={`${props.match.path}/:collectionId`} component={CollectionPage} />
        </div>)
}

export default ShopPage
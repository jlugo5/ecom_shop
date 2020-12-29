import React from 'react'

//import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux'
import { selectShopItems } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'


class ShopPage extends React.Component{
    
    render(){
        const {collections} = this.props
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

const mapSateToProps = createStructuredSelector(
    {
        collections: selectShopItems
    }
)

export default connect(mapSateToProps,null)(ShopPage)
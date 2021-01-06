import './collection-overview.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ({collections}) => (
    <div>
        {
            collections.map( ({id,...otherCollectionPorps}) => (
                <CollectionPreview key={id} {...otherCollectionPorps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionForPreview
    }
)

export default connect(mapStateToProps,null)(CollectionOverview)
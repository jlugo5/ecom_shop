import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
            .filter((item,idx) => idx < 4)
            .map(item =>
                <CollectionItem  Key={item.id} item={item}/>
            )}
        </div>
    </div>
)

export default CollectionPreview
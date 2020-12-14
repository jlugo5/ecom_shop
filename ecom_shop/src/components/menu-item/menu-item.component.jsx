import './menu-item.styles.scss'


const MenuItem = (props) => (
    <div className={`${props.size} menu-item`}>
        <div className="background-image" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
        <div className='content'>
            <div className='title'>{props.title}</div>
            <span className='subtitle'>Shop</span>
        </div>
    </div>
)

export default MenuItem
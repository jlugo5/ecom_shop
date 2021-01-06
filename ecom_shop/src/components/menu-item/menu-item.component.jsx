import './menu-item.styles.scss'

import {withRouter} from 'react-router-dom'


const MenuItem = ({title,imageUrl,size, history,linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>Shop</span>
        </div>
    </div>
)

export default withRouter(MenuItem)
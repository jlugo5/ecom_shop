
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../redux/directory/directory.selectors'
import { connect } from 'react-redux'

const Directory = ({sections}) => (
    <div className='directory-menu'>
    {
        sections.map(({id, title, imageUrl, size, linkUrl}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size = {size} linkUrl={linkUrl} />
        
        ))
    }
    
    </div>
)

const mapSateToProps = () => createStructuredSelector(
    {
        sections: selectDirectorySection
    }
)

export default connect(mapSateToProps,null)(Directory)
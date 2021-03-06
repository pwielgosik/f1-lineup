import React from 'react';
import ListItem from './ListItem';
import Spinner from '../../../hooks/Spinner';

const List = ({items, handleListClick, type, flagUrls, isActive}) => {

    if (type === 'drivers') {
        return (
            <ul className='ul'>
                {items.map((item, index) => 
                    <ListItem item={item} index={index} handleListClick={handleListClick} key={item.no} type={type} />
                )}            
            </ul>
        )
    } else if (type === 'calendar') {
        return (
            <ul className='ul ul-calendar'>
                {items.map((item, index) => 
                    <ListItem item={item} index={index} handleListClick={handleListClick} key={item.no} type={type} />
                )}            
            </ul>
        )
    } else if (type === 'legacy') {
        return (
            <ul className='ul legacy__ul'>
                <Spinner isActive={isActive}/>
                {items.map((item, index) =>{
                        return(
                            <ListItem item={item} index={index} key={item.driverId} type={type} flagUrls={flagUrls} />
                        )
                    }
                )}            
            </ul>
        )
    } else return null;

}

export default List;
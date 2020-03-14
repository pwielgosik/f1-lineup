import React from 'react';
import ListItem from './ListItem';

const List = ({items, handleListClick, type}) => {

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
            <ul className='ul ul-legacy'>
                {items.map((item, index) => 
                    <ListItem item={item} index={index} key={item.driverId} type={type} />
                )}            
            </ul>
        )
    } else return null;

}

export default List;
import React from 'react';

function Footer({filterItems, filterField, count, showCurrentList}) {
  return (
    <div className="footer">
        <span className="todo-count">
          <strong> {count}</strong>
          {'items left'}</span>
      <ul className="footer__filter">
        <li>
          <a href='#/all'
             className={showCurrentList === filterField.all ? 'selected' : ''}
             onClick={() => filterItems(filterField.all)}
          > All </a>
        </li>
        <li>
          <a href='#/active'
             className={showCurrentList === filterField.active ? 'selected' : ''}
             onClick={() => filterItems(filterField.active)}
          > Active </a>
        </li>
        <li>
          <a href='#/completed'
             className={showCurrentList === filterField.completed ? 'selected' : ''}
             onClick={() => filterItems(filterField.completed)}
          > Completed </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;
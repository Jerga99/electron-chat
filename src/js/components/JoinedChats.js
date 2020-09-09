
import React from 'react';
import ChatSearch from './ChatSearch';

export default function JoinedChats() {
  return (
    <div className="list-container">
      <ChatSearch />
      <ul className="items">
        <li
          onClick={() => {}}
          className="item">
          <div className="item-status">
            <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
          <span className="name mr-2">Some Chat 1</span>
          </p>
        </li>
        <li
          onClick={() => {}}
          className="item">
          <div className="item-status">
            <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
          <span className="name mr-2">Some Chat 2</span>
          </p>
        </li>
        <li
          onClick={() => {}}
          className="item">
          <div className="item-status">
            <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
          <span className="name mr-2">Some Chat 3</span>
          </p>
        </li>
        <li
          onClick={() => {}}
          className="item">
          <div className="item-status">
            <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
          <span className="name mr-2">Some Chat 4</span>
          </p>
        </li>
      </ul>
    </div>
  )
}

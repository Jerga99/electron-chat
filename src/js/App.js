
import React from 'react';

export default function App() {
  return (
    <div className='content-wrapper'>
      {/* ########## NAVBAR START ############ */}
      <div className="chat-navbar">
        <nav className="chat-navbar-inner">
          <div className="chat-navbar-inner-left">
            <a href="/" className="btn btn-outline-success ml-2">Settings</a>
          </div>
          <div className="chat-navbar-inner-right">
            <span className="logged-in-user">Hi User</span>
            <button
              onClick={() => {}}
              className="btn btn-sm btn-outline-danger ml-2">Logout</button>
            <button
              onClick={() => {}}
              className="btn btn-sm btn-outline-success ml-2">Login</button>
          </div>
        </nav>
      </div>
      {/* ########## NAVBAR END ############ */}
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          {/* ########## CHAT LIST START ############ */}
          <div className="list-container">
            <div className="chat-search-box">
              <div className="input-group">
                <input className="form-control" placeholder="Search" />
              </div>
            </div>
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
          {/* ########## CHAT LIST END ############ */}
        </div>
        <div className="col-9 fh">
          {/* ########## CHAT NAME CONTAINER START ############ */}
          <div className="chat-name-container">
            <span className="name">Choose your channel</span>
            <a
              href="/"
              className="btn btn-primary btn-sm back-button">Back</a>
          </div>
          {/* ########## CHAT NAME CONTAINER END ############ */}
          <div className="container-fluid">
            {/* ########## CHAT LIST START ############ */}
            <div className="row mt-3">
            { false &&
              <div className="container-fluid">
                <div className="alert alert-warning">No chats to join :(</div>
              </div> }
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Chat 1</h5>
                    <p className="card-text">Some Chat 1 Description</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Join Chat</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Chat 2</h5>
                    <p className="card-text">Some Chat 2 Description</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Join Chat</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Chat 3</h5>
                    <p className="card-text">Some Chat 3 Description</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Join Chat</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Chat 4</h5>
                    <p className="card-text">Some Chat 4 Description</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Join Chat</button>
                  </div>
                </div>
              </div>
            </div>
            {/* ########## CHAT LIST END ############ */}
          </div>
        </div>
      </div>
    </div>
  )
}

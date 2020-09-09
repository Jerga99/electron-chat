export default function Resources() {

  // ########## SETTINGS START ############
  return (
    <div className="centered-view">
      <div className="centered-container">
        <form className="centered-container-form">
          <div className="header">Adjust application settings</div>
          <button type="button" onClick={notify}>Notify Me</button>
          <div className="form-container">
            <div className="my-3">
              <div className="form-check">
                <input
                  name="isDarkTheme"
                  type="checkbox"
                  className="form-check-input" />
                <label className="form-check-label">Dark Theme</label>
              </div>
              <div className="form-check">
                <input
                  name="showNotifications"
                  type="checkbox"
                  className="form-check-input" />
                <label className="form-check-label">Enable Notification</label>
              </div>
              <div className="form-check">
                <input
                  name="playSound"
                  type="checkbox"
                  className="form-check-input" />
                <label className="form-check-label">Sound notification</label>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {}}
              className="btn btn-danger">
              Quit App
            </button>
          </div>
        </form>
      </div>
    </div>
  )
  // ########## SETTINGS END ############

  // ########## CHAT VIEW START ############
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
          {/* ########## USER LIST START ############ */}
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
                  <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
                  <span className="status online"></span>
                </div>
                <p className="name-time">
                <span className="name mr-2">Some User 1</span>
                </p>
              </li>
              <li
                onClick={() => {}}
                className="item">
                <div className="item-status">
                  <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
                  <span className="status online"></span>
                </div>
                <p className="name-time">
                <span className="name mr-2">Some User 2</span>
                </p>
              </li>
              <li
                onClick={() => {}}
                className="item">
                <div className="item-status">
                  <img src="https://i.dlpng.com/static/png/7105396_preview.png" alt="Retail Admin" />
                  <span className="status online"></span>
                </div>
                <p className="name-time">
                <span className="name mr-2">Some User 3</span>
                </p>
              </li>
              <li
                onClick={() => {}}
                className="item">
                <div className="item-status">
                  <img src="https://i.dlpng.com/static/png/7105396_preview.png" alt="Retail Admin" />
                  <span className="status online"></span>
                </div>
                <p className="name-time">
                <span className="name mr-2">Some User 4</span>
                </p>
              </li>
            </ul>
          </div>
          {/* ########## USER LIST END ############ */}
        </div>
        <div className="col-9 fh">
          {/* ########## CHAT NAME CONTAINER START ############ */}
          <div className="chat-name-container">
            <span className="name">Chat 1</span>
            <a
              href="/"
              className="btn btn-primary btn-sm back-button">Back</a>
          </div>
          {/* ########## CHAT NAME CONTAINER END ############ */}
          <div className="chat-container">
            <ul className="chat-box chatContainerScroll">
              <li
                className="chat-left">
                <div className="chat-avatar">
                  <img
                    src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
                    alt="Retail Admin" />
                  <div className="chat-name">Test User 1</div>
                </div>
                <div className="chat-text-wrapper">
                  <span className="chat-text">Some message 1</span>
                  <span className="chat-spacer"></span>
                  <div className="chat-hour">5h ago</div>
                </div>
              </li>
              <li
                className="chat-right">
                <div className="chat-avatar">
                  <img
                    src="https://i.dlpng.com/static/png/7105396_preview.png"
                    alt="Retail Admin" />
                  <div className="chat-name">Test User 2</div>
                </div>
                <div className="chat-text-wrapper">
                  <span className="chat-text">Some message 2</span>
                  <span className="chat-spacer"></span>
                  <div className="chat-hour">5h ago</div>
                </div>
              </li>
              <li
                className="chat-left">
                <div className="chat-avatar">
                  <img
                    src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
                    alt="Retail Admin" />
                  <div className="chat-name">Test User 3</div>
                </div>
                <div className="chat-text-wrapper">
                  <span className="chat-text">Some message 3</span>
                  <span className="chat-spacer"></span>
                  <div className="chat-hour">5h ago</div>
                </div>
              </li>
              <li
                className="chat-right">
                <div className="chat-avatar">
                  <img
                    src="https://i.dlpng.com/static/png/7105396_preview.png"
                    alt="Retail Admin" />
                  <div className="chat-name">Test User 4</div>
                </div>
                <div className="chat-text-wrapper">
                  <span className="chat-text">Some message 4</span>
                  <span className="chat-spacer"></span>
                  <div className="chat-hour">5h ago</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
  // ########## CHAT VIEW END ############


  // ########## REGISTER VIEW START ############
  return (
    <div className="centered-view">
      <div className="centered-container">
        <form onSubmit={() => {}} className="centered-container-form">
        <div className="header">Create an account</div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="text"
              name="avatar"
              className="form-control"
              id="avatar"
              aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password" />
          </div>
          { false && <div className="alert alert-danger small">Some Error</div>}
          <button type="submit" className="btn btn-outline-primary">Register</button>
        </div>
      </form>
      <small className="form-text text-muted mt-2">Not registered yet?
        <span
          onClick={() => {}}
          className="btn-link ml-2">Register</span>
        </small>
      </div>
    </div>
  )
  // ########## REGISTER VIEW END ############

  // ########## LOGIN VIEW START ############
  return (
    <div className="centered-view">
      <div className="centered-container">
        <form onSubmit={() => {}} className="centered-container-form">
          <div className="header">Welcome here!</div>
          <div className="subheader">Login and chat with other people!</div>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password" />
            </div>
            { false && <div className="alert alert-danger small">Some error</div>}
            <button type="submit" className="btn btn-outline-primary">Login</button>
          </div>
        </form>
        <small className="form-text text-muted mt-2">Already registered?
          <span
            onClick={() => {}}
            className="btn-link ml-2">Login</span></small>
      </div>
    </div>
  )
  // ########## LOGIN VIEW END ############

  // ########## HOME VIEW START ############
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
  // ########## HOME VIEW END ############
}



// {/* ########## USER LIST START ############ */}
// {/* <div className="list-container">
// <div className="chat-search-box">
//   <div className="input-group">
//     <input className="form-control" placeholder="Search" />
//   </div>
// </div>
// <ul className="items">
//   <li key={user.id} className="item">
//     <div className="item-status">
//       <img src={user.avatar} alt="Retail Admin" />
//       <span className='status online'></span>
//     </div>
//     <p className="name-time">
//       <span className="name mr-2">{user.username}</span>
//     </p>
//   </li>
// </ul>
// </div> */}
// {/* ########## USER LIST END ############ */}


import React from 'react';


export default function AvailableChatsList() {
  return (
    <div className="container-fluid">
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
    </div>
  )
}

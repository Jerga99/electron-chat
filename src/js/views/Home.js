

import React from 'react';
import Navbar from '../components/Navbar';
import JoinedChats from '../components/JoinedChats';
import AvailableChats from '../components/AvailableChats';
import ViewTitle from '../components/shared/ViewTitle';

export default function Home() {

  return (
    <div className='content-wrapper'>
      <Navbar />
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinedChats />
        </div>
        <div className="col-9 fh">
          <ViewTitle />
          <AvailableChats />
        </div>
      </div>
    </div>
  )
}

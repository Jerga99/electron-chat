

import React from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';


export default function LoadingView({message = 'Just one moment please...'}) {
  const isDarkTheme = useSelector(({settings}) => settings.isDarkTheme);

  return (
    <div className={isDarkTheme ? 'dark' : 'light'}>
      <div className="loading-screen">
        <div className="loading-view">
          <div className="loading-view-container">
            <div className="mb-3">{message}</div>
            <Loader />
          </div>
        </div>
      </div>
    </div>
  )
}

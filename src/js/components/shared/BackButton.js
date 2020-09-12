

import React from 'react';
import { useHistory } from 'react-router-dom';

export default function BackButton() {
  const history = useHistory();

  return (
    <button
      onClick={() => history.goBack()}
      className="btn btn-outline-primary">Back
    </button>
  )
}

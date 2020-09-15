
import React, { useState } from 'react';
import { createTimestamp } from '../utils/time';

export default function Messenger({onSubmit}) {
  const [value, setValue] = useState('');

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
      setValue('');
    }
  }

  const sendMessage = () => {
    if (value.trim() === '') { return; }

    const message = {
      content: value.trim(),
      timestamp: createTimestamp()
    }

    onSubmit(message);
  }

  return (
    <div className="chat-input form-group mt-3 mb-0">
      <textarea
        onChange={e => setValue(e.target.value)}
        onKeyPress={onKeyPress}
        value={value}
        className="form-control"
        row="3"
        placeholder="Type your message here..">
      </textarea>
    </div>
  )
}

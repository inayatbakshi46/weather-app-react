import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-6xl"><FontAwesomeIcon icon={faSpinner} spinPulse /></div>
    </div>
  );
}

export default Loading;
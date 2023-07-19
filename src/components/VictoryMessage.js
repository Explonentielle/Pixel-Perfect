import React from 'react';

const VictoryMessage = ({ itsWin }) => {
  if (itsWin) {
    return <div className='message'>Victoire</div>;
  }
  return null;
};

export default VictoryMessage;
import React, { useState } from 'react';
import ToggleSwitch from '../index';
import Heading from '../../Heading';

const ToggleSwitchExample = () => {
  const [savedData, setSavedData] = useState(false);

  // ----------------------------------------------------------------

  return (
    <>
      <Heading variation='h4'>Toggle Switch</Heading>
      <ToggleSwitch
        savedData={savedData}
        color='grey'
        onChange={(event) => {
          setSavedData(event.target.checked);
        }}
      />
    </>
  );
};

export default ToggleSwitchExample;

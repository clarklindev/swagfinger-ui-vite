import React, { useState } from 'react';
import Checkbox from '../index';
import Heading from '../../Heading';

const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation='h4'>Checkbox</Heading>
      <Checkbox
        checked={savedData}
        name='checkbox'
        label='label'
        onChange={(event) => {
          setSavedData(event.target.checked);
        }}
      />
    </>
  );
};

export default CheckboxExample;

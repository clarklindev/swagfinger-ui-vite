import React, { useState } from 'react';
import CheckboxGroup from '../index';
import Checkbox from '../../Checkbox';
import LabelSomething from '../../LabelSomething';

const CheckboxGroupIndeterminateExample = () => {
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
  ];

  const [savedData, updateSavedData] = useState(
    Array(options.length).fill(false)
  );

  const onChange = (index, newValue) => {
    const newValues = [...savedData];
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
    <div className='flex flex-col justify-items-start items-start space-y-10'>
      <Checkbox
        checked={savedData.every((item) => item === true)}
        indeterminate={
          !savedData.every((item) => item === true) &&
          savedData.some((item) => item === true)
        }
        name='checkbox'
        label='label'
        iconSize='20px'
        onChange={(event) => {
          //update group
          updateSavedData(savedData.slice().fill(event.target.checked));
        }}
      />

      <CheckboxGroup direction='column' spacing='20px'>
        {options.map((each, index) => {
          return (
            <LabelSomething
              key={'CheckboxGroup_Checkbox' + index}
              label={each.label}
              labelPosition='right'
              gap='10px'
              something={
                <Checkbox
                  checked={savedData[index]}
                  name='Checkbox_ABC'
                  iconSize='20px'
                  onChange={() => onChange(index, !savedData[index])}
                />
              }
            />
          );
        })}
      </CheckboxGroup>
    </div>
  );
};

export default CheckboxGroupIndeterminateExample;

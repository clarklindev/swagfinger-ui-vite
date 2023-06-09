import React from 'react';

import CheckboxGroupHorizontalExample from './CheckboxGroupHorizontalExample';
import CheckboxGroupVerticalExample from './CheckboxGroupVerticalExample';
import CheckboxGroupIndeterminateExample from './CheckboxGroupIndeterminateExample';

import Heading from '../../Heading';
import Layout from '../../Layout';

const CheckboxExample = () => {
  return (
    <>
      <Heading variation='h4'>Checkbox Group</Heading>
      <Layout variation='block'>
        <Heading variation='h5'>Checkbox Group (horizontal)</Heading>
        <CheckboxGroupHorizontalExample />
      </Layout>

      <Layout variation='block'>
        <Heading variation='h5'>Checkbox Group (vertical)</Heading>
        <CheckboxGroupVerticalExample />
      </Layout>

      <Layout variation='block'>
        <Heading variation='h5'>Checkbox Group (indeterminate)</Heading>
        <CheckboxGroupIndeterminateExample />
      </Layout>
    </>
  );
};

export default CheckboxExample;

import React from 'react';

import UseFocusExample from './UseFocusExample';
import UseHoverExample from './UseHoverExample';
import UseHoverFocusExample from './UseHoverFocusExample';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';

const HooksExample = () => {
  return (
    <>
      <Heading variation='h4'>Hooks</Heading>
      <Layout variation='block'>
        <Heading variation='h5'>useHover</Heading>
        <UseHoverExample />
      </Layout>
      <Layout variation='block'>
        <Heading variation='h5'>useFocus</Heading>
        <UseFocusExample />
      </Layout>
      <Layout variation='block'>
        <Heading variation='h5'>useHoverFocus</Heading>
        <UseHoverFocusExample />
      </Layout>
    </>
  );
};

export default HooksExample;

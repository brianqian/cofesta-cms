import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: auto;
`;

const ContactPage = () => (
  <Layout>
    <Container>
      <SEO title="Contact" />
      Contact us here:
    </Container>
  </Layout>
);

export default ContactPage;

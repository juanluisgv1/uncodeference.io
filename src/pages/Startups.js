import React from 'react';
import { Text, Link, PageWrapper, PageTitle, Title } from '../components';

export const Startups = () => (
  <React.Fragment>
    <PageTitle />
    <PageWrapper>
      <Title>Which startups will attend? <span role="img" aria-label="stock-increasing">📈</span></Title>
      <Text> <Link target="_blank" href="https://gronda.eu/home/">Gronda</Link></Text>
      <Text> <Link target="_blank" href="https://www.txture.io/en">Txture</Link></Text>
      <Text> <Link target="_blank" href="https://www.kjero.com/">Kjero</Link></Text>
      <Text> <Link target="_blank" href="https://wedesigntrips.com//">WeDesignTrips</Link></Text>
      <Text> <Link target="_blank" href="https://www.asi-reisen.de">ASI Reisen</Link></Text>
    </PageWrapper>
  </React.Fragment>
)

import React from 'react';
import { Text, Link, Spacer, PageWrapper, PageTitle, Title } from '../components';

export const Sponsors = () => (
  <React.Fragment>
    <PageTitle />
    <PageWrapper>
      <Title>Who is sponsoring this? <span role="img" aria-label="money">💵</span></Title>
      <Text> <Link target="_blank" href="https://gronda.eu/home/">Gronda</Link> --> Organization + IT</Text>
      <Text> <Link target="_blank" href="http://www.werkstaette-wattens.at/de">Werkstätte Wattens</Link> --> Venue + Food</Text>
      <Text> <Link target="_blank" href="https://www.asi-reisen.de/">ASI Reisen</Link> --> Merchandising</Text>

      <Spacer />

      <Title>Who else is supporting us? <span role="img" aria-label="rocket">🚀</span></Title>
      <Text> <Link target="_blank" href="https://www.meetup.com/es-ES/ReactJS-Tirol/">React Tirol Meetup</Link></Text>
      <Text> <Link target="_blank" href="https://webundspeck.com/">Web&amp;Speck Meetup</Link></Text>
    </PageWrapper>
  </React.Fragment>
)

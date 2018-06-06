import React from 'react';
import { Grid, Button, Icon, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import logo from '../../assets/images/logo.png';
import cowlogo from '../../assets/images/cowlogo.png';

const HomePage = () => (
  <Grid>
    <Grid.Row centered>
      <Grid.Column width={16}>
        <Image centered
          src={logo}
          style={{
            width: '600px',
            position: 'relative',
            height: '400px'
          }}
        />

        <p
          style={{
            fontSize: '1.5em',
            fontWeight: 'normal',
            paddingTop: '5%',
            position: 'absolute',
            color: '#000',
            margin: 'auto',
            width: '90%',
            textAlign: 'center'
          }}
        >
          <Button
            style={{
              fontSize: '1em',
              color: 'teal',
              margin: 'auto',
              marginTop: '5%',
              letterSpacing: '0.1em',
              boxShadow: ' 0px 1px 2px 0px rgba(0, 0, 0, .7)'
            }}
            as={Link}
            to="/about"
          >
            Learn More {'   '}
            <Icon name="arrow circle right" />
          </Button>
        </p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{ paddingBottom: '0', paddingTop: '0' }}>
      <Grid.Column style={{ paddingLeft: '0', paddingRight: '0' }}>
        <Carousel
          emulateTouch={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          <div style={{ height: '200px', backgroundColor: 'grey' }}>
            <p
              style={{
                paddingTop: '2em',
                fontSize: '1.3em',
                textAlign: 'center',
                width: '90%',
                margin: 'auto'
              }}
            >
              Nepali Cows are the example of sustainable farming.
            </p>
            <br /> Ram Sharma, President of Natural Society
          </div>
          <div style={{ height: '200px', backgroundColor: 'grey' }}>
            <p
              style={{
                paddingTop: '2em',
                fontSize: '1.3em',
                textAlign: 'center',
                width: '90%',
                margin: 'auto'
              }}
            >
              Natural and herbal products are fantastic.
            </p>
            <br /> John, Baba Dairy
          </div>
          <div
            style={{ height: '200px', backgroundColor: 'grey', margin: 'auto' }}
          >
            <p
              style={{
                paddingTop: '2em',
                fontSize: '1.3em',
                textAlign: 'center',
                width: '90%',
                margin: 'auto'
              }}
            >
              I have gained much strength swtiching to natural products.
            </p>
            <br /> Ramesh, Athlete, Butwal
          </div>
          <div style={{ height: '200px', backgroundColor: 'grey' }}>
            <p
              style={{
                paddingTop: '2em',
                fontSize: '1.3em',
                textAlign: 'center',
                width: '90%',
                margin: 'auto'
              }}
            >
              We need more of this revolution in the farming industry.
            </p>
            <br /> Annapurna Post
          </div>
        </Carousel>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomePage;

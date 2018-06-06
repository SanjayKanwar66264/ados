import React from 'react';
import logo from '../../assets/images/logo.png';
import { Grid, Button, Icon, Header, Image } from 'semantic-ui-react';

const ProductsPage = () => (
  <Grid>
    <Grid.Row centered>
      <Grid.Column width={6}>
        <Image
          src={logo}
          style={{  width: '100%',
          position: 'relative',
          height: '80%' }}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ProductsPage;

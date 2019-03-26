import * as React from 'react';
import BrandedMedScreen from '../../../screens/BrandedMedScreen';
import { storiesOf } from '@storybook/react-native';

storiesOf('BrandedMedScreen', module).add('simple (Crocin)', () => (
  <BrandedMedScreen
    ingredients={[
      {
        name: 'Paracetamol',
        potency: '500mg'
      }
    ]}
    genericMedName="Paracetamol Tablets IP 500mg"
    brandedAlternatives={[
      {
        name: 'Lupicin 500 MG Tablet',
        price: '1',
        pharmacy: 'Lupin Ltd.'
      }
    ]}
  />
));

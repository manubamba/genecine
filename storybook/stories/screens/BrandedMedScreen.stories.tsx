import * as React from 'react';
import { BrandedMedScreen } from '../../../screens/BrandedMedScreen';
import { storiesOf } from '@storybook/react-native';

storiesOf('BrandedMedScreen', module).add('simple (Crocin)', () => (
  <BrandedMedScreen
    ingredients={[
      {
        name: 'Paracetamol',
        potency: '500mg'
      }
    ]}
    genericMed={{
      name: 'Paracetamol Tablets IP 500mg',
      price: '0.25'
    }}
    brandedAlternatives={[
      {
        name: 'Lupicin 500 MG Tablet',
        price: '1',
        pharmacy: 'Lupin Ltd.'
      },
      {
        name: 'Macfast 500 MG Tablet',
        price: '1',
        pharmacy: 'Macleods Pharmaceuticals Pvt. Ltd.'
      },
      {
        name: 'Malidens 500 MG Tablet',
        price: '1',
        pharmacy: 'Abbott Healthcare Pvt. Ltd.'
      },
      {
        name: 'Parafast 500 MG Tablet',
        price: '1',
        pharmacy: 'T98 500 MG Tablet'
      }
    ]}
    uses={[
      'Fever',
      'Headache',
      'Muscle Pain',
      'Menstrual Cramps',
      'Post Immunization Pyrexia',
      'Arthritis'
    ]}
  />
));

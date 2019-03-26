import * as React from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';

interface Ingredient {
  name: string;
  potency: string;
}

interface BrandedAlternative {
  name: string;
  price: string;
  pharmacy: string;
}

interface BrandedMedScreenProps {
  ingredients: Ingredient[];
  genericMedName: string;
  brandedAlternatives?: BrandedAlternative[];
  uses?: string[];
}

export const TextLabel = ({ children }: { children: string }) => (
  <Text h4 h4Style={{ fontWeight: 'bold' }}>
    {children}:{' '}
  </Text>
);

export const TextValue = ({ children }: { children: string }) => (
  <Text
    h4
    h4Style={{
      fontWeight: '100',
      fontStyle: 'italic'
    }}
  >
    {children}
  </Text>
);

export default ({
  ingredients,
  genericMedName,
  brandedAlternatives
}: BrandedMedScreenProps) => (
  <View>
    <TextLabel>Active ingredients</TextLabel>
    {ingredients.map(ingredient => (
      <TextValue key={ingredient.name}>{`${ingredient.name}(${
        ingredient.potency
      })`}</TextValue>
    ))}

    <TextLabel>Generic Name</TextLabel>
    <TextValue>{genericMedName}</TextValue>

    {brandedAlternatives && brandedAlternatives.length && (
      <View>
        {brandedAlternatives.map(brandedAlternative => [
          <TextValue key={brandedAlternative.name}>{`${
            brandedAlternative.name
          } - ₹${brandedAlternative.price}`}</TextValue>,
          <Text>{brandedAlternative.pharmacy}</Text>
        ])}
      </View>
    )}
  </View>
);

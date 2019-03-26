import * as React from 'react';
import gql from 'graphql-tag';
import { NavigationScreenProp } from 'react-navigation';
import { Query } from 'react-apollo';
import {
    ScrollView,
    StyleProp,
    TextStyle,
    TouchableOpacity,
    View
    } from 'react-native';
import { Text } from 'react-native-elements';

interface Ingredient {
  name: string;
  potency: string;
}

interface MedPriceDetail {
  name: string;
  price: string;
  pharmacy?: string;
}

interface BrandedMedScreenProps {
  ingredients: Ingredient[];
  genericMed: MedPriceDetail;
  brandedAlternatives?: MedPriceDetail[];
  uses?: string[];
  navigation?: NavigationScreenProp<any, any>;
}

export const TextLabel = ({ children }: { children: string }) => (
  <Text
    h4
    h4Style={{
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#234d20',
      textAlign: 'center',
      marginBottom: 5
    }}
  >
    {children}
  </Text>
);

export const Space = () => (
  <View
    style={{
      height: 25
    }}
  />
);

export const TextValue = ({
  children,
  style = {}
}: {
  children: string;
  style?: StyleProp<TextStyle>;
}) => (
  <Text
    style={[
      {
        fontWeight: '100',
        fontStyle: 'italic',
        marginLeft: 10,
        fontSize: 18
      },
      style
    ]}
  >
    {children}
  </Text>
);

export const PriceValue = ({ children }: { children: string }) => (
  <TextValue
    style={{
      color: '#007f0e'
    }}
  >
    {children}
  </TextValue>
);

export const NameAndPrice = ({
  name,
  price
}: {
  name: string;
  price: string;
}) => (
  <Text>
    <TextValue>{`${name} - `}</TextValue>
    <PriceValue>{`₹${price}`}</PriceValue>
  </Text>
);

const navigateToMedPage = () => {};

const GET_MED = (id: string) => gql`{
    medicine(${id}) {
        ingredients
        genericMed
        brandedAlternatives
        uses
    }
}`;

export const BrandedMedScreen = ({
  ingredients,
  genericMed,
  brandedAlternatives,
  uses,
  navigation
}: BrandedMedScreenProps) => (
  <ScrollView
    style={{
      marginHorizontal: 10,
      height: '100%'
    }}
  >
    <TextLabel>Active ingredients</TextLabel>
    {ingredients.map(ingredient => (
      <TextValue key={ingredient.name}>{`${ingredient.name}(${
        ingredient.potency
      })`}</TextValue>
    ))}
    <Space />
    <TextLabel>Generic Name</TextLabel>
    <NameAndPrice {...genericMed} />
    <Space />
    {brandedAlternatives && brandedAlternatives.length && (
      <View>
        <TextLabel>Branded alternatives</TextLabel>
        {brandedAlternatives.map(brandedAlternative => (
          <TouchableOpacity
            key={brandedAlternative.name}
            onPress={() => navigateToMedPage()}
          >
            <NameAndPrice {...brandedAlternative} />
            <Text
              style={{
                marginBottom: 5
              }}
            >
              {brandedAlternative.pharmacy}
            </Text>
          </TouchableOpacity>
        ))}
        <Space />
      </View>
    )}
    {uses && uses.length && (
      <View>
        <TextLabel>Uses</TextLabel>
        {uses.map(use => (
          <TextValue key={use}>{use}</TextValue>
        ))}
      </View>
    )}
  </ScrollView>
);

export default ({ navigation }: BrandedMedScreenProps) => (
  <Query query={GET_MED(navigation && navigation.getParam('id'))}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <BrandedMedScreen
          genericMed={data.genericMed}
          ingredients={data.ingredients}
        />
      );
    }}
  </Query>
);

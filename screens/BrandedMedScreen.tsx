import * as React from 'react';
import gql from 'graphql-tag';
import {
  createStackNavigator,
  NavigationInjectedProps,
  NavigationParams,
  NavigationScreenComponent,
  NavigationScreenConfigProps,
  NavigationScreenProp,
  NavigationScreenProps
  } from 'react-navigation';
import { Query } from 'react-apollo';
import { ReactNode } from 'react';
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

interface BrandedMedScreenProps extends NavigationScreenProps {
  ingredients: Ingredient[];
  genericMed: MedPriceDetail;
  brandedAlternatives?: MedPriceDetail[];
  uses?: string[];
  name: string;
  children?: ReactNode;
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
    medicine(id: ${id}) {
      id
      name
      unitSize
      price
      ingredients {
        name
        potency
      }
      genericMed {
        name
        price
      }
      brandedAlternatives {
        name
        price
        pharmacy
      }
      uses
    }
  }`;

const setTitle = (title: string, navigation: NavigationScreenProp<any>) => {
  if (title !== navigation.getParam('title')) {
    navigation.setParams({
      title
    })
  }
}

export const BrandedMedScreen: NavigationScreenComponent<
  NavigationParams,
  {},
  BrandedMedScreenProps
> = (props: BrandedMedScreenProps) => {
  const { ingredients, genericMed, brandedAlternatives, uses, navigation, name } = props;
  setTitle(name, navigation);
  return (
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
};

const QueriedBrandedMedScreen = ({ navigation, ...otherProps }: BrandedMedScreenProps) => {
  console.log(navigation.getParam('id'));
  return (
  <Query query={GET_MED(navigation.getParam('id'))}>
    {({ loading, error, data }) => {
      if (loading) return <Text>'Loading...'</Text>;
      if (error) return <Text>Error! {error.message}</Text>;
      const { medicine } = data;
      return (
        <BrandedMedScreen
          genericMed={medicine.genericMed}
          ingredients={medicine.ingredients}
          brandedAlternatives={medicine.brandedAlternatives}
          name={medicine.name}
          uses={medicine.uses}
          navigation={navigation}
          {...otherProps}
        />
      );
    }}
  </Query>
)};


QueriedBrandedMedScreen.navigationOptions = ({
  navigation
}: NavigationScreenConfigProps) => {
  return {
    headerTitle: navigation.getParam('title')
  };
};


export default QueriedBrandedMedScreen;

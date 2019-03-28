import * as React from 'react';
import Item from '../schema/Item';
import { connectHighlight } from 'react-instantsearch-native';
import { Text, TouchableOpacity, View } from 'react-native';

interface HighlightProps {
  attribute: string;
  hit: Item;
  highlight: (obj: any) => [];
  onPress: (id: string) => {};
}

const Highlight = ({ attribute, hit, highlight, onPress }: HighlightProps) => {
  const highlights = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  });

  return (
    <Text>
      {highlights.map(({ value, isHighlighted }, index) => {
        const style = {
          backgroundColor: isHighlighted ? 'yellow' : 'transparent',
        };
 
        return (
          <Text key={index} style={style} onPress={() => onPress(hit.id)}>
            {value}
          </Text>
        );
      })}
    </Text>
  );
};

export default connectHighlight(Highlight);

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
    <View>
      {highlights.map(({ value, isHighlighted }, index) => {
        const style = {
          backgroundColor: isHighlighted ? 'yellow' : 'transparent',
          color:'green',
          fontWeight : '400' as '400',
          textAlign:'right' as 'right'
        };

        return (
          <TouchableOpacity key={index} onPress={() => onPress(hit.id)}>
            <Text style={style}>{value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default connectHighlight(Highlight);

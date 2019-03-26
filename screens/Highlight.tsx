
import * as React from 'react';
import { Text } from 'react-native';
import { connectHighlight } from 'react-instantsearch-native';
import Item from '../schema/Item';

interface HighlightProps {
  attribute: string,
  hit: Item,
  highlight: (obj : any) => [],
}

const Highlight = ({ attribute, hit, highlight } : HighlightProps) => {
  const highlights = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <Text>
      {highlights.map(({ value, isHighlighted }, index) => {
        const style = {
          backgroundColor: isHighlighted ? 'yellow' : 'transparent',
        };
 
        return (
          <Text key={index} style={style}>
            {value}
          </Text>
        );
      })}
    </Text>
  );
};

export default connectHighlight(Highlight);
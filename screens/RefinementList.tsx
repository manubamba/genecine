import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connectRefinementList } from 'react-instantsearch-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  title: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  list: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  itemCount: {
    backgroundColor: '#252b33',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 7.5,
  },
  itemCountText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});

interface ItemPropType {
  value: string,
  label: string,
  isRefined: boolean,
  count: number
};

interface RefinementListPropTypes {
  items: ItemPropType[],
  refine: (obj : any) => {},
};

const RefinementList = ({ items, refine } : RefinementListPropTypes) => {
  return(
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Category</Text>
    </View>
    <View style={styles.list}>
      {items.map(item => {
        const labelStyle = {
          fontSize: 16,
          fontWeight: item.isRefined ? '800' : '400',
        };

        return (
          <TouchableOpacity
            key={item.value}
            onPress={() => refine(item.value)}
            style={styles.item}
          >
            <Text style={labelStyle}>{item.label}</Text>
            <View style={styles.itemCount}>
              <Text style={styles.itemCountText}>{item.count}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>)
};

export default connectRefinementList(RefinementList);
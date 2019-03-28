import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connectRefinementList } from "react-instantsearch-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFFFFF"
  },
  title: {
    flexDirection: "row"
  },
  titleText: {
    fontSize: 25,
    color: "#003366",
    textAlign: "center",
    alignItems: "center"
  },
  list: {
    marginTop: 20,
    marginBottom:10
  },
  item: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: "center"
  },
  itemCount: {
    backgroundColor: "#252b33",
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 7.5
  },
  itemCountText: {
    color: "#FFFFFF",
    fontWeight: "800"
  }
});

interface ItemPropType {
  value: string;
  label: string;
  isRefined: boolean;
  count: number;
}

interface RefinementListPropTypes {
  items: ItemPropType[];
  refine: (obj: any) => {};
  toggleModal: () => void;
}

const RefinementList = ({
  items,
  refine,
  toggleModal
}: RefinementListPropTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Icon
          iconStyle={{ fontSize: 30}}
          name="arrow-back"
          onPress={toggleModal}
        />
        <Text style={styles.titleText}>Category</Text>
      </View>
      <View style={styles.list}>
        {items.map(item => {
          const labelStyle = {
            fontSize: 20,
            fontWeight: item.isRefined ? "600" : "400",
            color: item.isRefined ? "black":"grey"
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
    </View>
  );
};

export default connectRefinementList(RefinementList);

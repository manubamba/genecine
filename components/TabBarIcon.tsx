import * as React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';



export default ({name, focused}: {name: string, focused: boolean}) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
)
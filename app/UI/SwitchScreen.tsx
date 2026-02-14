import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';

export default function SwitchScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Not implemented yet on iOS</Text>
      </View>
    </ScrollView>
  );
}

SwitchScreen.navigationOptions = {
  title: 'Switch',
};

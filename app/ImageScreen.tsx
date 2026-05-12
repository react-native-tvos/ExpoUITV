import { Host, HStack, Image, Slider, Text, VStack } from '@expo/ui/swift-ui';
import * as React from 'react';
import { useState } from 'react';

import { ScrollPage, Section } from '../components/Page';
import { Platform, View } from 'react-native';
import SegmentedControl from '@expo/ui/community/segmented-control';

export default function ImageScreen() {
  const [variableValue, setVariableValue] = useState(0.5);

  return (
    <ScrollPage>
      <Section title="Basic SF Symbols">
        <Host matchContents>
          <HStack spacing={16}>
            <Image systemName="heart" size={32} />
            <Image systemName="star" size={32} />
            <Image systemName="folder" size={32} />
            <Image systemName="gear" size={32} />
          </HStack>
        </Host>
      </Section>

      <Section title="Tinted SF Symbols">
        <Host matchContents>
          <HStack spacing={16}>
            <Image systemName="heart" size={32} color="red" />
            <Image systemName="star" size={32} color="blue" />
            <Image systemName="folder" size={32} color="green" />
            <Image systemName="gear" size={32} color="yellow" />
          </HStack>
        </Host>
      </Section>

      <Section title="Variable Color">
        <Host matchContents>
          <VStack alignment="center" spacing={8}>
            <HStack spacing={8}>
              <Image
                systemName="cellularbars"
                size={32}
                variableValue={variableValue}
              />
              <Image
                systemName="wifi"
                size={32}
                variableValue={variableValue}
              />
              <Image
                systemName="antenna.radiowaves.left.and.right"
                size={32}
                variableValue={variableValue}
              />
            </HStack>
            {Platform.isTV ? (
              <View style={{ width: '100%' }}>
                <SegmentedControl
                  style={{ width: 600, marginTop: 50 }}
                  values={['0', '0.2', '0.4', '0.6', '0.8', '1.0']}
                  selectedIndex={0}
                  onValueChange={(s) => setVariableValue(parseFloat(s))}
                />
              </View>
            ) : (
              <Slider
                min={0}
                max={1}
                value={variableValue}
                onValueChange={setVariableValue}
              />
            )}
          </VStack>
        </Host>
      </Section>
    </ScrollPage>
  );
}

ImageScreen.navigationOptions = {
  title: 'Image (SwiftUI)',
};

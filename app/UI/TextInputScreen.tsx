import {
  Button,
  Host,
  TextField,
  TextFieldRef,
  SecureField,
} from '@expo/ui/swift-ui';
import * as React from 'react';
import { TextInput as RNTextInput, Platform } from 'react-native';

import { Page, Section } from '@/components/Page';
import { ThemedText } from '@/components/ThemedText';

export default function TextInputScreen() {
  const [value, setValue] = React.useState<string>('');
  const textRef = React.useRef<TextFieldRef>(null);
  const secureRef = React.useRef<TextFieldRef>(null);

  return (
    <Page>
      <Section title="Current value">
        <ThemedText>{JSON.stringify(value)}</ThemedText>
      </Section>
      <Host style={{ width: '100%' }}>
        <Button
          onPress={async () => {
            textRef.current?.setText('Hello there!');
            secureRef.current?.setText('123');
          }}
        >
          Set text
        </Button>
      </Host>
      <Section title="Text Input">
        <Host matchContents>
          <TextField
            ref={textRef}
            autocorrection={false}
            defaultValue="hey there"
            onChangeText={setValue}
          />
        </Host>
      </Section>
      {!Platform.isTV && (
        <Section title="Multiline Text Input">
          <Host matchContents>
            <TextField
              multiline
              numberOfLines={5}
              autocorrection={false}
              allowNewlines={false}
              defaultValue="hey there"
              onChangeText={setValue}
            />
          </Host>
        </Section>
      )}
      <Section title="Phone Text Input">
        <Host matchContents>
          <TextField
            multiline={!Platform.isTV}
            numberOfLines={Platform.isTV ? 1 : 5}
            keyboardType="phone-pad"
            autocorrection={false}
            defaultValue="324342324"
            onChangeText={setValue}
          />
        </Host>
      </Section>
      {!Platform.isTV && (
        <Section title="Multiline, allowNewlines Text Input">
          <Host matchContents>
            <TextField
              multiline
              numberOfLines={Platform.isTV ? 1 : 5}
              allowNewlines
              autocorrection={false}
              defaultValue="hey there"
              onChangeText={setValue}
            />
          </Host>
        </Section>
      )}
      <Section title="Secure Text Input">
        <Host matchContents>
          <SecureField
            ref={secureRef}
            defaultValue="hey there"
            onChangeText={setValue}
            keyboardType="numeric"
          />
        </Host>
      </Section>
      <Section title="RN Text Input">
        <RNTextInput
          multiline={!Platform.isTV}
          numberOfLines={Platform.isTV ? 1 : 5}
          value={value}
          onChangeText={setValue}
        />
      </Section>
    </Page>
  );
}

TextInputScreen.navigationOptions = {
  title: 'TextInput',
};

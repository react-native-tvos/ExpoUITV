import {
  Button as SwiftUIButton,
  CircularProgress,
  Host,
  Image,
  Text,
  VStack,
} from '@expo/ui/swift-ui';
import * as React from 'react';
import {
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { Page, Section } from '@/components/Page';

export default function ButtonScreen() {
  return (
    <Page>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Section title="Default">
          <Button style={styles.button}>Test</Button>
        </Section>
        <Section title="System Styles">
          <Button style={styles.button} variant="default">
            Default
          </Button>
          <Button style={styles.button} variant="glass">
            Glass button
          </Button>
          <Button style={styles.button} variant="glassProminent">
            Glass Prominent
          </Button>
          <Button style={styles.button} variant="bordered">
            Bordered
          </Button>
          <Button style={styles.button} variant="borderless">
            Borderless
          </Button>
          <Button style={styles.button} variant="borderedProminent">
            Bordered Prominent
          </Button>
          <Button style={styles.button} variant="plain">
            Plain
          </Button>
        </Section>
        <Section title="Disabled">
          <Button style={styles.button} disabled>
            Disabled
          </Button>
          <Button style={styles.button}>Enabled</Button>
        </Section>
        <Section title="Button Roles">
          <Button style={styles.button} role="default">
            Default
          </Button>
          <Button style={styles.button} role="cancel">
            Cancel
          </Button>
          <Button style={styles.button} role="destructive">
            Destructive
          </Button>
        </Section>
        <Section title="Button Images">
          <Button variant="bordered" style={styles.button} systemImage="folder">
            Folder
          </Button>
          <Button style={styles.button} systemImage="tortoise">
            Tortoise
          </Button>
          <Button
            variant="borderless"
            style={styles.button}
            systemImage="trash"
          >
            Trash
          </Button>
          <Button style={styles.button} systemImage="heart">
            Heart
          </Button>
          <Button style={styles.button} systemImage="gear" variant="glass" />
        </Section>
        <Section title="Tinted Buttons">
          <Button style={styles.button} color="#f00f0f">
            Red
          </Button>
        </Section>
        <Section title="Custom children">
          <Host style={styles.buttonHost}>
            <SwiftUIButton>
              <VStack spacing={4}>
                <Image systemName="folder" />
                <Text>Folder</Text>
              </VStack>
            </SwiftUIButton>
          </Host>
          <Host style={styles.buttonHost}>
            <SwiftUIButton>
              <CircularProgress color="blue" />
            </SwiftUIButton>
          </Host>
        </Section>
      </ScrollView>
    </Page>
  );
}

function Button(
  props: React.ComponentProps<typeof SwiftUIButton> & {
    style?: StyleProp<ViewStyle>;
  },
) {
  const { style, ...restProps } = props;
  return (
    <Host matchContents style={style}>
      <SwiftUIButton {...restProps}>{props.children}</SwiftUIButton>
    </Host>
  );
}

const styles = StyleSheet.create({
  button: {
    width: Platform.isTV ? 400 : 150,
    margin: 5,
    marginLeft: 20,
    overflow: 'visible',
  },
  buttonHost: {
    width: Platform.isTV ? 400 : 50,
    height: 50,
  },
  stretch: {
    alignSelf: 'stretch',
  },
  columnWrapper: {
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
});

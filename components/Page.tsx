import * as React from 'react';
import { PropsWithChildren } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from './ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Page({ children }: PropsWithChildren) {
  return <View style={styles.page}>{children}</View>;
}

const ScrollPage = ({ children }: PropsWithChildren) => (
  <ScrollView style={[styles.page, styles.scrollPage]}>{children}</ScrollView>
);

type SectionProps = PropsWithChildren<{
  title: string;
  row?: boolean;
  gap?: number;
}>;

const Section = ({ title, children, row, gap }: SectionProps) => (
  <SafeAreaView>
    <View style={styles.section}>
      <ThemedText type="title">{title}</ThemedText>
      <View style={{ flexDirection: row ? 'row' : 'column', gap }}>
        {children}
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  scrollPage: {
    flex: 1,
  },
  section: {
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 8,
  },
  sectionHeader: {
    marginTop: 8,
  },
});

export { ScrollPage, Section };

import { useCallback } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TVEventControl,
  useColorScheme,
} from 'react-native';
import { RelativePathString, useFocusEffect, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/AnimatedIcon';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { screenList } from '@/constants/ScreenList';
import { useScreenDimensions } from '@/hooks/useScreenDimensions';

const platform = Platform.OS as string;

const platformLabel = Platform.isTV
  ? 'TV'
  : Platform.OS === 'web'
    ? 'web'
    : 'mobile';

export default function HomeScreen() {
  useFocusEffect(
    useCallback(() => {
      TVEventControl.disableTVMenuKey();
    }, []),
  );
  const styles = useHomeStyles();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            {`Expo UI demos`}
          </ThemedText>
        </ThemedView>

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {screenList.map((screen) =>
            screen.platforms.has(platform) &&
            !(Platform.isTV && screen.excludedOnTV) ? (
              <DemoButton
                key={screen.name}
                demoName={screen.name as RelativePathString}
              />
            ) : null,
          )}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const DemoButton = function ({ demoName }: { demoName: RelativePathString }) {
  const router = useRouter();
  const styles = useDemoButtonStyles();

  const navigate = (screen: RelativePathString) => {
    TVEventControl.enableTVMenuKey();
    router.push(screen);
  };

  const label = demoName.replace(/Screen$/, '');

  return (
    <Pressable onPress={() => navigate(demoName)}>
      {({ pressed, focused }) => (
        <ThemedView
          style={[styles.button, (pressed || focused) && styles.buttonFocused]}
        >
          <ThemedText
            type="defaultSemiBold"
            style={
              pressed || focused ? styles.buttonTextFocused : styles.buttonText
            }
          >
            {label}
          </ThemedText>
        </ThemedView>
      )}
    </Pressable>
  );
};

const useHomeStyles = function () {
  const { spacing, width, landscape } = useScreenDimensions();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
      paddingHorizontal: spacing.four,
      gap: spacing.three,
      alignSelf: 'center',
      width: '100%',
      maxWidth: Math.min(width, 800 + spacing.six),
    },
    heroSection: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: landscape ? spacing.two : spacing.four,
      gap: spacing.three,
    },
    title: {
      textAlign: 'center',
    },
    list: {
      flex: 1,
    },
    listContent: {
      gap: spacing.two,
      paddingBottom: spacing.six,
    },
  });
};

const useDemoButtonStyles = function () {
  const { spacing } = useScreenDimensions();
  const scheme = useColorScheme() ?? 'light';
  const baseColor =
    scheme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';
  const focusColor = Colors[scheme === 'dark' ? 'dark' : 'light'].tint;
  const focusedTextColor =
    Colors[scheme === 'dark' ? 'dark' : 'light'].background;
  return StyleSheet.create({
    button: {
      paddingVertical: spacing.three,
      paddingHorizontal: spacing.four,
      borderRadius: spacing.three,
      backgroundColor: baseColor,
    },
    buttonFocused: {
      backgroundColor: focusColor,
    },
    buttonText: {
      textAlign: 'left',
    },
    buttonTextFocused: {
      color: focusedTextColor,
    },
  });
};

import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { Href, Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useScale } from '@/hooks/useScale';
import { screenList } from '@/constants/ScreenList';

const platform = Platform.OS as string;

export default function HomeScreen() {
  const styles = useHomeScreenStyles();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Expo UI demos</ThemedText>
      </ThemedView>
      {screenList.map((screen) =>
        screen.platforms.has(platform) &&
        !(Platform.isTV && screen.excludedOnTV) ? (
          <ThemedView key={screen.name}>
            <DemoButton demoName={screen.name} />
          </ThemedView>
        ) : null,
      )}
    </ParallaxScrollView>
  );
}

const DemoButton = function ({ demoName }: { demoName: string }) {
  return (
    <Link href={demoName as Href} asChild>
      <Pressable>
        {({ pressed, focused }) => (
          <ThemedView
            style={{
              opacity: pressed || focused ? 0.6 : 1.0,
            }}
          >
            <ThemedText type="subtitle">{demoName}</ThemedText>
          </ThemedView>
        )}
      </Pressable>
    </Link>
  );
};

const useHomeScreenStyles = function () {
  const scale = useScale();
  return StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8 * scale,
    },
    stepContainer: {
      gap: 8 * scale,
      marginBottom: 8 * scale,
    },
    reactLogo: {
      height: 178 * scale,
      width: 290 * scale,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
};

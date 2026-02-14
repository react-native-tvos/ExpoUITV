import {
  Image,
  StyleSheet,
  Platform,
  Pressable,
  TVEventControl,
} from 'react-native';
import {
  Href,
  Link,
  RelativePathString,
  useFocusEffect,
  useRouter,
} from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useScale } from '@/hooks/useScale';
import { screenList } from '@/constants/ScreenList';
import { useCallback } from 'react';

const platform = Platform.OS as string;

export default function HomeScreen() {
  useFocusEffect(
    useCallback(() => {
      TVEventControl.disableTVMenuKey();
    }, []),
  );
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
            <DemoButton demoName={screen.name as RelativePathString} />
          </ThemedView>
        ) : null,
      )}
    </ParallaxScrollView>
  );
}

const DemoButton = function ({ demoName }: { demoName: RelativePathString }) {
  const router = useRouter();
  const navigate = (screen: RelativePathString) => {
    TVEventControl.enableTVMenuKey();
    router.push(screen);
  };
  return (
    <Pressable onPress={() => navigate(demoName)}>
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

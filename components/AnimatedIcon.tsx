import { Image } from 'expo-image';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';

import { useScreenDimensions } from '@/hooks/useScreenDimensions';

const INITIAL_SCALE_FACTOR = Dimensions.get('screen').height / 90;
const DURATION = 600;

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: INITIAL_SCALE_FACTOR }],
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
  },
  40: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
    easing: Easing.elastic(0.7),
  },
  100: {
    opacity: 1,
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const glowKeyframe = new Keyframe({
  0: {
    transform: [{ rotateZ: '0deg' }],
  },
  100: {
    transform: [{ rotateZ: '7200deg' }],
  },
});

export function AnimatedIcon() {
  const styles = useAnimatedIconStyles();
  return (
    <View style={styles.iconContainer}>
      <Animated.View
        entering={glowKeyframe.duration(60 * 1000 * 4)}
        style={styles.glow}
      >
        <Image
          style={styles.glow}
          source={require('@/assets/images/logo-glow.png')}
        />
      </Animated.View>

      <Animated.View
        entering={keyframe.duration(DURATION)}
        style={styles.background}
      />
      <Animated.View
        style={styles.imageContainer}
        entering={logoKeyframe.duration(DURATION)}
      >
        <Image
          style={styles.image}
          source={
            Platform.OS === 'web' || Platform.isTV
              ? require('@/assets/images/expotv-logo.png')
              : require('@/assets/images/expo-logo.png')
          }
        />
      </Animated.View>
    </View>
  );
}

const useAnimatedIconStyles = () => {
  const { height } = useScreenDimensions();
  const scale = height / 800;
  return StyleSheet.create({
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    glow: {
      width: height * 0.15,
      height: height * 0.15,
      position: 'absolute',
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Platform.OS === 'web' || Platform.isTV ? 196 * scale : 128 * scale,
      height: 128 * scale,
      zIndex: 100,
    },
    image: {
      position: 'absolute',
      width: Platform.OS === 'web' || Platform.isTV ? 160 * scale : 76 * scale,
      height: Platform.OS === 'web' || Platform.isTV ? 130 * scale : 71 * scale,
    },
    background: {
      borderRadius: height * 0.04,
      experimental_backgroundImage: `linear-gradient(180deg, #3C9FFE, #0274DF)`,
      width: Platform.OS === 'web' || Platform.isTV ? 196 * scale : 128 * scale,
      height: 128 * scale,
      position: 'absolute',
    },
  });
};

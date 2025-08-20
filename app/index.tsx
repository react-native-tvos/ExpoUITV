import { Image, StyleSheet, Platform, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useScale } from '@/hooks/useScale';
import { useRouter } from 'expo-router';

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
      {Platform.OS === 'android' && (
        <ThemedView>
          <DemoButton demoName="AlertDialogScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'ios' && !Platform.isTV && (
        <ThemedView>
          <DemoButton demoName="BottomSheetScreen" />
        </ThemedView>
      )}
      <ThemedView>
        <DemoButton demoName="ButtonScreen" />
      </ThemedView>
      {Platform.OS === 'ios' && (
        <ThemedView>
          <DemoButton demoName="ChartScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'ios' && !Platform.isTV && (
        <ThemedView>
          <DemoButton demoName="ColorPickerScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'ios' && (
        <ThemedView>
          <DemoButton demoName="ContextMenuScreen" />
        </ThemedView>
      )}
      <ThemedView>
        <DemoButton demoName="DateTimePickerScreen" />
      </ThemedView>
      {Platform.OS === 'ios' && (
        <ThemedView>
          <DemoButton demoName="FormScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'ios' && !Platform.isTV && (
        <ThemedView>
          <DemoButton demoName="GaugeScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'ios' && (
        <ThemedView>
          <DemoButton demoName="HostingRNViewsScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'android' && (
        <ThemedView>
          <DemoButton demoName="JetpackComposePrimitivesScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'ios' && (
        <ThemedView>
          <DemoButton demoName="ListScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'ios' && (
        <ThemedView>
          <DemoButton demoName="ModifiersScreen" />
        </ThemedView>
      )}
      <ThemedView>
        <DemoButton demoName="PickerScreen" />
      </ThemedView>
      <ThemedView>
        <DemoButton demoName="ProgressScreen" />
      </ThemedView>
      {Platform.OS === 'android' && (
        <ThemedView>
          <DemoButton demoName="ShapeScreen" />
        </ThemedView>
      )}
      {Platform.OS === 'ios' && (
        <ThemedView>
          <DemoButton demoName="ShareLinkScreen" />
        </ThemedView>
      )}
      <ThemedView>
        <DemoButton demoName="SliderScreen" />
      </ThemedView>
      <ThemedView>
        <DemoButton demoName="SwitchScreen" />
      </ThemedView>
      <ThemedView>
        <DemoButton demoName="TextInputScreen" />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const DemoButton = function ({ demoName }: { demoName: string }) {
  const router = useRouter();
  return (
    <Pressable
      style={({ pressed, focused }) => ({
        opacity: pressed || focused ? 0.6 : 1.0,
      })}
      onPress={() => router.push(`/UI/${demoName}` as any)}
    >
      <ThemedText type="subtitle">{demoName}</ThemedText>
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

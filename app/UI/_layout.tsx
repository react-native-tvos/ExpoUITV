import { screenList } from '@/constants/ScreenList';
import { Stack } from 'expo-router';
import { Platform } from 'react-native';

const platform = Platform.OS as string;

export default function UILayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {screenList.map((screen) =>
        screen.platforms.has(platform) &&
        !(Platform.isTV && screen.excludedOnTV) ? (
          <Stack.Screen
            name={`/UI/${screen.name}`}
            key={screen.name}
            options={{
              title: screen.name,
              headerTitle: screen.name,
            }}
          />
        ) : null,
      )}
    </Stack>
  );
}

# Expo UI multiplatform demo

This is a project demonstrating the production-ready [Expo UI](https://expo.dev/changelog/sdk-56-beta#expo-ui-is-now-ready-for-production) package available in SDK 56 and later. The project works on both TV (Apple TV, Android TV) and mobile (iOS, Android).

The project also uses:

- The [React Native TV fork](https://github.com/react-native-tvos/react-native-tvos), which supports both phone (Android and iOS) and TV (Android TV and Apple TV) targets
- The [React Native TV config plugin](https://github.com/react-native-tvos/config-tv/tree/main/packages/config-tv), to allow Expo prebuild to modify the project's native files for TV builds

## 🚀 How to use

- `cd` into the project

- TV builds:

```sh
pnpm install
pnpm prebuild:tv # Executes Expo prebuild with TV modifications
pnpm ios # Build and run for Apple TV
pnpm android # Build and run for Android TV
```

- Mobile builds:

```sh
pnpm install
pnpm prebuild # Executes Expo prebuild without TV modifications
pnpm ios # Build and run for iOS
pnpm android # Build and run for Android mobile
```

## Development

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/learn): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



# Expo UI TV demo for SDK 54

This is an [Expo Router](https://docs.expo.dev/router/introduction/) SDK 54 project demonstrating the [Expo UI](https://docs.expo.dev/versions/latest/sdk/ui/) package available in SDK 54 and later. The project works on both TV (Apple TV, Android TV) and mobile (iOS, Android).

The project also uses:

- The [React Native TV fork](https://github.com/react-native-tvos/react-native-tvos), which supports both phone (Android and iOS) and TV (Android TV and Apple TV) targets
- The [React Native TV config plugin](https://github.com/react-native-tvos/config-tv/tree/main/packages/config-tv), to allow Expo prebuild to modify the project's native files for TV builds

## 🚀 How to use

- `cd` into the project

- TV builds:

```sh
yarn
yarn prebuild:tv # Executes Expo prebuild with TV modifications
yarn ios # Build and run for Apple TV
yarn android # Build and run for Android TV
```

- Mobile builds:

```sh
yarn
yarn prebuild # Executes Expo prebuild without TV modifications
yarn ios # Build and run for iOS
yarn android # Build and run for Android mobile
```

## Development

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/learn): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



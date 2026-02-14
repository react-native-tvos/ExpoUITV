import { Platform } from 'react-native';

const androidOnly = new Set(['android']);
const iosOnly = new Set(['ios']);
const allPlatforms = new Set(['android', 'ios']);

export const screenList: {
  name: string;
  platforms: Set<String>;
  excludedOnTV?: boolean;
}[] = [
  { name: 'AlertDialogScreen', platforms: androidOnly },
  { name: 'BottomSheetScreen', platforms: iosOnly, excludedOnTV: true },
  { name: 'ButtonScreen', platforms: allPlatforms },
  { name: 'ChartScreen', platforms: iosOnly },
  { name: 'ColorPickerScreen', platforms: iosOnly, excludedOnTV: true },
  { name: 'ContextMenuScreen', platforms: allPlatforms },
  { name: 'DateTimePickerScreen', platforms: allPlatforms, excludedOnTV: true },
  { name: 'FormScreen', platforms: iosOnly },
  { name: 'GaugeScreen', platforms: iosOnly, excludedOnTV: true },
  { name: 'GlassEffectScreen', platforms: allPlatforms },
  { name: 'HostingRNViewsScreen', platforms: iosOnly },
  { name: 'ListScreen', platforms: iosOnly },
  { name: 'ModifiersScreen', platforms: iosOnly },
  { name: 'PickerScreen', platforms: allPlatforms },
  { name: 'ProgressScreen', platforms: allPlatforms },
  { name: 'ShapeScreen', platforms: androidOnly },
  { name: 'ShareLinkScreen', platforms: iosOnly },
  { name: 'SliderScreen', platforms: allPlatforms, excludedOnTV: true },
  { name: 'SwitchScreen', platforms: androidOnly },
  { name: 'TextInputScreen', platforms: allPlatforms },
];

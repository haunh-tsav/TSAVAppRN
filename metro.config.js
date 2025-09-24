const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // Thêm các cấu hình khác ở đây nếu cần
};

module.exports = withNativeWind(mergeConfig(getDefaultConfig(__dirname), config));
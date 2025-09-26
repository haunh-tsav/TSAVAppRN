const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // 1. Chỉ định transformer cho các file .svg
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Lấy config mặc định để sửa đổi
    // Hàm getDefaultConfig sẽ trả về object chứa resolver
    assetExts: getDefaultConfig(__dirname).resolver.assetExts.filter(
      (ext) => ext !== 'svg'
    ), // 2. Lọc bỏ 'svg' khỏi danh sách asset thông thường
    sourceExts: [
      ...getDefaultConfig(__dirname).resolver.sourceExts,
      'svg', // 3. Thêm 'svg' vào danh sách source code/component
    ],
  },
  
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
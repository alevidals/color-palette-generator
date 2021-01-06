module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.colorly',
        productName: 'Colorly',
        linux: {
          category: 'Utils',
          packageCategory: 'utils',
          target: ['deb', 'AppImage'],
          synopsis:
            'A minimalistic app to create color palette and export it to pdf',
        },
      },
    },
  },
};

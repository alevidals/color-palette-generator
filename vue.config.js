module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.color.palette',
        productName: 'Color palette generator',
        // linux: {
        //   category: 'Utils',
        //   packageCategory: 'utils',
        //   target: ['deb', 'AppImage'],
        //   // icon: 'build/icons/'
        //   synopsis:
        //     'A minimalistic app to create color palette and export it to pdf',
        // },
        win: {
          target: ['nsis'],
          icon: 'build/icon.ico',
        },
      },
    },
  },
};

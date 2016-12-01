const webfontsGenerator = require('webfonts-generator');
const glob = require('glob');
const path = require('path');

const iconsPath = path.resolve(__dirname, '../src/assets/font/icons/*.svg');
const files = glob.sync(iconsPath);

webfontsGenerator({
    writeFiles: true,
    files: files,
    dest: '../src/assets/font/build',
    fontName: 'sxcIconfont',
    css: true,
    cssTemplate: path.resolve(__dirname, '../src/assets/font/templates/css.hbs'),
    cssDest: path.resolve(__dirname, '../src/assets/style/icon/sxc-iconfont.scss'),
    cssFontsUrl: '../src/assets/fonts/build',


    html: true,
    htmlTemplate: path.resolve(__dirname, '../src/assets/font/templates/html.hbs'),
    //htmlDest: path.resolve(__dirname, '../src/assets/font/build/sxcIconfont.html'),
    templateOptions: {
      classPrefix: 'sxc-icon-',
      baseClass: 'sxc-icon'
    }

}, function(error, result){
    if(error) console.log(error);

    //console.log(result.eot);
});

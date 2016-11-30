const webfontsGenerator = require('webfonts-generator');
const glob = require('glob');
const path = require('path');

const iconsPath = path.resolve(__dirname, '../icons/*.svg');
const files = glob.sync(iconsPath);

webfontsGenerator({
    files: files,
    dest: path.resolve(__dirname, '../src/assets/font'),
    fontName: 'sxcIconfont',
    css: true,
    //cssDest: path.resolve(__dirname, '../src/assets/font/'),
    cssFontsUrl: path.resolve(__dirname, '../src/assets/font'),
    html: true,
  //  htmlDest: path.resolve(__dirname, '../src/assets/font'),
    templateOptions: {
      classPrefix: 'sxc-icon-',
      baseClass: 'sxc-icon'
    }

},function(error, result){
    if(error) console.log(error);
});

var builder = require('iconfont-builder');
var path = require('path');

var options = {
    icons: [{
        name: 'fontss11',
        file: '11.svg',
        codepoint: 61441
    },{
        name: 'fontss22',
        file: 'icon1.svg',
        codepoint: 61442
    }],
    src: path.join(__dirname, '../src/assets/fonts'),
    fontName: 'iconfont',
    descent: 0,
    dest: path.join(__dirname, '../dist/assets/fonts')
}

builder(options).then().catch();

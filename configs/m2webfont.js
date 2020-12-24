'use strict';

const { join } = require('path');
const themes = require('../tools/files-router').get('themes');

const themeOptions = {};

const { appDir, source, destFont, destCss, fontName, fontTypes } = {
    appDir: 'app/design',
    source: 'web/images/icons/font/*.svg',
    destFont: 'web/fonts',
    destCss: 'web/css/source',
    fontName: 'overdose-icons'
};

const options = {
    fontFilename: fontName,
    fontFamilyName: fontName,
    types: 'woff2',
    stylesheets: ['less'],
    hashes: false,
    engine: 'node',
    autoHint: false,
    normalize: true,
    htmlDemo: false,
    template: join(__dirname, 'm2webfont.txt'),
    templateOptions: {
        baseClass: 'od-icon',
        classPrefix: 'od-icon-'
    }
};

Object.keys(themes).map(key => {
    const { area, name } = themes[key];
    const themeDir = join(process.cwd(), appDir, area, name);

    themeOptions[key] = {
        src: join(themeDir, source),
        dest: join(themeDir, destFont, fontName),
        destCss: join(themeDir, destCss, fontName),
        options
    }
});

module.exports = themeOptions;

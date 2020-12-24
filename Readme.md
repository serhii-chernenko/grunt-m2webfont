# Build webfont from SVG icons
#### Adapted for Magento 2

## General information

The package has been extended from grunt-webfont and adapted to Magento 2 with the LESS preprocessor:<br/>
https://www.npmjs.com/package/grunt-webfont

## Important

1. This plugin requires Grunt 0.4. Note that `ttfautohint` is optional, but your generated font will not be properly hinted if it’s not installed. And make sure you don’t use `ttfautohint` 0.97 because that version won’t work.
2. This plugin requires Node version <=12<br/>
If version will be bigger than you will have the error:<br/>
```
ttf2woff2.js:3 Invalid asm.js: Invalid member of stdlib
```
3. *`fontforge` isn’t required for the `node` engine (see [below](#available-engines)).*

### To downgrade your Node version

#### Use NVM

https://github.com/nvm-sh/nvm/blob/master/README.md

#### For OS X you can use brew 

```
brew unlink node
brew install node@12
brew link --overwrite --dry-run node@12
echo 'export PATH="/usr/local/opt/node@12/bin:$PATH"' >> ~/.zshrc
```

## Installation

### First for all OS
```
npm install grunt-m2webfont --save-dev
// or
yarn add grunt-m2webfont
```

### OS X

```
brew install ttfautohint fontforge --with-python
```

### Linux

```
sudo apt-get install fontforge ttfautohint
```

### Windows

[Install `ttfautohint`](http://www.freetype.org/ttfautohint/#download) (optional).

Then install `fontforge`.
* Download and install [fontforge](http://fontforge.github.io/en-US/downloads/windows/).
* Add `C:\Program Files (x86)\FontForgeBuilds\bin` to your `PATH` environment variable.

## Links

* https://www.npmjs.com/package/grunt-webfont
* https://www.npmjs.com/package/grunt-m2webfont
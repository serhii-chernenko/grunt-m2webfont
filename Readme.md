# Build webfont from SVG icons
#### Adapted for Magento 2
<hr/>

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
3. *`fontforge` isn’t required for the `node` engine.*

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

## Prepare svg icons in a theme's folder

Add all svg icons to the folder `web/images/icons/font` of a created theme.<br/>
Example:
```
app/design/frontend/{vendor}/{theme}/web/images/icons/font/*.svg
```

The module `grunt-m2webfont` will run for all themes which added to<br/>
```
dev/tools/grunt/configs/themes.js
```
or
```
dev/tools/grunt/configs/local-themes.js
```
if the file `local-themes.js` was added to a content of the file `grunt-config.json` in the root folder of a project.

## Run the grunt-m2webfont module

Just run the command in a terminal:

```
grunt m2webfont
```

## How to use

After importing and building styles you can use styles' mixins or html classes to add an icon.

Replace the fragment {name} to the name of an icon.<br/>
Example: `@od-icon-arrow-down`

#### LESS

The mixin `.od-icon(@od-icon-{name})` will add properties such as: content and font-family

```
.class::before {
  .od-icon(@od-icon-{name});
}
```

#### HTML

```
<i class="od-icon od-icon-{name}"></i>
```

## Issues

### Generated font has broken icons

The default engine to build a font is node in the Grunt’s config file to save minimum dependecies. But  generated icons might be broken. To fix this issue you need to change the <strong>engine</strong> from `node` to `fontforge` in the config.

Just to comment the row in the file `dev/tools/grunt/configs/m2webfont.js`:

```
const options = {
  ...
  // engine: 'node',
}
```

If you don’t set the engine to options then it will has a default value engine: `'fontforge'`.

But to use FontForge you need install the engine to your OS.<br/>
See instructions above (*Installation*).<br/>
<strong>Just rebuild icons after installation.</strong>

### ttf2woff2.js:3 Invalid asm.js: Invalid member of stdlib

Downgrade your Node version to 12.<br/>
See instructions above (*Important*).<br/>

## Links

* https://www.npmjs.com/package/grunt-webfont
* https://www.npmjs.com/package/grunt-m2webfont
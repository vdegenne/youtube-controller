# chrome-extension-starter

## Install
### Clone the project
```bash
git clone --depth 1 https://github.com/vdegenne/chrome-extension-starter.git extension_name
```
```diff
! Change extension_name with whatever you want to name your extension
```

### Enter the directory (Esc+. on Unix to paste the last argument, extension_name here)
```bash
cd extension_name
```
### Remove the git directory
```bash
rm -rf .git
```
### If your extension needs typescript, install the dependencies
```bash
npm i
```
```diff
! If you are not using TypeScript, create `content.js` at the root
```

### Modify the `manifest.json` file

You may want to change the `name` and the `content_scripts` keys

### If you need to inject your script into the page

Rename `content.js` to `inject.js` into the `content_scripts` block in the `manifest.json`

### Finally load the extension into your browser

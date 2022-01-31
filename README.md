## Base setup
---
* first $ `npm init`
* second $ `npm i eslint --save-dev`
* third $ `npx eslint --init`
* fourth $ `npm i typescript --save-dev`
* fifth $ `npx tsc --init`
* sixth $ ` tsconfig.json`
  * 
  ```
  {
    "compilerOptions": {
      "outDir": "./dist"
    },
    "include": ["src"]
  }
  ```
* seventh create folder src $ `mkdir src` 
* eighth create file index.ts 
    * $ `touch src/index.ts`
    * $ `code src/index.ts`

* ninth create file .gitignore 
  * $ `touch .gitignore`
  * $ `code ..gitignore`

* tenth `$ git init`

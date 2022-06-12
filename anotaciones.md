# Node + Express + Typescript
# https://www.youtube.com/watch?v=ZpY5KdGQvwI&t=11s
# https://github.com/fullstack-hy2020/misc/blob/master/diaryentries.json

1. iniciar un proyecto en blanco
  ``npm init -y``

2. Agregar deependencias
  ``npm install --save-dev ts-node typescript``
  ``npm install --save-dev @types/express``
  ``npm install --save-dev ts-node-dev``
  ``npm install --save-dev ts-standard``

3. iniciar un proyecto typescript en blanco
  ``tsc --init``

4. Crea el archivo de typescript en blanco 
**tsconfig..json**

 ```javascript:
  {
    "sourceMap": true, // permite debugging de los archivos .ts
    "outDir": "./dist", // directorio destino del build
    "rootDir": "./src", // directorio de fuentes
    "removeComments": true,
    "noEmitOnError": true, // no permite generar archivos con errores
    "strict": true, 
    "compilerOptions": {
      "noImplicitAny": false
    },
    "include": [
      "app.ts",
      "src/**/*.ts"
    ],
    "exclude": [
      "node_modules",
      "**/*.dev.ts"
    ]
  }
 ```

5. Instalar express
``npm install express -E`` // -E EXACT version


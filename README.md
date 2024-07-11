# React + TypeScript + Vite

# Use

```
yarn
```
or
```
npm install
```
# Then, input code files at src directory

# Use this comands at the root directory in terminal
yarn or npm

```
yarn dev
```

Ініціює розробницький сервер з гарячим перезавантаженням,
забезпечуючи швидкий цикл редагування та перегляду.

```
yarn build
```

Створює продакшн-версію додатка, яка є оптимізованою та готовою
до розгортання.

```
yarn lint
```

Виконує перевірку коду на відповідність стандартам та виявлення
можливих помилок.

```
yarn preview
```

Запускає сервер для перегляду продакшн-будови, допомагаючи
перевірити фінальний вигляд додатка перед його розгортанням.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

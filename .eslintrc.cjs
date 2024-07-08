module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'react-hooks', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/display-name': 0,

    'no-console': 1, //Không sử dụng console trong dự án
    'no-lonely-if': 1, // Tối ưu câu lệnh if esle
    'no-unused-vars': 1, //Khai báo biến khi không sử dụng
    'no-trailing-spaces': 1, //Không để khoảng trắng ở cuối mỗi dòng code
    'no-multi-spaces': 1, // Chỉ để 1 khoảng trắng ở mã code
    'no-multiple-empty-lines': 1, // Chỉ cách cách 2 dòng trở xuống
    'space-before-blocks': ['error', 'always'], // Trước các đấu mở ngoặc phải có khoảng trắng
    'object-curly-spacing': [1, 'always'], // Trước object phải có khoẳng trắng vd:var obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' };
    indent: ['warn', 2], //Tab trước mỗi đoạn code là 2
    semi: [1, 'never'], //Dấu chấm phải cuối dòng code
    quotes: ['error', 'single'], //Khai báo biến string phải dùng  ''
    'array-bracket-spacing': 1, //Array không có khoảng trắng vd:var arr = [ 'foo', 'bar' ];
    'linebreak-style': 0,
    'no-unexpected-multiline': 'warn',
    'keyword-spacing': 1,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'arrow-spacing': 1
  }
}

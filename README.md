# A demo project for using es6 and babel6

## 1.how to transform es6 file to es5 file

```shell
babel app -d dist
```

or

```shell
gulp
```

## 2.how to exec es6 file

```shell
babel-node app/index.js
```

## 3.how to exec es6 file(app/babel-polyfill.js) in Nodejs

```shell
node app/babel-register.js
```

## 4.how to use babel API

```shell
node app/babel-core.js

第一步 npm i 安装依赖
## Cookie.js
```js
nodemon cookie.js
```
## session-cookie存redis
启动redis
运行
```js
nodemon app.js
```
## session（这里主要是和下面的token对比）
```js
cd session
```
运行
```js
nodemon index.js
```

## token
```js
cd token
```
运行 
```js
nodemon index.js
```
1. 服务端无状态，token存在localstorage里
2. 每次请求在请求头带上：Authorization: Bearer <token>
3. token，签名验证原理（修改secret，将验证失败）
4. token的验证，主要是通过secret进行加密，验证签名是否一致

运行
```js
nodemon jsonwebtoken.js
```
1. https://base64.supfree.net/ 前两个都是base64编码，可使用base64解密 Header和Payload

## oAuth
1. 使用github登录，
2. 到github获取自己的client_id和client_secret（在index.js中设置）
3. 设置成功后的回调url这里设置为：http://localhost:7001/auth/github/callback
4. 以上在github上设置的位置：点击右上角头像-》settings-》developer settings -》OAuth Apps

```js
const config = {
    client_id: 'xxx',
    client_secret: 'xxx'
}
```
```js
cd oauth-simple
```
运行
```js
nodemon index.js
```
## sso（单点登录）
```js
cd sso/passport
```
运行
```js
nodemon app.js
cd sso/system 
```
运行
```js
PORT=8081 SERVER_NAME=A node app.js
PORT=8082 SERVER_NAME=B node app.js
```
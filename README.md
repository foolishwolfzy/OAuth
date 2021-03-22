第一步 npm i 安装依赖
#1 Cookie.js
运行 nodemon cookie.js
#2 session-cookie存redis
启动redis
运行 nodemon app.js
#session（这里主要是和下面的token对比）
cd session
运行
nodemon index.js

#token
cd token
运行 nodemon index.js
服务端无状态，token存在localstorage里
每次请求在请求头带上：Authorization: Bearer <token>

#token，签名验证原理（修改secret，将验证失败）
##token的验证，主要是通过secret进行加密，验证签名是否一致
运行
nodemon jsonwebtoken.js
https://base64.supfree.net/ 前两个都是base64编码，可使用base64解密 Header和Payload

#oAuth
使用github登录，
到github获取自己的client_id和client_secret（在index.js中设置）
设置成功后的回调url这里设置为：http://localhost:7001/auth/github/callback
以上在github上设置的位置：点击右上角头像-》settings-》developer settings -》OAuth Apps

const config = {
    client_id: 'xxx',
    client_secret: 'xxx'
}

cd oauth-simple
运行
nodemon index.js
#sso（单点登录）
cd sso/passport
运行
nodemon app.js
cd sso/system 
运行
PORT=8081 SERVER_NAME=A node app.js
PORT=8082 SERVER_NAME=B node app.js
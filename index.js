const express = require('express');
const path = require('path'); // 파일 경로 추가를 위한 path모듈 추가
const app = express();

// homepage의 경로를 문자열 변수로 저장
const home = path.join(__dirname, '/public', '/index.html');
console.log(home);

// 홈페이지 코드 작성
 app.get('/', (req, res) => {
    // HTML코드를 작성하여 Client에 응답한다.
    // 파일을 보내는 것이기 때문에 send -> sendFile로 변경
    res.sendFile(home);
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on PORT : ${PORT}`));
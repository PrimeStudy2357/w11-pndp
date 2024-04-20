const http = require("http");

const PORT = 3000;

/** 서버 인스턴스 생성
 * 요청을 받으면 Callback 함수에 지정한 로직을 실행하는 서버
 */
const server = http.createServer((request, response) => {
    /* response.writeHead(200);
    response.end(
        `<div><h1>Hello, World!</h1><p>Current Time : ${new Date()}</p></div>`
    ); */
    const now = new Date();
    console.log(
        `${now} :: 요청이 들어왔습니다. (요청지${request.socket.remoteAddress})`
    );

    response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
    });

    response.end(
        `<div><h1>Hello, World!</h1><p>Current Time : ${now}</p></div>`
    );
});

//서버 실행
server.listen(PORT, () => {
    console.log(`${PORT} 포트에서 웹 서버 프로그램 대기 중`);
});
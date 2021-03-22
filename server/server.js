const io = require("socket.io")({
    cors: {
      origin: "*"
    }
});

io.on('connection', client => {

    console.log('connection of : ', client.id);

    client.on('sendName', function (userName) {
        console.log(userName);
    });

});

io.listen(process.env.PORT || 3000);
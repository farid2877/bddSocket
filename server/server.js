const io = require("socket.io")({
    cors: {
      origin: "*"
    }
});

const {Client} = require ('pg');
const client = new Client ({

    user : "gpvzhfuiqdshew",
    password: "1ab7f0f34559cb8904ecf272623ecca557dff235749e699a5e90f1cf24407843",
    host: "ec2-54-155-35-88.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database: "d3pvam5rhqeiss"

});

client.connect()
.then(() => console.log("connecté avec succès"))
.catch(e => console.log(e))
.finally(() => client.end()) 


io.on('connection', clientSocket => {

    console.log('connection of : ', clientSocket.id);

    clientSocket.on('sendName', function (userName) {
        console.log(userName);
    });

});

io.listen(process.env.PORT || 3000);
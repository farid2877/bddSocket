const io = require("socket.io")({
    cors: {
      origin: "*"
    }
});

const {Client} = require ('pg');
const client = new Client ({

    // Comment for deploy
    // user : "postgres",
    // password: "Manigance77",
    // host: "127.0.0.1",
    // port: 5432,
    // database: "postgres"


    // Uncomment for deploy
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }

});

client.connect()
.then(() => console.log("connecté avec succès"))

// .then(() => console.log("connecté avec succès"))
// .then(() => client.query("INSERT INTO utilisateur (id,nom,prenom)values(4,'Johnny','Burnout')"))
// .catch(e => console.log(e))
// .finally(() => client.end()) 


io.on('connection', clientSocket => {

    console.log('connection of : ', clientSocket.id);

    clientSocket.on('sendName', async function (name, familyName) {
        console.log('Function sendName');

        let text = "INSERT INTO utilisateur(nom,prenom) VALUES($1,$2) RETURNING *"
        let values = [name, familyName];

        try {
            await client.query(text, values);
            console.log("Insert " + name + " " + familyName)
        }
        catch (ex) {
            console.log('Failed to execute :' + ex);
        }
        // finally {
        //     await client.end();
        //     console.log("Cleaned");
        // }

    });

});


io.listen(process.env.PORT || 3000);

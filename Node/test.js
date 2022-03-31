console.log("Juicy")
const cassandra = require("cassandra-driver")

const client = new cassandra.Client({
    contactPoints: ["localhost"],
    localDataCenter: 'datacenter1',
    keyspace: 'sharkbait'
  });

//const query = 'INSERT INTO Users (username,displayName,password) VALUES (?,?,?)'
const query = 'SELECT * FROM Users'

// Inserting items into the database by the user 
var username = "MScott123"
var displayName = "MichaelScott"
var password = "Password123"  


//client.execute(query,[username,displayName,password], {prepare: true})
  client.execute(query).then((result)=>{
    for (var i = 0; i < result.rows.length; i++) {
        console.log(result.rows[i])
        // For each row it prints whats inside the rows
    } 
  })

var mongooes = require("mongoose");


async function connectToDb(database = "SystemDatabase")
{
    const mongo_url = "mongodb+srv://medicare123:12345@medicaredatabase.tf6sovc.mongodb.net/"+database+"?retryWrites=true&w=majority"
    try{
        await mongooes.connect(mongo_url);
        console.log("Connection Successful...");
    }
    catch(e){
        console.log("MongoDb Connection Fail..."+e);
    }
}
async function disconnectToDb()
{
    try{
        mongooes.disconnect();
        console.log("Connection Disconnected...");
    }
    catch(e){
        console.log("MongoDb Disconnection Fail..."+e);
    }
}

module.exports = {connectToDb,disconnectToDb};

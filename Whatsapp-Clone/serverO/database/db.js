import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://anshul:12345@ac-d5ihvxt-shard-00-00.byg0vmy.mongodb.net:27017,ac-d5ihvxt-shard-00-01.byg0vmy.mongodb.net:27017,ac-d5ihvxt-shard-00-02.byg0vmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-81lczn-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
  
    
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;


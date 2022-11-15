import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://sachinrastogi:kroopai@ac-jvs9qkx-shard-00-00.jpz2fyt.mongodb.net:27017,ac-jvs9qkx-shard-00-01.jpz2fyt.mongodb.net:27017,ac-jvs9qkx-shard-00-02.jpz2fyt.mongodb.net:27017/?ssl=true&replicaSet=atlas-twb0r6-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;
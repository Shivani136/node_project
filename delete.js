const dbConnect = require("./ mongodb")

const deleteData = async()=>{
    let data= await dbConnect();
    let result = await data.deleteMany(
        { name:'ghjhj'})
        console.warn(result);
        if(result.acknowledged)
        {
            console.warn("data is deleted");
        }

}
deleteData();
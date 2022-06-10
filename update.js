const dbConnect = require("./ mongodb")

const updateData = async()=>{
    let data= await dbConnect();
    let result = await data.update(
        { name:'abcd'},{$set:{name:"xyz",age:50}}

    )
    console.warn(result);
}
updateData();
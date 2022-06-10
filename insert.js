const dbConnect = require("./ mongodb")
const insert = async()=>{
    const db= await dbConnect();
    const result = await db.insert(
        [
            {name:"sdsf",email:"abc@gmail.com",age:12,place:"us", phone:12335357},
            {name:"ghjhj",email:"abc@gmail.com",age:12,place:"uk", phone:12335357} // insert multiple record at the same time 
        ]
    )
    if(result.acknowledged){
        console.log("data is insert")
    }

}
insert();
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions,{answers}  from "../database/data.js";
//import questions, {answers} from "../database/data1.js"


//get all questions
export async function getQuestions(req,res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}



//insert all questions
/*export async function insertQuestions(req,res){
    try {
        Questions.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error})
    }
}*/

//insert all questions
export async function insertQuestions(req, res) {
    try {
        // Assuming questions and answers are arrays of objects
        //const {questions, answers } = req.body; // Assuming data is sent in the request body

        const insertedData = await Questions.insertMany({ questions, answers });

        res.json({ msg: "Data Saved Successfully" });
    } catch (error) {
        res.json({ error });
    }
}

//delete all questions
export async function dropQuestions(req,res){
    try {
       await Questions.deleteMany();
       res.json({ msg: "Questions Deleted Sucessfully...!"}); 
    } catch (error) {
        res.json({ error})
    }
}

//get al results
export async function getResult(req,res){
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
        res.json({ error})
    }
}

//post all results
/*export async function storeResult(req,res){
    try {
       const { username, result, attempts, points, achived} = req.body;
       if(!username && !result) throw new Error ("Data Not Provided...!");
       
       Results.create({ username, result, attempts, points, achived}, function(err,data){
        res.json({msg: "Result Saved Sucessfully...!"})
       })

    } catch (error) {
        res.json({ error}) 
    }
}*/


//post all results
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;

        if (!username || !result) {
            throw new Error("Username and Result are required.");
        }
        Results.create({ username, result, attempts, points, achived })
        .then(createdResult => {
          // Handle the created result here
        })
        .catch(error => {
          // Handle any errors that occurred during creation
        });
        //const createdResult = await Results.create({ username, result, attempts, points, achived });
        
        res.json({ msg: "Result Saved Successfully"});
    } catch (error) {
        res.json({ error })
    }
}







//delete all results
export async function dropResult(req,res){
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Sucessfully...!"})
    } catch (error) {
        res.json({ error})
    }
}
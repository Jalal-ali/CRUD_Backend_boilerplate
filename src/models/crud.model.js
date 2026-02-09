import mongoose from "mongoose";
import { type } from "node:os";
import { title } from "node:process";

const Schema = mongoose.Schema;

const CrudSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required !"]
    },
    description : {
        type: String,
        required: [true, "Description is required !"]
    },
    createdAt : {
        type : Date,
        default : Date.now 
    },
},
    {
        timestamps : true
    }
);
export default mongoose.model("crud", CrudSchema)
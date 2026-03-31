import mongoose, { model } from "mongoose";


interface feedback {name:string,feedback:string};

const feedbackschema = new mongoose.Schema<feedback>({
    name:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
})

const FeedBack = mongoose.models.FeedBack || model<feedback>('Feedback',feedbackschema)

export default FeedBack;
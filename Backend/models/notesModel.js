import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Note title is required'],
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Note content is required'],
      trim: true
    }
  });

  const notesModel = mongoose.models.note || mongoose.model('note', noteSchema)

  export default notesModel;
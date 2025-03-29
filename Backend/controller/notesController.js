import notesModel from "../models/notesModel.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await notesModel.find({});
        if (!notes) {
            return res.status(404).json({ success: false, message: "Error fetching the notes" });
        }
        return res.status(200).json({ success: true, notes, message: "Notes fetched Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

export const createNotes = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ success: false, message: "Title or Content are required" });
    }

    try {
        const newNote = new notesModel({
            title,
            content,
            createdAt: Date.now()
        });

        await newNote.save();

        return res.status(201).json({ success: true, message: "Note saved successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

export const deleteNotes = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ success: false, message: "ID is required" });
    }

    try {
        await notesModel.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Note deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

export const updateNotes = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!id || !title || !content) {
        return res.status(400).json({ success: false, message: "ID, title, and content are required" });
    }

    try {
        const updatedNote = await notesModel.findByIdAndUpdate(
            id,
            { title, content },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }

        return res.status(200).json({ success: true, note: updatedNote, message: "Note updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const replaceNotes = async (req, res) => {
    const { notes } = req.body;
  
    if (!Array.isArray(notes) ) {
      return res
        .status(400)
        .json({ success: false, message: 'Notes array is required and should not be empty.' });
    }
  
    try {
      // Delete all existing notes
      await notesModel.deleteMany({});

      if(notes.length === 0){
        return res.json({ success: true, message: 'Notes saved successfully',});
      }
  
      // Insert the new notes
      const insertedNotes = await notesModel.insertMany(notes);
  
      return res.status(200).json({
        success: true,
        message: 'Notes saved successfully',
        data: insertedNotes,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while saving the notes',
        error: error.message,
      });
    }
  };
  


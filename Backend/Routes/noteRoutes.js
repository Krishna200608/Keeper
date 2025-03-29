import express from 'express';
import { createNotes, deleteNotes, getNotes, replaceNotes, updateNotes } from '../controller/notesController.js';

const notesRouter = express.Router();

notesRouter.get('/notes', getNotes);
notesRouter.post('/create-notes', createNotes);
notesRouter.post('/create-notes', createNotes);
notesRouter.delete('/notes/:id', deleteNotes);
notesRouter.post('/notes/replace-notes', replaceNotes);

export default notesRouter;
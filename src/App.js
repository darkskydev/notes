import React, { useState, Fragment } from 'react'
import AddNoteForm from './forms/AddNoteForm'
import EditNoteForm from './forms/EditNoteForm'
import Notes from './tables/Notes'

const App = () => {
    // Data
    const notesData = [
        { id: 1, noteSubject: 'Tania', noteText: 'floppydiskette' },
        { id: 2, noteSubject: 'Craig', noteText: 'siliconeidolon' },
        { id: 3, noteSubject: 'Ben', noteText: 'benisphere' },
    ]

    const initialFormState = { id: null, noteSubject: '', noteText: '' }

    // Setting state
    const [ notes, setNotes ] = useState(notesData)
    const [ currentNote, setCurrentNote ] = useState(initialFormState)
    const [ editing, setEditing ] = useState(false)

    // CRUD operations
    const addNote = note => {
        note.id = notes.length + 1
        setNotes([ ...notes, note ])
    }

    const deleteNote = id => {
        setEditing(false)

        setNotes(notes.filter(note => note.id !== id))
    }

    const updateNote = (id, updatedNote) => {
        setEditing(false)

        setNotes(notes.map(note => (note.id === id ? updatedNote : note)))
    }

    const editRow = note => {
        setEditing(true)

        setCurrentNote({ id: note.id, noteSubject: note.noteSubject, noteText: note.noteText })
    }

    return (
        <div className="container">
            <h1>Notes</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit note</h2>
                            <EditNoteForm
                                editing={editing}
                                setEditing={setEditing}
                                currentNote={currentNote}
                                updateNote={updateNote}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2>Add note</h2>
                            <AddNoteForm addNote={addNote} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View notes</h2>
                    <Notes notes={notes} editRow={editRow} deleteNote={deleteNote} />
                </div>
            </div>
        </div>
    )
}

export default App

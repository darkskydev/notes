import React, { useState } from 'react'

const AddNoteForm = props => {
    const initialFormState = { id: null, noteSubject: '', noteText: '' }
    const [note, setNote] = useState(initialFormState)

    const handleInputChange = event => {
        const { noteSubject, value } = event.target

        setNote({ ...note, [noteSubject]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!note.noteSubject || !note.noteText) return

                props.addNote(note)
                setNote(initialFormState)
            }}
        >
            <label>Name</label>
            <input type="text" noteSubject="noteSubject" value={note.noteSubject} onChange={handleInputChange} />
            <label>NotenoteSubject</label>
            <input type="text" noteSubject="noteText" value={note.noteText} onChange={handleInputChange} />
            <button>Add new note</button>
        </form>
    )
}

export default AddNoteForm

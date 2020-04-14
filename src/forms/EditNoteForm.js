import React, { useState, useEffect} from 'react'

const EditNoteForm = props => {
    const [note, setNote] = useState(props.currentNote)

    const handleInputChange = event => {
        const { noteSubject, value } = event.target

        setNote({ ...note, [noteSubject]: value })
    }

    useEffect(() => {
        setNote(props.currentNote)
    }, [props])

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateNote(note.id, note)
            }}
        >
            <label>Name</label>
            <input type="text" noteSubject="noteSubject" value={note.noteSubject} onChange={handleInputChange} />
            <label>NotenoteSubject</label>
            <input type="text" noteSubject="noteText" value={note.noteText} onChange={handleInputChange} />
            <button>Update note</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export default EditNoteForm

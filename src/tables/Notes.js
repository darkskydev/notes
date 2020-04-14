import React from 'react'

const Notes = props => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>noteSubject</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.notes.length > 0 ? (
            props.notes.map(note => (
                <tr key={note.id}>
                    <td>{note.noteSubject}</td>
                    <td>{note.noteText}</td>
                    <td>
                        <button
                            onClick={() => {
                                props.editRow(note)
                            }}
                            className="button muted-button"
                        >
                            Edit
                        </button>
                        <button className="button muted-button">Delete</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No notes</td>
            </tr>
        )}
        </tbody>
    </table>
)

export default Notes

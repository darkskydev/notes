import React, { useState } from 'react'
import Notes from './tables/Notes'
import AddNoteForm from './forms/AddNoteForm'
import EditNoteForm from './forms/EditNoteForm'

const App = () => {
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
    ]

    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    const editRow = user => {
        setEditing(true)

        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    return (
        <div className="flex-large">
            {editing ? (
                <div>
                    <h2>Edit user</h2>
                    <EditNoteForm
                        setEditing={setEditing}
                        currentUser={currentUser}
                        updateUser={updateUser}
                    />
                </div>
            ) : (
                <div>
                    <h2>Add user</h2>
                    <AddNoteForm addUser={addUser} />
                </div>
            )}
        </div>
    )
}

export default App

import { useEffect, useState } from 'react';
import { getUser } from '../../utilities/users-service';
import * as notesAPI from '../../utilities/notes-api';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteBox from '../../components/NoteBox/NoteBox';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([
    {},
    {}
  ]);
  const blankNote = {
    text: '',
    user: user
  }
  const [newNote, setNewNote] = useState(blankNote);

  // useEffect(function() {
  //   async function getNotes() {
  //     const notes = await notesAPI.getAll();
  //   }
  // })

  function handleChange(evt) {
    setNewNote({
      ...newNote,
      [evt.target.name]: evt.target.value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await notesAPI.addNote(newNote);
    setNewNote(blankNote);
  }

  return (
    <main className="App">
      { user ?
          <section>
            <NavBar user={user} setUser={setUser} />

            <div>
              {notes.length ?
                <div>
                  {notes.map((note, idx) => (
                    <NoteBox key={idx} />
                  ))}
                </div>
              :
                <p>No Notes Yet!</p>
              }
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <textarea 
                  name="text"
                  type="text" 
                  value={newNote.text}
                  placeholder='New Note!'
                  onChange={handleChange}
                />
                <button type="submit">Add Note</button>
              </form>
            </div>

          </section>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

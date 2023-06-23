import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteBox from '../../components/NoteBox/NoteBox';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([
    {},
    {},
  ]);

  return (
    <main className="App">
      { user ?
          <section>
            <NavBar user={user} setUser={setUser} />
            {notes.length ?
              <div>
                {notes.map((note, idx) => (
                  <NoteBox />
                ))}
              </div>
            :
              <p>No Notes Yet!</p>
            }
          </section>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

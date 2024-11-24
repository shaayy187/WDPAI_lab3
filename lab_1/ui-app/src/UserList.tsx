import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

<<<<<<< HEAD

interface User {
    index: number;
    name: string;
    surname: string;
=======
interface User {
    id: number;
    first_name: string;
    last_name: string;
>>>>>>> master
    role: string;
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState({
<<<<<<< HEAD
        name: '',
        surname: '',
=======
        first_name: '',
        last_name: '',
>>>>>>> master
        role: '',
    });
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

<<<<<<< HEAD
    // Pobieranie u�ytkownik�w z backendu -> tutaj jest problem.
    useEffect(() => {
        axios
            .get('http://localhost:8000/users/')
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);


    // Dodawanie u�ytkownika
=======
    // Pobieranie użytkowników z backendu
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/users/')
            .then((response) => {
                console.log('Fetched users:', response.data);
                setUsers(response.data);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);
    
    // Dodawanie użytkownika
>>>>>>> master
    const handleAddUser = () => {
        if (!privacyAccepted) {
            alert('You must agree to the privacy policy to proceed.');
            return;
        }
<<<<<<< HEAD
        if (!newUser.name || !newUser.surname || !newUser.role) {
=======
        if (!newUser.first_name || !newUser.last_name || !newUser.role) {
>>>>>>> master
            alert('All fields are required.');
            return;
        }
        axios
<<<<<<< HEAD
            .post('http://localhost:8000/users/', newUser)
            .then((response) => setUsers(response.data.users))
            .catch((error) => console.error('Error adding user:', error));
    };

    // Usuwanie u�ytkownika
    const handleDeleteUser = (index: number) => {
        axios
            .delete(`http://localhost:8000/users/?index=${index.toString()}`)
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((error) => console.error("Error deleting user:", error));
=======
            .post('http://localhost:8000/api/users/', newUser)
            .then((response) => setUsers(prevUsers => [...prevUsers, response.data]))  
            .catch((error) => console.error('Error adding user:', error));
    };

    // Usuwanie użytkownika
    // Tutaj react też ma usuwać u siebie, czy jakoś to łączymy z bazą?
    const handleDeleteUser = (id: number) => {
        axios
            .delete(`http://localhost:8000/api/users/${id}/`)  
            .then(() => {
                setUsers(prevUsers => prevUsers.filter((user) => user.id !== id));  
            })
            .catch((error) => console.error('Error deleting user:', error));
>>>>>>> master
    };

    return (
        <div className="container">
            <div id="putinto">
                <h2>Let's level up your brand, together</h2>
<<<<<<< HEAD
                <h3>Enter Name</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={e => setNewUser({ ...newUser, name: e.target.value })
                    }
                />
                <h3>Enter Surname</h3>
                <input
                    type="text"
                    placeholder="Surname"
                    value={newUser.surname}
                    onChange={e => setNewUser({ ...newUser, surname: e.target.value })
=======
                <h3>Enter First Name</h3>
                <input
                    type="text"
                    placeholder="First Name"
                    value={newUser.first_name}
                    onChange={(e) =>
                        setNewUser({ ...newUser, first_name: e.target.value })
                    }
                />
                <h3>Enter Last Name</h3>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={newUser.last_name}
                    onChange={(e) =>
                        setNewUser({ ...newUser, last_name: e.target.value })
>>>>>>> master
                    }
                />
                <h3>Role</h3>
                <input
                    type="text"
                    placeholder="Role"
                    value={newUser.role}
<<<<<<< HEAD
                    onChange={e => setNewUser({ ...newUser, role: e.target.value })}
=======
                    onChange={(e) =>
                        setNewUser({ ...newUser, role: e.target.value })
                    }
>>>>>>> master
                />
                <div id="privacy">
                    <input
                        type="checkbox"
                        id="privacyPolicy"
                        checked={privacyAccepted}
<<<<<<< HEAD
                        onChange={e => setPrivacyAccepted(e.target.checked)} />
=======
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    />
>>>>>>> master
                    <label htmlFor="privacyPolicy" className="privacyPolicy">
                        You agree to our friendly{' '}
                        <a href="https://www.w3schools.com" target="_blank">
                            privacy policy.
                        </a>
                    </label>
                </div>
                <button id="submitbut" onClick={handleAddUser}>
                    SUBMIT
                </button>
            </div>

            <div id="usersList">
                {users.map((user) => (
<<<<<<< HEAD
                    <div key={user.index} className="user-item">
                        <div>
                            <span>
                                {user.name} {user.surname}
                            </span>
                            <small>{user.role}</small>
                        </div>
                        <button onClick={() => handleDeleteUser(user.index)}>
=======
                    <div key={user.id} className="user-item">
                        <div>
                            <span>
                                {user.first_name} {user.last_name}
                            </span>
                            <small>{user.role}</small>
                        </div>
                        <button onClick={() => handleDeleteUser(user.id)}>
>>>>>>> master
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;

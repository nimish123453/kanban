import React, { useState, useEffect } from 'react';
import './App.css';
import KanbanBoard from './KanbanBoard';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('viewState', JSON.stringify({ groupingOption, sortingOption }));
  }, [groupingOption, sortingOption]);

  return (
    <div className="app">
      <div className="controls">
        <button onClick={() => setGroupingOption('status')}>Group by Status</button>
        <button onClick={() => setGroupingOption('user')}>Group by User</button>
        <button onClick={() => setGroupingOption('priority')}>Group by Priority</button>

        <button onClick={() => setSortingOption('priority')}>Sort by Priority</button>
        <button onClick={() => setSortingOption('title')}>Sort by Title</button>
      </div>

      <KanbanBoard tickets={tickets} users={users} groupingOption={groupingOption} sortingOption={sortingOption} />
    </div>
  );
};

export default App;

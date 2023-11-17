import React from 'react';
import './TicketCard.css';

const getUserById = (userId, users) => {
  const user = users.find((user) => user.id === userId);
  return user ? user.name : 'Unknown User';
};

const TicketCard = ({ ticket, users }) => {
  return (
    <div className={`ticket-card priority-${ticket.priority}`}>
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>User: {getUserById(ticket.userId, users)}</p>
      <p>Priority: {ticket.priority}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TicketCard;

import React from 'react';
import TicketCard from './TicketCard';
import './TicketColumn.css'; // Import the CSS file if you have one

const TicketColumn = ({ title, tickets, users }) => {
  return (
    <div className="ticket-column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} users={users} />
      ))}
    </div>
  );
};

export default TicketColumn;

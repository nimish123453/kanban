import React from 'react';
import TicketColumn from './TicketColumn';

const KanbanBoard = ({ tickets, users, groupingOption, sortingOption }) => {
  const getGroupedAndSortedTickets = () => {
    // This is a placeholder, replace it with your actual logic
    return {
      todo: tickets.filter((ticket) => ticket.status === 'Todo'),
      inProgress: tickets.filter((ticket) => ticket.status === 'In progress'),
      done: tickets.filter((ticket) => ticket.status === 'Done'),
    };
  };

  const groupedAndSortedTickets = getGroupedAndSortedTickets();

  return (
    <div className="kanban-board">
      <TicketColumn title="To Do" tickets={groupedAndSortedTickets.todo} users={users} />
      <TicketColumn title="In Progress" tickets={groupedAndSortedTickets.inProgress} users={users} />
      <TicketColumn title="Done" tickets={groupedAndSortedTickets.done} users={users} />
      {/* Render additional columns based on the grouping option */}
    </div>
  );
};

export default KanbanBoard;




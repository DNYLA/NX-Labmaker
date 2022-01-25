import { TicketModal } from './ticket';
import styled from 'styled-components';
import { Tickets } from '@labmaker/shared';
import { useNavigate } from 'react-router-dom';

interface TicketsListProps {
  tickets: Tickets;
  createEvent: () => void; //Prop Drill create event because its pointless re-writing it inside here
}

export default function TicketsList({
  tickets,
  createEvent,
}: TicketsListProps) {
  return (
    <StyledTickets>
      <CreateButton onClick={createEvent}>Create Ticket</CreateButton>
      {/* Center This */}
      {tickets.active.length > 0 && (
        <>
          <h1>Active: </h1>
          <TicketContainer>
            {tickets.active.map((ticket) => {
              return <TicketModal ticket={ticket} />;
            })}
          </TicketContainer>
        </>
      )}

      {/* Center This */}
      {tickets.completed.length > 0 && (
        <>
          <h1>Completed: </h1>
          <TicketContainer>
            {tickets.completed.map((ticket) => {
              return <TicketModal ticket={ticket} />;
            })}
          </TicketContainer>
        </>
      )}
    </StyledTickets>
  );
}

const StyledTickets = styled.div`
  text-align: center;
  /* display: flex; */
`;

const TicketContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-flow: row wrap;
  /* flex: wrap; */
  justify-content: center;
  user-select: none;
  max-width: 80%;
  max-height: 1000px;
  margin: 15px 0px;
  /* overflow: scroll; */
`;

const CreateButton = styled.button`
  cursor: pointer;
  display: flex;
  float: right;
  background-color: ${(p) => p.theme.input.backCol};
  color: #fff;
  font-size: 20px;
  font-family: 'Archivo Black', 'Roboto', sans-serif;
  width: fit-content;
  padding: 0px 15px;
  border: none;
  border-radius: 4px;
  :hover {
    background-color: #1a1a1a;
  }
`;
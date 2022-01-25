import {
  InputBox,
  InputDate,
  InputTime,
  ModalPopup,
  SwitchToggle,
  TextArea,
} from '@labmaker/ui';
import { Ticket } from '@labmaker/shared';
import moment from 'moment';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ConvertType, ConvertEdu, ConvertSbj } from '../../utils/helpers';

interface TicketContainerProps {
  subject: string;
  type: string;
  budget: number;
  due: Date;
}

interface TicketProps {
  ticket: Ticket;
}

function TicketContainer({ subject, type, budget, due }: TicketContainerProps) {
  return (
    <TicketContainerStyle>
      <h4>
        {subject} - {type}
      </h4>
      <h4>${budget}</h4>
      <h4>{moment(due, 'YYYYMMDD').toNow(true)}</h4>
    </TicketContainerStyle>
  );
}

export function TicketModal({ ticket }: TicketProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    id,
    subject,
    type,
    budget,
    due,
    education,
    paid,
    completed,
    additionalInfo,
  } = ticket;
  const [dueDateObj, setDueDate] = useState(due);

  useEffect(() => {
    setDueDate(new Date(due));
  }, [due]);

  const handleResign = () => {
    //Call API to Resign Tutor.
    //Force Reload data from API || Locally Delete Ticket
    console.log('Resigning Tutor from Case');
  };

  const handleGoToChannel = () => {
    //Redirect User to Discord Channel in New Tab
    console.log('Redirecting to Discord Channel in New Tab');
  };

  return (
    <ModalPopup
      title={`Ticket ${id}`}
      open={isOpen}
      setOpen={setIsOpen}
      design={
        <TicketContainer
          subject={ConvertSbj(subject)}
          type={ConvertType(type)}
          budget={budget}
          due={due}
        />
      }
    >
      <InputBox message="Type" value={ConvertType(type)} disabled={true} />
      <InputBox message="Subject" value={ConvertSbj(subject)} disabled={true} />
      <InputBox
        message="Education"
        value={ConvertEdu(education)}
        disabled={true}
      />
      <InputBox
        message="Budget"
        value={budget.toString()}
        prefix={'$'}
        type={'number'}
        disabled={true}
      />
      <InputBox message="Due" value={due.toString()} disabled={true} />
      <InputDate message="Due Date" value={dueDateObj} />
      {/* Doesnt Work Update to InputBox Or Fix (Input Box Probably Better) */}
      <InputTime message="Due Time" value={dueDateObj} />

      <TextArea
        message="Additional Info"
        value={additionalInfo}
        disabled={true}
      />
      <SwitchToggle
        toggled={paid}
        onToggle={() => console.log('x')}
        message={'Paid'}
      />
      <SwitchToggle
        toggled={completed}
        onToggle={() => console.log('x')}
        message={'Completed'}
      />
      <ButtonContainer>
        {/* Can remove the close button if we can make the dialog box c lose when the user clicks outside */}
        <ModalButton onClick={() => setIsOpen(false)}>Close</ModalButton>
        <ModalButton onClick={handleResign}>Resign</ModalButton>
        <ModalButton onClick={handleGoToChannel}>Channel</ModalButton>
      </ButtonContainer>
    </ModalPopup>
  );
}

const TicketContainerStyle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 250px;
  height: 100px;
  background-color: ${(p) => p.theme.input.backCol};
  padding: 10px;
  flex-grow: 1;
  margin: 10px;

  :hover {
    background-color: ${(p) => p.theme.input.activeCol};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const ModalButton = styled.button`
  /* background-color: ${(p) => p.theme.navbar.item}; */
  background-color: #121212;
  color: ${(p) => p.theme.navbar.title};
  font-size: 19px;
  margin-right: 20px;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    color: ${(p) => p.theme.navbar.active};
  }
`;
function convertSubject(subject: string): string {
  throw new Error('Function not implemented.');
}
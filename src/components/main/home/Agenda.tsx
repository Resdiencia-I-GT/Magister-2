"use client"
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import "src/style/Agenda.css";

const Agenda = () => {
  const [events, setEvents] = useState([
    "Evento 1 - 10/27/2023",
    "Evento 2 - 11/15/2023",
    "Evento 3 - 12/05/2023",
    // Adicione outros eventos aqui
  ]);
  const [newEvent, setNewEvent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddEvent = () => {
    if (newEvent && selectedDate) {
      const formattedDate = format(selectedDate, "dd/MM/yyyy", { locale: ptBR });
      const eventText = `${newEvent} - ${formattedDate}`;
      setEvents([...events, eventText]);
      setNewEvent("");
      setSelectedDate(null);
    }
  };

  return (
    <div className="agenda-container">
      <header className="agenda-header">Agenda</header>
      <div className={`agenda ${events.length > 3 ? 'scrollable' : 'none '}`}>
        <div className="agenda-events">
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className="agenda-event">
                {event}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="add-event">
        <input
          type="text"
          placeholder="Nome do evento"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecione a data"
        />
        <button onClick={handleAddEvent}>Adicionar</button>
      </div>
    </div>
  );
};

export default Agenda;

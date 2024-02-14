import React, { useState } from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'


import styles from "./index.module.css"
import { ArrowRight, LocationMarker } from 'components';
import { useTheme } from 'lib';

/**
 * @typedef {import("@prismicio/client").Content.EventsBlockSlice} EventsBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventsBlockSlice>} EventsBlockProps
 * @param {EventsBlockProps}
 */

const ModalBox = ({children, hide}) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-10 flex items-center justify-center pointer-events-none">
      <div className="border m-6 sm:m-0 sm:w-4/5 md:w-3/5 lg:w-2/5 min-h-[120px] p-8 bg-secondary relative pointer-events-auto">
        <div className="absolute right-4 top-4">
          <button onClick={() => hide()}>✕</button>
        </div>
        {children}
      </div>
    </div>
  )
}

const EventsBlock = ({ slice }) => {
  const { currentTheme } = useTheme();

  const [selectedEvent, setSelectedEvent] = useState();

  return (
    <section>
      {selectedEvent && (
        <ModalBox hide={setSelectedEvent}>
          {selectedEvent.date && (
            <p className="text-lg">{selectedEvent.date}</p>
          )}
          {selectedEvent.title && (
            <p className="text-4xl mt-4 mb-6">{selectedEvent.title}</p>
          )}
          {selectedEvent.location && (
            <p className="space-x-2 flex selectedEvents-baseline text-lg">
              <LocationMarker className="h-4 w-auto inline-block" />
              <span>{selectedEvent.location}</span>
            </p>
          )}
          {selectedEvent.description && (
            <p className="space-x-2 flex items-baseline text-lg">
              <ArrowRight className="w-4 h-auto inline-block" />
              <span>{selectedEvent.description}</span>
            </p>
          )}
          {selectedEvent.information && (
            <div className="mt-8 text-lg">
              <PrismicRichText field={selectedEvent.information} />
            </div>
          )}
        </ModalBox>
      )}

      <div className={styles["events-title"]}>
        <p>{slice.primary.title}</p>
      </div>
      <div className={styles["events-block"]}>
        {slice.items.map((item, index) => (
          <div
            key={index}
            className={`${styles["event-item"]} ${styles[currentTheme]}`}
          >
            <div>
              {item.date && (
                <p className="text-lg">{item.date}</p>
              )}
              {item.title && (
                <p className="text-4xl mt-4 mb-6 font-display">{item.title}</p>
              )}
              {item.location && (
                <p className="space-x-3 flex items-baseline text-lg">
                  <LocationMarker className="h-4 w-4 inline-block" />
                  <span>{item.location}</span>
                </p>
              )}
              {item.description && (
                <p className="space-x-3 flex items-baseline text-lg">
                  <ArrowRight className="w-4 h-auto inline-block" />
                  <span>{item.description}</span>
                </p>
              )}
            </div>
            <div>
              {item.tickets_link.url ? (
                <PrismicLink
                  field={item.tickets_link}
                  className="bg-primary inline-block text-secondary px-2 py-1 text-lg mt-3 hover:bg-secondary hover:text-primary"
                >
                  Book Tickets
                </PrismicLink>
              ) : (
                <button
                  className="bg-primary text-secondary px-2 py-1 text-lg mt-3 hover:bg-secondary hover:text-primary"
                  onClick={() => setSelectedEvent(item)}
                >
                  More Info
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsBlock;

import {
    faChevronDown,
    faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import React, { useState } from 'react';
  
  export default function Accordion(props) {
    const { title, first, last } = props;

    const [expanded, setExpanded] = useState(false)
  
    return (
      <div className={` ${
        first
          ? 'border rounded-t-md'
          : last
            ? 'border-b rounded-b-md'
            : 'border-b'
      } border-l border-r border-gray-200 dark:border-gray-600`}>
        <div
          onClick={() => setExpanded(!expanded)}
          className={`${
            expanded
              ? 'border-gray-200 dark:border-gray-600 border-b'
              : ''
          } flex items-center justify-between cursor-pointer p-4`}
        >
          {expanded ? (
            <div className="flex items-center  font-medium">
              {props.header || title}
            </div>
          ) : (
            <div className="flex items-center ">
              <span className="font-medium">
                {props.header || title}
              </span>
            </div>
          )}
    
          <div>
            {expanded ? (
              <FontAwesomeIcon icon={faChevronRight} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={`${expanded ? 'block' : 'hidden'} p-4`}>
          {props.children}
        </div>
      </div>
    );
  }
  
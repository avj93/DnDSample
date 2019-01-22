import React, { PureComponent } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './styles.css';

export default class Row extends PureComponent {
  render() {
    const {
      row: {
        id,
        program_Id,
        long_name,
        order,
      },
      index,
    } = this.props;

    return (
      <Draggable
        draggableId={id}
        index={index}
      >
        {(provided, snapshot) => (
          <tr
            className={snapshot.isDragging ? "draggingRowContainer" : "rowContainer"}
            ref={provided.innerRef}
            { ...provided.draggableProps }
            { ...provided.dragHandleProps }
          >
            <td>{program_Id}</td>
            <td>{long_name}</td>
            <td>{order}</td>
          </tr>
        )}
      </Draggable>
    );
  }
}

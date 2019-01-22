import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './data/initial-data';
import DataTable from './dataTable.js';

class App extends React.Component {
  state = initialData;

  /* onDragEnd - when drag ends, required */
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    // dropped midway
    if (!destination)
      return;

    // dropped back at the same place of origin
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;

    let newState = {};

    // Vertical drag and drop of rows within the column ie Moving within same list(column)
    const newRowIds = Array.from(this.state.rowIds);

    newRowIds.splice(source.index, 1);
    newRowIds.splice(destination.index, 0, draggableId);

    this.setState({
      ...this.state,
      rowIds: newRowIds,
    });
  }

  render() {
    const rows = this.state.rowIds.map(rowId => this.state.rows[rowId]);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <DataTable rows={rows} />
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

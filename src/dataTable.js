import React, { PureComponent, Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Row from './row.js';
import './styles.css';
import constants from './data/constants';

class Rows extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.rows === this.props.rows) return false;

    return true;
  }

  render() {
    return (this.props.rows.map((row, index) => <Row key={row.id} row={row} index={index} />));
  }
}

export default class DataTable extends PureComponent {
  render() {
    const { header1, header2, header3, tableId } = constants;

    return (
      <table>
        <thead>
          <tr>
            <th>{header1}</th>
            <th>{header2}</th>
            <th>{header3}</th>
          </tr>
        </thead>
        <Droppable droppableId={tableId}>
          {(provided, snapshot) => (
            <tbody ref={provided.innerRef} {...provided.droppablePops}>
              <Rows rows={this.props.rows} />
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </table>
    );
  }
}

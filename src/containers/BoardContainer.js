import CardSubscription from './CardSubscription';
import ListSubscription from './ListSubscription';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Board from '../components/Board/Board';

export default ListSubscription(
  CardSubscription(DragDropContext(HTML5Backend)(Board))
);

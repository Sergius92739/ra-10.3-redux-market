import './CardList.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Card from '../Card/Card';

export default function CardList(): JSX.Element {
  const { list } = useSelector((state: RootState) => state);

  return (
    <ul className="app__list list">
      {list && list.map((el) => <Card key={el.id} {...el} />)}
    </ul>
  )
}
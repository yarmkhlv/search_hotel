import { TopSelect } from './svg/top_select';
import { BottomSelect } from './svg/bottom_select';

export function CustomSelect(props: {
  statusActive: { id: number; sort: string };
  text: string;
  idBtn: number;
  setStatusActive: (arg: any) => void;
}) {
  const { statusActive, text, idBtn, setStatusActive } = props;
  const thisBtnActive = statusActive.id === idBtn;

  const coloredBorderBtn = thisBtnActive ? 'sel-active-btn' : null;
  const coloredText = thisBtnActive ? 'sel-active-text' : null;

  function changeActive(sort: string) {
    const changeSort = sort === 'increase' ? 'decrease' : 'increase';
    setStatusActive((prevState: { id: number; sort: string }) => ({
      ...prevState,
      id: idBtn,
      sort: changeSort,
    }));
  }

  return (
    <button
      className={`favorites__selects__btn ${coloredBorderBtn}`}
      type="button"
      onClick={() => changeActive(statusActive.sort)}
    >
      <span className={`favorites__selects__text ${coloredText}`}>{text}</span>
      <div className="favorites__selects__container">
        <TopSelect thisBtnActive={thisBtnActive} sort={statusActive.sort} />
        <BottomSelect thisBtnActive={thisBtnActive} sort={statusActive.sort} />
      </div>
    </button>
  );
}

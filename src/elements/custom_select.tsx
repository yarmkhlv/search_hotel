import { TopSelect } from './svg/top_select';
import { BottomSelect } from './svg/bottom_select';

export function CustomSelect(props: { active: boolean; name: string }) {
  const { active, name } = props;
  const coloredBorderBtn = active ? 'sel-active-btn' : null;
  const coloredText = active ? 'sel-active-text' : null;
  return (
    <button
      className={`favorites__selects__btn ${coloredBorderBtn}`}
      type="button"
    >
      <span className={`favorites__selects__text ${coloredText}`}>{name}</span>
      <div className="favorites__selects__container">
        <TopSelect active />
        <BottomSelect active={false} />
      </div>
    </button>
  );
}

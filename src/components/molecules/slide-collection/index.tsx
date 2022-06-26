import { Button, SlideBottom } from "components/atoms";
import CardList from "../card-list";

interface IPropsSlideCollection {
  data: any[];
  remove: (id: any) => void;
  open?: boolean;
  onAdd: () => void;
  cancel: () => void;
}

const SlideCollection = (props: IPropsSlideCollection) => {
  const { data, remove, open, onAdd, cancel } = props;
  return (
    <SlideBottom open={open} style={{ background: "black" }}>
      <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
        <Button onClick={onAdd} fullWidth>
          Add Collection
        </Button>
        <Button onClick={cancel} fullWidth>
          Cancel
        </Button>
        {Array.from(data || []).map((item: any, index: number) => {
          return (
            <CardList key={index} item={item} onClick={() => remove(item)} />
          );
        })}
      </div>
    </SlideBottom>
  );
};

export default SlideCollection;

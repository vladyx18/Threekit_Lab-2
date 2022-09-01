import { useAttribute } from '@threekit-tools/treble';

export function Tiles(props) {
  const { attribute } = props;
  if (!attribute) return <></>;
  return (
    <div className="grid grid-cols-2 gap-1">
      {attribute?.values.map((item, i) => {
        return (
          <button
            key={i}
            type="button"
            onClick={item.handleSelect}
            className={`group rounded-md h-14 px-5 mb-1 mr-5 text-base cursor-pointer border border-solid hover:border-zinc-800 hover:bg-gray-200 ${
              item.selected
                ? 'border-zinc-800 bg-gray-200 text-zinc-800'
                : 'text-zinc-800 bg-gray-200 border-gray-200'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default function TilesAttribute(props) {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;
  return <Tiles attribute={attribute} />;
}

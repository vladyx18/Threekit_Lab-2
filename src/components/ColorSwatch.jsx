import { useAttribute } from '@threekit-tools/treble';

export function ColorSwatch(props) {
  const { attribute } = props;
  if (!attribute) return <></>;
  return (
    <div>
      <div className="flex flex-row flex-wrap content-start">
        {attribute?.values.map((item, i) => {
          return (
            <button
              key={i}
              type="button"
              className={`group rounded h-max w-24 pt-3 pl-1 pr-1 mb-1 mr-1 border border-solid hover:border-zinc-700 ${
                item.selected
                  ? 'border-zinc-700 bg-zinc-700'
                  : 'border-gray-100'
              }`}
            >
              <img
                className="h-full w-full cursor-pointer"
                src={item.metadata?._thumbnail}
                onClick={item.handleSelect}
              />
              <span />
              <p
                className={
                  item.selected
                    ? 'text-slate-50 font-sans font-semibold'
                    : 'text-zinc-800 font-sans font-semibold'
                }
              >
                {item.name}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ColorSwatchAttribute(props) {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;
  return <ColorSwatch attribute={attribute} />;
}

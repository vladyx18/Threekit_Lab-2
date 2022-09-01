import { Children, useState, cloneElement } from 'react';
import { AttributeValue, CaretDownIcon } from '@threekit-tools/treble';

export function AccordionItem(props) {
  const { selected, handleSelect, label, children } = props;

  return (
    <div className="h-max w-full mt-6 mb-10 bg-gray-50 border border-solid border-x-0 border-b-0 border-gray-300 rounded-sm">
      <div
        onClick={handleSelect}
        className="h-12 flex flex-row place-content-between cursor-pointer px-3 items-center"
      >
        <div className="flex-column mt-8">
          <div className="h-max w-max flex-grow text-lg tracking-wide font-sans font-semibold">
            {label}
          </div>
          <div className="h-max flex-grow text-md tracking-wide font-sans font-normal">
            <AttributeValue attribute={label} />
          </div>
        </div>
        <div></div>
        <div className="h-max pt-8">
          <CaretDownIcon />
        </div>
      </div>
      <div
        className={`overflow-x-hidden overflow-y-hidden transition-all duration-300 ${
          selected ? 'h-max' : 'max-h-0'
        }`}
      >
        <div className="px-3 pb-4">
          <div className="pt-16">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Accordion(props) {
  const [selected, setSelected] = useState(undefined);

  const handleSelect = (idx) => setSelected(idx === selected ? undefined : idx);

  if (!props.children) return null;

  return Children.map(props.children, (child, idx) => {
    if (child.type !== AccordionItem) return null;
    return cloneElement(child, {
      selected: selected === idx,
      handleSelect: () => {
        if (child.props.onClick) child.props.onClick();
        handleSelect(idx);
      },
    });
  });
}

Accordion.AccordionItem = AccordionItem;

export default Accordion;

export type RadioItemProps<T extends string | number> = {
  id: T;
  name: string;
  description?: string;
};

type InputRadioProps<T extends string | number> = {
  legend?: string; // accessibility
  data: RadioItemProps<T>[];
  value: T;
  onChange: (value: T) => void;
  direction?: "horizontal" | "vertical";
  className?: string;
  labelContainer?: string;
  optionsContainer?: string;
  radioGroupTitle?: string;
  ref?: React.Ref<HTMLInputElement>;
};

const InputRadio = <T extends string | number>({
  legend,
  data,
  value,
  onChange,
  direction = "horizontal",
  className = "",
  labelContainer = "",
  optionsContainer = "",
  radioGroupTitle = "",
  ref,
}: InputRadioProps<T>) => {
  return (
    <div className={`${className} w-full`}>
      <fieldset>
        {/* for accessibility, not visible on screen */}
        <legend className="sr-only">{legend}</legend>

        {/* label for whole radio group */}
        <span className="text-tp-typography text-[15px]">
          {radioGroupTitle}
        </span>
        <div
          className={`flex ${direction === "horizontal" ? "space-x-8" : "flex-col space-y-5"} border-charcoal-600 h-full rounded-md border px-3 py-3.5 ${optionsContainer}`}
        >
          {data.map((item: RadioItemProps<T>) => (
            <div key={item.id} className="relative flex items-center">
              <div className="flex items-center">
                <input
                  id={String(item.id)}
                  aria-describedby={`${String(item.id)}-name`}
                  name={item.name}
                  type="radio"
                  ref={ref}
                  // defaultChecked={item.id === "small"} will be controlled with state
                  checked={value === item.id}
                  onChange={() => onChange(item.id)}
                  className="checked:border-tp-typography focus:ring-typography-600 h-5.5 w-5.5 cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-[6px] focus:ring-1 focus:outline-none"
                />
              </div>
              <div
                className={`ml-3 text-sm leading-6 tracking-wide ${labelContainer}`}
              >
                <label
                  htmlFor={String(item.id)}
                  className="text-tp-typography text-md cursor-pointer font-medium"
                >
                  {item.name}
                </label>
                {item.description && (
                  <p id={`${item.id}-description`} className="text-gray-500">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default InputRadio;

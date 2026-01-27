import SearchResultList from "@/features/challenges/SearchResultList";
import { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export type SearchBarProps = {
  icon?: React.ReactNode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;

  parentContainerClassName?: string;
  inputClassName?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  defaultValue?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const SearchBar = ({
  value,
  onChange,
  icon = <FaMagnifyingGlass className="text-tp-typography h-4 w-4" />,
  placeholder,
  type = "text",
  name = "",
  parentContainerClassName = "",
  inputClassName = "",
  disabled = false,
  onBlur,
  defaultValue,
  ...rest
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputFocus = () => {
    inputRef?.current?.focus();
  };

  const nameId =
    name || placeholder.toLocaleLowerCase("en-US").replace(/\s+/g, "-");

  return (
    <div
      className={`bg-tp-card-back shadow-tp-primary relative flex w-full items-center rounded-full shadow-xs md:px-2 md:py-2 ${parentContainerClassName}`}
    >
      <SearchResultList />
      <div onClick={handleInputFocus} className="absolute left-4">
        {icon}
      </div>
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        disabled={disabled}
        id={nameId}
        name={nameId}
        defaultValue={defaultValue}
        spellCheck={false}
        className={`custom-autofill text-tp-typography focus-none mr-2 ml-9 border-none transition-colors outline-none ${inputClassName}`}
        placeholder={placeholder}
        autoComplete="off"
        {...rest}
      />
    </div>
  );
};

export default SearchBar;

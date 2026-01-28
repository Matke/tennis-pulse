import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export type SearchBarProps = {
  icon?: React.ReactNode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  // data: UserProfileData[];
  // loading: boolean;
  children: React.ReactNode;

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
  children,
  // data,
  // loading,
  type = "text",
  name = "",
  parentContainerClassName = "",
  inputClassName = "",
  disabled = false,
  onBlur,
  defaultValue,
  ...rest
}: SearchBarProps) => {
  const [showResults, setShowResults] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputFocus = () => {
    inputRef?.current?.focus();
  };

  // 3. Effect to handle clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the container exists and the click target is NOT inside the container
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const nameId =
    name || placeholder.toLocaleLowerCase("en-US").replace(/\s+/g, "-");

  return (
    <div
      ref={containerRef}
      className={`bg-tp-card-back shadow-tp-primary relative flex w-full items-center rounded-full shadow-xs md:px-2 md:py-2 ${parentContainerClassName}`}
    >
      {/* box where search results will be displayed */}
      {showResults && children}
      {/* <SearchResultList listData={data} loading={loading} /> */}
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
        onFocus={() => setShowResults(true)}
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

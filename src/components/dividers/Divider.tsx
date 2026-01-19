type DividerProps = {
  dataTestId?: string;
  label?: string;
  className?: string;
};

const Divider = ({ label, className }: DividerProps) => {
  return (
    <div className={`relative mb-4 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="border-tp-divider w-full border-t" />
      </div>
      {label && (
        <div className="relative flex justify-center">
          <span className="bg-tp-divider px-2 text-sm">{label}</span>
        </div>
      )}
    </div>
  );
};

export default Divider;

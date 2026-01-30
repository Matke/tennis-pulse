import Typography from "@/components/text/Typography";

const PageNavigationWrapper = ({
  title,
  children,
  className = "",
}: {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      <div className={`flex items-center justify-between ${className}`}>
        {title && <Typography className="font-bold">{title}</Typography>}
        {children}
      </div>
    </div>
  );
};

export default PageNavigationWrapper;

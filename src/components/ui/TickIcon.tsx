const TickIcon = ({ className }: { className?: string }) => {
  return (
    <div className={`flex scale-50 items-center justify-center ${className}`}>
      <div className="icon icon--order-success svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
          <g fill="none" stroke="oklch(55.98% 0.155 134.74)" stroke-width="2">
            <circle
              cx="77"
              cy="77"
              r="72"
              style={{
                strokeDasharray: "480px, 480px",
                strokeDashoffset: "960px",
              }}
            ></circle>
            <circle
              id="colored"
              fill="oklch(55.98% 0.155 134.74)"
              cx="77"
              cy="77"
              r="72"
              style={{
                strokeDasharray: "480px, 480px",
                strokeDashoffset: "960px",
              }}
            ></circle>
            <polyline
              className="st0"
              stroke="oklch(92.22% 0.001 286.37)"
              stroke-width="10"
              points="43.5,77.8 63.7,97.9 112.2,49.4 "
              style={{
                strokeDasharray: "100px, 100px",
                strokeDashoffset: "200px",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TickIcon;

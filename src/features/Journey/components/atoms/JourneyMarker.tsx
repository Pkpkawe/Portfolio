type JourneyMarkerProps = {
  isActive: boolean;
  isCompleted: boolean;
  hasConnector: boolean;
  progress: number;
};

const JourneyMarker = ({
  isActive,
  isCompleted,
  hasConnector,
  progress,
}: JourneyMarkerProps) => {
  return (
    <div className="relative w-7.5 shrink-0 self-stretch">
      <div className="relative z-10 grid size-7.5 place-items-center">
        <span
          className={`
                        rounded-full border-2 transition-all duration-300
                        ${
                          isActive
                            ? "size-7.5 border-violet-normal bg-violet-normal dark:bg-lavender-normal dark:border-lavender-normal shadow-[inset_0_0_0_5px_#e9dcff] dark:shadow-[inset_0_0_0_5px_#3f1f58ff]"
                            : isCompleted
                              ? "size-4.5 border-violet-normal dark:border-lavender-normal bg-violet-normal dark:bg-lavender-normal"
                              : "size-4.5 border-gray-400 dark:border-lavender-light bg-transparent"
                        }
                    `}
        />
      </div>

      {hasConnector && (
        <div
          className={`
                    absolute left-3.25 top-7.5 bottom-0
                    z-0 w-1 overflow-hidden rounded-full
                    ${isCompleted ? "bg-violet-normal dark:bg-lavender-normal" : "bg-gray-400 dark:bg-lavender-light"}
                `}
        >
          {!isCompleted && (
            <div
              className="h-full w-full origin-top rounded-full bg-violet-normal dark:bg-lavender-normal transition-transform duration-150"
              style={{
                transform: `scaleY(${progress})`,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default JourneyMarker;

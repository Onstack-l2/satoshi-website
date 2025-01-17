import clsx from "clsx";

export default function AlertMessage({
  className,
  alertMessage,
}: {
  className?: string;
  alertMessage: {
    slideDuration: string; // The duration for the slide animation
    items: { highlight: string; description: string }[]; // Array of message items
  };
}) {
  return (
    <div
      className={clsx(
        "w-full flex items-start bg-[#855D38] overflow-hidden relative h-5",
        className
      )}
    >
      <p
        className={clsx(
          "text-[#FFFFFF]  animate-slide whitespace-nowrap absolute animate-scroll-right top-0 right-0"
        )}
        style={{ animationDuration: alertMessage.slideDuration }}
      >
        {alertMessage.items.map((message) => (
          <>
            <span className="text-[#E8B14B]">{message.highlight}</span>
            {message.description}
            {"   "}
          </>
        ))}
      </p>
    </div>
  );
}

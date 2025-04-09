const PopUpModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.5)] ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-4 w-full max-w-[960px] relative m-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col p-4 justify-center items-center">{children}</div>
      </div>
    </div>
  );
};

export default PopUpModal;

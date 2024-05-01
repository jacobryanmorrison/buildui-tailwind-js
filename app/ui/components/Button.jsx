'use client';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="h-12 rounded-xl bg-sky-600 px-4 font-bold hover:bg-sky-500  focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-white md:h-10 md:px-3"
    >
      <span className="px-1">{children}</span>
    </button>
  );
};
Button.displayName = Button;

export default Button;
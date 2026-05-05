export default function Container({ children }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-screen-xl px-10 md:px-10">
      {children}
    </div>
  );
}

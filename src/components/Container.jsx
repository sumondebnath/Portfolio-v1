export default function Container({ children }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl xm:max-w-full px-10 md:px-10">
      {children}
    </div>
  );
}

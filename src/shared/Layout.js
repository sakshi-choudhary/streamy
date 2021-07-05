const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center p-3 min-h-screen bg-black3">
      {children}
    </div>
  );
};

export default Layout;

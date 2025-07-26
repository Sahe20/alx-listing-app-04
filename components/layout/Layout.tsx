// import Header from "./Header";
// import Footer from "./Footer";

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <main className="min-h-screen px-4 md:px-12">{children}</main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;
import Header from "./Header";
import Footer from "./Footer";
import Home from "@/pages";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
export default Layout;

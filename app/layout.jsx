import Footer from "@components/footer";
import Nav from "@components/nav";
import "@styles/globals.css";

export const metadata = {
  title: "Dimitar Dimitrov",
  description: "Web Designer",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
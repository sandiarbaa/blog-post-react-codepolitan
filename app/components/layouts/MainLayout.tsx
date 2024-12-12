import { ReactNode } from "react";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="container mx-auto p-5">
      <Navbar />
      {children}
    </section>
  );
};

export default MainLayout;

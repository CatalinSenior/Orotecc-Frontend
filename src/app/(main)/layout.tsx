import { Header } from "@/components/Home/Header";
import { Footer } from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
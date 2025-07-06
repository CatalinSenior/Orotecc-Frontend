import { Header } from "@/components/Home/Header";
import { Footer } from "@/components/Footer";
import { QueryProvider } from "@/components/providers/query-provider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <Header />
        {children}
      <Footer />
    </QueryProvider>
  );
}
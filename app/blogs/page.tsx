import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";

export default function BlogsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <Blogs />
        </div>
      </section>
      <Footer />
    </main>
  );
}

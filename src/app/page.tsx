import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";

import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Urbangrid</title>
        <meta
          name="description"
          content="Rent office spaces in the most convinient way"
        />
        <meta property="og:title" content="Urbangrid - Rent office spaces" />
        <meta
          property="og:description"
          content="Rent office spaces in the most convinient way"
        />
        <meta property="og:image" content="https://example.com/thumbnail.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* navbar */}
      <Navbar />

      {/* hero section */}
      <Hero />

      {/* about section */}

      {/* services section */}

      {/* contact section */}
      <Footer />
    </div>
  );
}

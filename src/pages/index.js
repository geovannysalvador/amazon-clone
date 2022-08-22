import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ecommerce</title>
      </Head>

     
     <Header />

     <main className="max-w-screen-2xl mx-auto">
      {/* Banner */}
      <Banner />

      {/* ProductFeed */}
     </main>
    </div>
  );
}

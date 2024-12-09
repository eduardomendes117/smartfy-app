"use client";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
// import Samsung from '@/components/Samsung';
import Carrossel from '@/components/Carrosel';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Hero />
        <Carrossel />
      </main>
      <Footer/>
    </>
  );
}
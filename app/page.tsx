"use client";
import React from "react"
import Image from "next/image"
import { FaTicketAlt } from "react-icons/fa";
import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  const artists = [
    {
      name: "Yasmina",
      image: "/yassmina.jpg",
      genre: "Musique Traditionnelle",
    },
    {
      name: "Mohamed Allawa",
      image: "/mohammed allawa.jpg",
      genre: "Kabyle (moderne, folk)",
    },
    {
      name: "Djilali Hamama",
      image: "/djilali hamama.jpg",
      genre: "Chaâbi (populaire algérien)",
    },
    {
      name: "Rabeh Assma",
      image: "/rabeh assma.jpg",
      genre: "Kabyle (folk, pop)",
    },
    {
      name: "Kedym",
      image: "/kedym.jpg",
      genre: "Pop Moderne (fusion algérienne)",
    },
    {
      name: "Ali Amran",
      image: "/ali amran.jpeg",
      genre: "Kabyle (folk, acoustique, moderne)",
    },
  ]

  const concerts = [
    {
      artist: "Yasmina",
      date: "21 Décembre 2025",
      venue: "Paris - Alhambra",
      available: true,
    },
    {
      artist: "Mohamed Allawa",
      date: "12 Janvier 2026",
      venue: "Alger - Salle Atlas",
      available: true,
    },
    {
      artist: "Djilali Hamama",
      date: "20 Janvier 2026",
      venue: "Oran - Théâtre",
      available: true,
    },
    {
      artist: "Rabeh Assma",
      date: "28 Janvier 2026",
      venue: "Tizi Ouzou - Maison de la Culture",
      available: true,
    },
    {
      artist: "Kedym",
      date: "5 Février 2026",
      venue: "Constantine - Zénith",
      available: true,
    },
    {
      artist: "Ali Amran",
      date: "15 Février 2026",
      venue: "Béjaïa - Salle des Fêtes",
      available: true,
    },
  ]

  const billetterieRef = React.useRef<HTMLDivElement>(null);
  const handleScrollToBilletterie = () => {
    if (billetterieRef.current) {
      billetterieRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative mx-auto flex w-full items-center justify-center aspect-4/3 sm:aspect-video lg:aspect-21/9">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/site_web_pour_validation-ultatYvICh6EIDmV8EOohORQcB2dUn.jpg"
            alt="Yasmina sur scène"
            fill
            priority
            className="object-cover" 
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-black/10" />
         <div className="absolute bottom-0 left-0 z-10 pb-8 pl-8 md:left-[35%] md:top-[80%] md:bottom-auto md:p-0 md:-translate-x-1/2 md:-translate-y-1/2">
              <Button size="lg" className="bg-black text-white hover:bg-neutral-200 hover:text-black border border-black scale-120 flex items-center gap-4 rounded-full font-bold tracking-wide shadow-lg transition-transform duration-700 hover:scale-110" onClick={handleScrollToBilletterie}>
                <FaTicketAlt className="w-7 h-7" />
                Réserver maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 w-full bg-gradient-to-br from-black via-white to-black relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 w-full flex justify-center">
          <div className="max-w-4xl w-full text-center backdrop-blur-md bg-white/70 rounded-2xl shadow-xl border border-black/10 p-10 animate-fade-in">
              <h2 className="font-sans text-5xl md:text-7xl font-extrabold mb-4 text-black tracking-tight animate-slide-down relative inline-block">
                Siphax Productions
                <span className="block h-1 w-24 mx-auto mt-2 bg-black rounded-full animate-grow" />
              </h2>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-10 animate-fade-in">
              Société de production de spectacles rattachée à des artistes majeurs ou en développement du paysage musical algérien,<br className="hidden md:inline" />
              Siphax Productions a pour vocation de produire toutes les musiques pour tous les publics.
            </p>
            <div className="flex flex-col items-center gap-8">
              <Button size="xl" className="bg-black text-white border border-black shadow-lg transition-all duration-300 animate-bounce" style={{ padding: '1%' }}>
                Rejoignez-nous
              </Button>
              <div className="flex gap-6">
                <Link href="https://facebook.com" target="_blank" className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-md transform transition-transform duration-300 hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-md transform transition-transform duration-300 hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://youtube.com" target="_blank" className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-md transform transition-transform duration-300 hover:scale-110">
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-24 w-full bg-gradient-to-br from-black via-white to-black relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 w-full flex justify-center">
          <div className="max-w-6xl w-full text-center backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-black/10 p-10 animate-fade-in">
            <h2 className="font-sans text-5xl md:text-7xl font-extrabold mb-4 text-black tracking-tight animate-slide-down relative inline-block">
              Nos Artistes
              <span className="block h-1 w-24 mx-auto mt-2 bg-black rounded-full animate-grow" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {artists.map((artist, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow bg-white/90 border border-black/10 rounded-xl">
                  <div className="relative h-80 overflow-hidden rounded-t-xl">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-sans text-2xl font-bold mb-2">{artist.name}</h3>
                      <p className="text-sm text-white/80">{artist.genre}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="rounded-full font-bold tracking-wide border-black text-black hover:bg-neutral-200 hover:text-black transition-all duration-500">
                <Link href="/artistes">Voir tous les artistes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

  {/* Concerts Section */}
  <section ref={billetterieRef} className="py-24 w-full bg-gradient-to-br from-black via-white to-black relative overflow-hidden">
  <div className="container mx-auto px-4 lg:px-8 w-full flex justify-center">
          <div className="max-w-5xl w-full text-center backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-black/10 p-10 animate-fade-in">
            <h2 className="font-sans text-5xl md:text-7xl font-extrabold mb-4 text-black tracking-tight animate-slide-down relative inline-block">
              Prochains Concerts
              <span className="block h-1 w-24 mx-auto mt-2 bg-black rounded-full animate-grow" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {concerts.map((concert, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow bg-white/90 border border-black/10 rounded-xl flex flex-col justify-between">
                  <div className="p-8 flex flex-col gap-4 items-center">
                    <h3 className="font-sans text-2xl font-bold mb-2 text-black">{concert.artist}</h3>
                    <div className="text-lg text-black/80 font-medium tracking-wide">
                      <span className="block mb-1">{concert.date}</span>
                      <span className="block text-sm text-muted-foreground">{concert.venue}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    {concert.available ? (
                      <Button size="lg" className="w-full bg-black text-white rounded-full font-bold tracking-wide shadow-lg hover:bg-neutral-200 hover:text-black transition-all duration-500">
                        Réserver
                      </Button>
                    ) : (
                      <Button className="w-full bg-transparent" variant="outline" disabled>
                        Complet
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="rounded-full font-bold tracking-wide border-black text-black hover:bg-neutral-200 hover:text-black transition-all duration-500">
                <Link href="/billetterie">Voir tous les concerts</Link>
              </Button>
            </div>
          </div>
        </div>
  </section>

      {/* Newsletter Section */}
  <section className="py-24 w-full bg-linear-to-br from-black via-white to-black relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 w-full flex justify-center">
          <div className="max-w-2xl w-full text-center backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-black/10 p-10 animate-fade-in">
            <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="font-sans text-5xl md:text-6xl font-extrabold mb-4 text-black tracking-tight animate-slide-down relative inline-block">
              Newsletter
              <span className="block h-1 w-24 mx-auto mt-2 bg-black rounded-full animate-grow" />
            </h2>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-10 animate-fade-in">
              Recevez les dates des nouveaux concerts directement dans votre boîte mail
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 bg-white/90 text-black border-black rounded-full px-6 py-5 shadow-none outline-none focus:outline-none focus:ring-0 focus:shadow-none focus:border-black ring-black text-lg"
              />
              <Button type="submit" className="bg-black text-white rounded-full font-bold tracking-wide shadow-lg hover:bg-neutral-200 hover:text-black transition-all duration-500 px-8 py-4">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

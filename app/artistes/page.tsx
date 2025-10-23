import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ArtistesPage() {
  const artists = [
    {
      name: "Yasmina",
  image: "/yassmina.jpg",
      genre: "Musique Traditionnelle",
      bio: "Yasmina est une chanteuse algérienne reconnue pour sa maîtrise du répertoire traditionnel et sa voix expressive qui célèbre la culture berbère.",
    },
    {
      name: "Mohamed Allawa",
  image: "/mohammed allawa.jpg",
      genre: "Kabyle (moderne, folk)",
      bio: "Mohamed Allawa est un artiste kabyle moderne, connu pour ses chansons engagées et son style mêlant folk et influences contemporaines.",
    },
    {
      name: "Djilali Hamama",
  image: "/djilali hamama.jpg",
      genre: "Chaâbi (populaire algérien)",
      bio: "Djilali Hamama est une figure du chaâbi algérien, apprécié pour ses interprétations authentiques et sa contribution à la musique populaire.",
    },
    {
      name: "Rabeh Assma",
  image: "/rabeh assma.jpg",
      genre: "Kabyle (folk, pop)",
      bio: "Rabeh Assma est un chanteur kabyle influent, célèbre pour ses mélodies folk et pop qui touchent plusieurs générations.",
    },
    {
      name: "Kedym",
  image: "/kedym.jpg",
      genre: "Pop Moderne (fusion algérienne)",
      bio: "Kedym est un artiste de la scène pop algérienne, reconnu pour ses créations fusionnant modernité et racines locales.",
    },
    {
      name: "Ali Amran",
  image: "/ali amran.jpeg",
      genre: "Kabyle (folk, acoustique, moderne)",
      bio: "Ali Amran est un auteur-compositeur kabyle, apprécié pour ses chansons acoustiques et son engagement pour la culture amazighe.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-b from-black/80 via-white/60 to-black/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-center mb-6 text-balance text-black">Nos Artistes</h1>
          <p className="text-lg md:text-xl text-center text-black/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez les talents exceptionnels qui font la richesse du paysage musical algérien
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artists.map((artist, index) => (
              <Card key={index} className="overflow-hidden group rounded-2xl shadow-xl border border-black/10 backdrop-blur-md bg-white/80 transition-transform duration-500 hover:scale-105">
                <div className="relative h-80 overflow-hidden rounded-t-2xl">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-sans text-2xl font-extrabold mb-2 tracking-tight drop-shadow-lg">{artist.name}</h3>
                    <p className="text-base text-white/80 mb-3 font-medium">{artist.genre}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-md text-black/80 leading-relaxed mb-6 font-normal">{artist.bio}</p>
                  <Button variant="outline" className="w-full rounded-full font-bold tracking-wide border-black text-black hover:bg-neutral-200 hover:text-black transition-all duration-500">
                    Voir les concerts
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

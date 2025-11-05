import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function BilletteriePage() {
  const concerts = [
    {
      artist: "Yasmina",
      date: "21 Décembre 2025",
      venue: "Paris - Alhambra",
      available: true,
      image: "/yassmina.jpg",
      price: "45€ - 75€",
      city: "Paris",
      address: "50 Rue de Malte, 75011 Paris",
      time: "20h00",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-b from-black/80 via-white/60 to-black/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-center mb-6 text-balance text-black">Billetterie</h1>
          <p className="text-lg md:text-xl text-center text-black/80 max-w-3xl mx-auto leading-relaxed">
            Réservez vos places pour les prochains concerts de vos artistes préférés
          </p>
        </div>
      </section>

      {/* Concerts List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {concerts.map((concert, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-2xl shadow-xl border border-black/10 backdrop-blur-md bg-white/80 transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto rounded-t-2xl overflow-hidden">
                    <img
                      src={concert.image || "/placeholder.svg"}
                      alt={concert.venue}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                    {!concert.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="bg-destructive text-destructive-foreground px-6 py-2 rounded-full font-semibold">
                          COMPLET
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="font-sans text-2xl md:text-3xl font-bold mb-4 tracking-tight text-black">
                        {concert.artist}
                      </h2>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-black mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium text-black">{concert.date}</p>
                            <p className="text-sm text-black/60 flex items-center gap-2">
                              <Clock className="w-4 h-4 text-black/60" />
                              {concert.time}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-black mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium text-black">
                              {concert.city} - {concert.venue}
                            </p>
                            <p className="text-sm text-black/60">{concert.address}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-sm text-black/60 mb-1">Tarifs</p>
                          <p className="text-xl font-bold text-black">{concert.price}</p>
                        </div>

                        {concert.available ? (
                          <Button
                            size="lg"
                            className="bg-black text-white rounded-full font-bold tracking-wide border-black hover:bg-neutral-200 hover:text-black transition-all duration-500 shadow-md"
                          >
                            Réserver mes places
                          </Button>
                        ) : (
                          <Button size="lg" variant="outline" disabled className="rounded-full">
                            Complet
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
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

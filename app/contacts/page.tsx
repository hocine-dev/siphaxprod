"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      <Header />

  {/* Hero Section */}
  <section className="pt-32 pb-20 bg-linear-to-b from-black/80 via-white/60 to-black/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-center mb-6 text-balance">Contactez-nous</h1>
          <p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une question ? Un projet ? N'hésitez pas à nous contacter
          </p>
        </div>
      </section>

  {/* Contact Content */}
  <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <div>
              <h2 className="font-sans text-3xl font-bold mb-8">Siphax Productions</h2>

              <div className="space-y-8 mb-12">
                <Card className="p-6 backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-black/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold mb-2">Adresse</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Avenue de la Musique
                        <br />
                        Alger, Algérie
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-black/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold mb-2">Téléphone</h3>
                      <p className="text-muted-foreground">+213 (0) 21 XX XX XX</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-black/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">contact@siphaxprod.com</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* About */}
              <div className="mb-8">
                <h3 className="font-sans text-xl font-semibold mb-4">À propos</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Société de production de spectacles rattachée à des artistes majeurs ou en développement du paysage
                  musical algérien, Siphax Productions a pour vocation de produire toutes les musiques pour tous les
                  publics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous accompagnons les artistes dans la réalisation de leurs projets, de la conception à la production,
                  en passant par la promotion et la diffusion de leurs œuvres.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-sans text-xl font-semibold mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-200 hover:text-black transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-200 hover:text-black transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-200 hover:text-black transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-black/10">
                <h2 className="font-sans text-2xl font-bold mb-6">Envoyez-nous un message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2 bg-white/90 text-black border border-black/20 rounded-full px-6 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 bg-white/90 text-black border border-black/20 rounded-full px-6 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Objet de votre message"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="mt-2 bg-white/90 text-black border border-black/20 rounded-full px-6 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Votre message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="mt-2 bg-white/90 text-black border border-black/20 rounded-2xl px-6 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-lg"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-black text-white rounded-full font-bold tracking-wide shadow-lg hover:bg-neutral-200 hover:text-black transition-all duration-500 px-8 py-4">
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

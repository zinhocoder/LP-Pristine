"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Shield,
  Clock,
  Sparkles,
  Users,
  Star,
  Phone,
  MessageCircle,
  ArrowRight,
  Zap,
  Heart,
  Home,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

function BeforeAfterCard({
  before,
  after,
  title,
  beforeAlt,
  afterAlt,
}: {
  before: string
  after: string
  title: string
  beforeAlt: string
  afterAlt: string
}) {
  const [isCleaningActive, setIsCleaningActive] = useState(false)
  const [cleaningProgress, setCleaningProgress] = useState(0)

  const handleCardClick = () => {
    if (isCleaningActive) return

    setIsCleaningActive(true)
    setCleaningProgress(0)

    const interval = setInterval(() => {
      setCleaningProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsCleaningActive(false)
            setCleaningProgress(0)
          }, 1000)
          return 100
        }
        return prev + 2
      })
    }, 50)
  }

  return (
    <Card
      className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 cursor-pointer group bg-white border-0 hover:-translate-y-2"
      onClick={handleCardClick}
    >
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src={before || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          className="object-cover transition-all duration-300"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - cleaningProgress}% 0 0)`,
          }}
        >
          <Image src={after || "/placeholder.svg"} alt={afterAlt} fill className="object-cover" />
        </div>

        {isCleaningActive && (
          <div
            className="absolute top-0 bottom-0 w-2 bg-gradient-to-r from-transparent via-white to-transparent shadow-2xl z-10 transition-all duration-100"
            style={{
              left: `${cleaningProgress}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-12 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          </div>
        )}

        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-red-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl">
          Antes
        </div>
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          Depois
        </div>

        {!isCleaningActive && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 sm:px-8 sm:py-4 rounded-full text-slate-800 font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 shadow-2xl border border-blue-100 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 sm:mr-3 text-blue-600" />
              Clique para ver a transformação
            </div>
          </div>
        )}

        {isCleaningActive && (
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-2xl border border-blue-100">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-spin" />
                <div className="flex-1 bg-gray-200 rounded-full h-2 sm:h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 sm:h-3 rounded-full transition-all duration-100"
                    style={{ width: `${cleaningProgress}%` }}
                  ></div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700 min-w-[2rem] sm:min-w-[3rem]">
                  {Math.round(cleaningProgress)}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 text-center">{title}</h3>
      </CardContent>
    </Card>
  )
}

function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <a href="https://wa.me/554191217963" target="_blank" rel="noopener noreferrer" className="inline-block">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 p-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-4 border-white"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 sm:w-10 sm:h-10"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
              fill="currentColor"
            />
          </svg>
        </Button>
      </a>
    </div>
  )
}

export default function PristineCleanLanding() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-40 border-b border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Image
              src="/images/pristine-clean-logo.png"
              alt="Pristine Clean"
              width={50}
              height={50}
              className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full shadow-lg"
            />
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-900 tracking-tight">
                Pristine Clean
              </h1>
              <p className="text-xs sm:text-sm text-blue-600 font-semibold tracking-wide uppercase">
                Higienização de Estofados
              </p>
            </div>
          </div>
          <a href="https://wa.me/554191217963" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-10 sm:py-4 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-16 sm:py-24 lg:py-40 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        {/* Blue floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6 sm:space-y-8">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold rounded-full shadow-lg">
                  ✨ Transformação Garantida
                </Badge>
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.1] sm:leading-[0.9] tracking-tighter">
                    Seu estofado{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800">
                      como novo
                    </span>{" "}
                    em poucas horas!
                  </h1>
                  <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-medium">
                  Remoção completa de ácaros, manchas e odores com higienização profissional.
                  <span className="text-blue-700 font-bold"> Ambiente mais saudável</span> para sua família em apenas
                  uma visita.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                <a
                  href="https://wa.me/554191217963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 sm:flex-initial"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-6 sm:px-12 sm:py-8 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-2xl"
                  >
                    <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 mr-3 sm:mr-4 flex-shrink-0" />
                    <span className="whitespace-normal">Quero meu estofado limpo agora!</span>
                  </Button>
                </a>
                <a
                  href="https://wa.me/554191217963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 sm:px-12 sm:py-8 text-lg sm:text-xl md:text-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl"
                  >
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 mr-3 sm:mr-4 flex-shrink-0" />
                    <span>Ligar Agora</span>
                  </Button>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-slate-800">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                  <span className="font-bold text-base sm:text-lg">Agendamento no mesmo dia</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                  <span className="font-bold text-base sm:text-lg">Garantia de satisfação</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-3xl p-6 sm:p-8 md:p-12 border border-blue-100 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest">Antes</p>
                    <div className="rounded-2xl h-32 sm:h-40 md:h-48 overflow-hidden shadow-xl">
                      <Image
                        src="/images/antes-poltrona.jpg"
                        alt="Poltrona antes da higienização"
                        width={250}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-widest">Depois</p>
                    <div className="rounded-2xl h-32 sm:h-40 md:h-48 overflow-hidden shadow-xl">
                      <Image
                        src="/images/depois-poltrona.jpg"
                        alt="Poltrona depois da higienização"
                        width={250}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 md:mt-10 text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                    Transformação real em poucas horas
                  </p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Blue background effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 tracking-tighter leading-tight">
                Por que escolher a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800">
                  Pristine Clean?
                </span>
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 max-w-5xl mx-auto font-medium leading-relaxed">
              Mais de <span className="text-blue-700 font-black">1.000 estofados transformados</span> com tecnologia de
              ponta e produtos biodegradáveis
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-white to-slate-50 group">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 sm:mb-6">
                  Eliminação Total
                </h3>
                <p className="text-slate-600 font-semibold leading-relaxed text-base sm:text-lg">
                  Ácaros, bactérias e fungos removidos com tecnologia profissional
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-white to-slate-50 group">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 sm:mb-6">
                  Ambiente Saudável
                </h3>
                <p className="text-slate-600 font-semibold leading-relaxed text-base sm:text-lg">
                  Proteja sua família com um ambiente livre de alérgenos
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-white to-slate-50 group">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 sm:mb-6">Rapidez</h3>
                <p className="text-slate-600 font-semibold leading-relaxed text-base sm:text-lg">
                  Agendamento no mesmo dia e serviço concluído em poucas horas
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-white to-slate-50 group">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Home className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 sm:mb-6">Valorização</h3>
                <p className="text-slate-600 font-semibold leading-relaxed text-base sm:text-lg">
                  Aumente o valor do seu imóvel com móveis impecáveis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Blue floating elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-200/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-blue-100/10"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 tracking-tighter leading-tight">
                Resultados que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800">
                  falam por si
                </span>
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 font-semibold">
              Clique nas imagens e veja a <span className="text-blue-700 font-black">transformação acontecer</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {[
              {
                before: "/images/antes-sofa.jpg",
                after: "/images/depois-sofa.jpg",
                title: "Sofá 2 lugares",
                beforeAlt: "Sofá antes da higienização",
                afterAlt: "Sofá depois da higienização",
              },
              {
                before: "/images/antes-colchao.jpg",
                after: "/images/depois-colchao.jpg",
                title: "Colchão Queen",
                beforeAlt: "Colchão antes da higienização",
                afterAlt: "Colchão depois da higienização",
              },
              {
                before: "/images/antes-cadeira.jpg",
                after: "/images/depois-cadeira.jpg",
                title: "Cadeiras de cozinha",
                beforeAlt: "Cadeiras antes da higienização",
                afterAlt: "Cadeiras depois da higienização",
              },
            ].map((item, index) => (
              <BeforeAfterCard
                key={index}
                before={item.before}
                after={item.after}
                title={item.title}
                beforeAlt={item.beforeAlt}
                afterAlt={item.afterAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-blue-50/30"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-200/15 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 tracking-tighter leading-tight">
                Como{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800">
                  funciona?
                </span>
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 font-semibold">
              Processo <span className="text-blue-700 font-black">simples e eficiente</span> em apenas 4 passos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {[
              {
                step: "1",
                title: "Agendamento",
                description: "Entre em contato e agende sua visita no mesmo dia",
                icon: Phone,
              },
              {
                step: "2",
                title: "Avaliação",
                description: "Nosso especialista avalia seu estofado e faz o orçamento",
                icon: CheckCircle,
              },
              {
                step: "3",
                title: "Higienização",
                description: "Aplicamos nossa tecnologia profissional de limpeza",
                icon: Sparkles,
              },
              {
                step: "4",
                title: "Satisfação",
                description: "Seu estofado renovado com garantia de qualidade",
                icon: Shield,
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 text-2xl sm:text-3xl font-black shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  {item.step}
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 sm:mb-6">{item.title}</h3>
                <p className="text-slate-600 font-semibold leading-relaxed text-base sm:text-lg">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 absolute top-8 sm:top-10 -right-4 sm:-right-5 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Blue background effects */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-blue-100/10"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6 sm:space-y-8">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold rounded-full shadow-lg">
                  ✨ Especialista Certificado
                </Badge>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 tracking-tighter leading-tight">
                    Conheça nosso{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800">
                      especialista
                    </span>
                  </h2>
                  <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full"></div>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed font-medium">
                    Com mais de <span className="text-blue-700 font-bold">5 anos de experiência</span> em higienização
                    profissional, nosso especialista já transformou mais de 1.000 estofados em toda a região de
                    Curitiba.
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                      <span className="font-bold text-base sm:text-lg text-slate-800">
                        Certificação em higienização profissional
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                      <span className="font-bold text-base sm:text-lg text-slate-800">
                        Especialista em remoção de manchas complexas
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                      <span className="font-bold text-base sm:text-lg text-slate-800">
                        Treinamento em produtos biodegradáveis
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                      <span className="font-bold text-base sm:text-lg text-slate-800">
                        Atendimento personalizado e consultivo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-3xl p-6 sm:p-8 md:p-12 border border-blue-100 backdrop-blur-sm">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-6 sm:mb-8">
                  <Image
                    src="/images/especialista.jpg"
                    alt="Especialista em higienização de estofados"
                    width={400}
                    height={500}
                    className="w-full h-80 sm:h-96 md:h-[500px] object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2 sm:mb-3">Diego Fernández</h3>
                  <p className="text-blue-600 font-bold text-base sm:text-lg mb-4 sm:mb-6">
                    Especialista em Higienização
                  </p>
                  <div className="bg-blue-50 rounded-2xl p-4 sm:p-6">
                    <p className="text-slate-800 font-semibold italic text-sm sm:text-base leading-relaxed">
                      "Minha missão é devolver a vida aos seus estofados, criando um ambiente mais saudável e
                      aconchegante para sua família. Cada trabalho é único e merece atenção especial."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Blue background effects */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-blue-100/10"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 tracking-tighter leading-tight">
                O que nossos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800">
                  clientes dizem
                </span>
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 font-semibold">
              Avaliações <span className="text-blue-700 font-black">reais</span> de clientes satisfeitos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <Card className="shadow-2xl border-0 bg-white hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="flex mb-6 sm:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-800 mb-6 sm:mb-8 italic text-lg sm:text-xl font-semibold leading-relaxed">
                  "Serviço muito caprichoso e cuidadoso! 👏 Além de manchas de uso humano, tenho duas gatas então havia
                  muito pelo e mancha de xixi recente. Com a higienização o sofá ficou muito limpo, mais claro e com
                  cara de novo. Os produtos usados são de muita qualidade, me surpreendi com a cor da 'água' que saiu
                  kkk"
                </p>
                <div className="border-t pt-6 sm:pt-8">
                  <p className="font-black text-slate-900 text-lg sm:text-xl">Yanka Cardoso</p>
                  <p className="text-slate-600 font-bold text-sm sm:text-base">Local Guide · 22 avaliações</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">há 1 mês</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-0 bg-white hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="flex mb-6 sm:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-800 mb-6 sm:mb-8 italic text-lg sm:text-xl font-semibold leading-relaxed">
                  "Fiquei extremamente satisfeito com o serviço de higienização e impermeabilização dos meus estofados!
                  Desde o atendimento inicial até a finalização do trabalho, a equipe foi profissional, atenciosa e
                  demonstrou um grande conhecimento sobre os produtos utilizados. Meus sofás ficaram como novos e a
                  impermeabilização trouxe mais segurança para o dia a dia."
                </p>
                <div className="border-t pt-6 sm:pt-8">
                  <p className="font-black text-slate-900 text-lg sm:text-xl">Diego Fernandez</p>
                  <p className="text-slate-600 font-bold text-sm sm:text-base">2 avaliações</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">há 2 meses</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-0 bg-white hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="flex mb-6 sm:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-800 mb-6 sm:mb-8 italic text-lg sm:text-xl font-semibold leading-relaxed">
                  "Ótimo serviço, deixou o sofá completamente novo e limpo. Além do atendimento ser muito bom, pontual e
                  o preço justo."
                </p>
                <div className="border-t pt-6 sm:pt-8">
                  <p className="font-black text-slate-900 text-lg sm:text-xl">Valmor Dantas Marlos Junior</p>
                  <p className="text-slate-600 font-bold text-sm sm:text-base">2 avaliações</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">há 2 semanas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        {/* Additional blue effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-tight">
                Garantia de Satisfação Total
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-white rounded-full mx-auto"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 sm:mb-16 opacity-90 font-semibold leading-relaxed">
              Mais de <span className="font-black">1.000 estofados revitalizados</span> com sucesso. Profissionais
              treinados e equipamentos de última geração.
            </p>

            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div className="flex flex-col items-center group">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">Garantia</h3>
                <p className="opacity-90 font-semibold leading-relaxed text-base sm:text-lg">
                  Garantia de serviços de qualidade
                </p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">+1.000 clientes</h3>
                <p className="opacity-90 font-semibold leading-relaxed text-base sm:text-lg">
                  Famílias satisfeitas em toda a região
                </p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">Produtos seguros</h3>
                <p className="opacity-90 font-semibold leading-relaxed text-base sm:text-lg">
                  Biodegradáveis e atóxicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Blue background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 tracking-tighter leading-tight">
                Transforme seu estofado{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800">
                  hoje mesmo!
                </span>
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 mb-12 sm:mb-16 font-semibold leading-relaxed">
              Não deixe para amanhã o que pode ser resolvido hoje. Clique no botão abaixo e garanta um{" "}
              <span className="text-blue-700 font-black">ambiente mais saudável</span> para sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-12 sm:mb-16 max-w-4xl mx-auto">
              <a
                href="https://wa.me/554191217963"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-6 sm:px-16 sm:py-8 text-lg sm:text-xl md:text-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-2xl"
                >
                  <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 mr-3 sm:mr-4 flex-shrink-0" />
                  <span>Agendar pelo WhatsApp</span>
                </Button>
              </a>
              <a
                href="https://wa.me/554191217963"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 sm:px-16 sm:py-8 text-lg sm:text-xl md:text-2xl font-black shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl"
                >
                  <Phone className="w-5 h-5 sm:w-7 sm:h-7 mr-3 sm:mr-4 flex-shrink-0" />
                  <span>Ligar Agora</span>
                </Button>
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-3xl p-6 sm:p-8 md:p-10 inline-block shadow-2xl border border-blue-100">
              <p className="text-slate-800 font-black text-lg sm:text-xl md:text-2xl">
                ⚡ <strong className="text-blue-600">Oferta especial:</strong> Agendamentos hoje ganham 15% de desconto!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        {/* Additional blue effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-tight">
                Garantia de Satisfação Total
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-white rounded-full mx-auto"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 sm:mb-16 opacity-90 font-semibold leading-relaxed">
              Mais de <span className="font-black">1.000 estofados revitalizados</span> com sucesso. Profissionais
              treinados e equipamentos de última geração.
            </p>

            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div className="flex flex-col items-center group">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">Garantia</h3>
                <p className="opacity-90 font-semibold leading-relaxed text-base sm:text-lg">
                  Garantia de serviços de qualidade
                </p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">+1.000 clientes</h3>
                <p className="opacity-90 font-semibold leading-relaxed text-base sm:text-lg">
                  Famílias satisfeitas em toda a região
                </p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">Produtos seguros</h3>
                <p className="opacity-90 font-semibold leading-relaxed text-base sm:text-lg">
                  Biodegradáveis e atóxicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Blue background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 tracking-tighter leading-tight">
                Transforme seu estofado{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800">
                  hoje mesmo!
                </span>
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 mb-12 sm:mb-16 font-semibold leading-relaxed">
              Não deixe para amanhã o que pode ser resolvido hoje. Clique no botão abaixo e garanta um{" "}
              <span className="text-blue-700 font-black">ambiente mais saudável</span> para sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-12 sm:mb-16 max-w-4xl mx-auto">
              <a
                href="https://wa.me/554191217963"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-6 sm:px-16 sm:py-8 text-lg sm:text-xl md:text-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-2xl"
                >
                  <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 mr-3 sm:mr-4 flex-shrink-0" />
                  <span>Agendar pelo WhatsApp</span>
                </Button>
              </a>
              <a
                href="https://wa.me/554191217963"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 sm:px-16 sm:py-8 text-lg sm:text-xl md:text-2xl font-black shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl"
                >
                  <Phone className="w-5 h-5 sm:w-7 sm:h-7 mr-3 sm:mr-4 flex-shrink-0" />
                  <span>Ligar Agora</span>
                </Button>
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-3xl p-6 sm:p-8 md:p-10 inline-block shadow-2xl border border-blue-100">
              <p className="text-slate-800 font-black text-lg sm:text-xl md:text-2xl">
                ⚡ <strong className="text-blue-600">Oferta especial:</strong> Agendamentos hoje ganham 15% de desconto!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Blue background effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-800/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-800/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            <div>
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <Image
                  src="/images/pristine-clean-logo.png"
                  alt="Pristine Clean"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full shadow-xl"
                />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black">Pristine Clean</h3>
                  <p className="text-blue-300 font-bold text-sm sm:text-base">Higienização de Estofados</p>
                </div>
              </div>
              <p className="text-blue-300 font-semibold leading-relaxed text-base sm:text-lg">
                Transformando estofados e criando ambientes mais saudáveis desde 2020.
              </p>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-black mb-6 sm:mb-8">Contato</h4>
              <div className="space-y-3 sm:space-y-4 text-blue-300 font-semibold text-base sm:text-lg">
                <p>📱 (41) 9121-7963</p>
                <p>📧 contato@pristineclean.com.br</p>
                <p>📍 Curitiba - PR</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-black mb-6 sm:mb-8">Horário de Atendimento</h4>
              <div className="space-y-3 sm:space-y-4 text-blue-300 font-semibold text-base sm:text-lg">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 14h</p>
                <p>Domingo: Plantão WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 sm:mt-16 pt-8 sm:pt-12 text-center text-blue-400">
            <p className="font-semibold text-base sm:text-lg">
              &copy; 2024 Pristine Clean. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  TrendingUp,
  Heart,
  Users,
  Award,
  Instagram,
  CheckCircle,
  Menu,
  X,
  Star,
  Calculator,
  FileText,
  MessageCircle,
  Clock,
  Target,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function PravinThoratWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [animationData, setAnimationData] = useState(null)
 const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loaderAnimationData, setLoaderAnimationData] = useState(null)

  // Load loader animation
  useEffect(() => {
    fetch("/animations/loader.json")
      .then((response) => response.json())
      .then((data) => setLoaderAnimationData(data))
      .catch((error) => console.error("Error loading loader animation:", error))
  }, [])

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  // Load Lottie animation
  useEffect(() => {
    fetch("/animations/financial-advisor.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error))
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Build wealth systematically with expert-guided mutual fund investments",
      features: [
        "SIP Planning & Management",
        "Lumpsum Investment Strategy",
        "Portfolio Diversification",
        "Risk Assessment",
        "Goal-based Planning",
      ],
      companies: ["HDFC Mutual Fund", "ICICI Prudential", "SBI Mutual Fund", "Axis Mutual Fund"],
    },
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Comprehensive life protection solutions for your family's security",
      features: ["Term Life Insurance", "ULIP Plans", "Endowment Policies", "Child Education Plans", "Pension Plans"],
      companies: ["LIC of India", "HDFC Life", "ICICI Prudential Life", "Max Life"],
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Medical coverage plans to protect against healthcare expenses",
      features: [
        "Individual Health Plans",
        "Family Floater Policies",
        "Critical Illness Cover",
        "Senior Citizen Plans",
        "Maternity Benefits",
      ],
      companies: ["Star Health", "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz"],
    },
    {
      icon: Users,
      title: "Claim Assistance",
      description: "Expert support throughout your insurance claim process",
      features: [
        "Claim Documentation",
        "Hospital Coordination",
        "Follow-up Support",
        "Settlement Assistance",
        "Legal Guidance",
      ],
      companies: ["All Major Insurers", "Cashless Network", "Reimbursement Claims"],
    },
    {
      icon: Award,
      title: "Retirement Planning",
      description: "Secure your golden years with comprehensive retirement strategies",
      features: [
        "Retirement Corpus Calculation",
        "Pension Plan Selection",
        "Tax-efficient Strategies",
        "Post-retirement Income",
        "Estate Planning",
      ],
      companies: ["NPS", "PPF", "EPF", "Retirement Mutual Funds"],
    },
    {
      icon: CheckCircle,
      title: "Tax-Saving Solutions",
      description: "Maximize tax benefits while building wealth",
      features: [
        "ELSS Mutual Funds",
        "Tax-saving Insurance",
        "80C Investments",
        "Tax Planning Strategy",
        "Annual Tax Review",
      ],
      companies: ["ELSS Funds", "Tax-saver FDs", "Insurance Plans"],
    },
  ]

  const achievements = [
    { number: "1500+", label: "Happy Clients", icon: Users },
    { number: "₹50Cr+", label: "Assets Under Advisory", icon: TrendingUp },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "98%", label: "Client Satisfaction", icon: Star },
  ]

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Software Engineer",
      content:
        "Pravin sir helped me plan my daughter's education fund through SIP. His guidance has been invaluable in achieving my financial goals.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Business Owner",
      content:
        "Excellent service for health insurance claims. Pravin sir handled everything smoothly when my father was hospitalized.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Marketing Manager",
      content:
        "Best financial advisor in Mumbai! His retirement planning strategy has given me peace of mind for the future.",
      rating: 5,
    },
    {
      name: "Sunita Joshi",
      role: "Teacher",
      content:
        "Very professional and knowledgeable. Helped me choose the right life insurance policy for my family's security.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "What is the minimum amount required to start SIP?",
      answer:
        "You can start SIP with as low as ₹500 per month. However, I recommend starting with at least ₹1000-2000 per month for better wealth creation.",
    },
    {
      question: "How do I choose the right life insurance coverage?",
      answer:
        "Life insurance coverage should be 10-15 times your annual income. I help you calculate the exact amount based on your family's needs, loans, and future goals.",
    },
    {
      question: "What documents are required for health insurance claims?",
      answer:
        "Typically you need policy documents, hospital bills, discharge summary, diagnostic reports, and claim form. I assist with complete documentation.",
    },
    {
      question: "Is it better to invest lumpsum or through SIP?",
      answer:
        "SIP is generally better for most investors as it provides rupee cost averaging and disciplined investing. Lumpsum works well when markets are low.",
    },
    {
      question: "How often should I review my investment portfolio?",
      answer:
        "I recommend reviewing your portfolio every 6 months or when there are major life changes like marriage, childbirth, or job change.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
          <div className="text-center">
            {/* {loaderAnimationData && (
              <div className="w-64 h-64 mb-8">
                <Lottie
                  animationData={loaderAnimationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            )} */}
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Pravin Thorat</span>
            </div>
            <p className="text-gray-400 mt-2">Loading your financial partner...</p>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Pravin Thorat</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="px-3 py-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-24 pb-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge className="bg-blue-600 text-white mb-4">IRDAI Licensed • ARN Certified</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                Pravin Thorat
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-2">Your Trusted Financial Partner</p>
              <p className="text-lg text-blue-400 font-semibold mb-6">15+ Years of Excellence in Financial Planning</p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Helping families and professionals in Mumbai secure their financial future through expert guidance in
                insurance, mutual funds, and comprehensive financial planning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 bg-transparent"
                  onClick={() => scrollToSection("services")}
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore Services
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2">
                  LIC Partner
                </Badge>
                <Badge variant="secondary" className="bg-red-600 text-white px-4 py-2">
                  Star Health
                </Badge>
                <Badge variant="secondary" className="bg-blue-800 text-white px-4 py-2">
                  MF Advisor
                </Badge>
              </div>
            </div>

            {/* Right Content - Lottie Animation */}
            <div className="flex justify-center lg:justify-end">
              {animationData && (
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[400px]">
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{achievement.number}</h3>
                <p className="text-gray-400">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">About Pravin Thorat</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A dedicated financial professional committed to helping you achieve your financial dreams through expert
              guidance and personalized solutions.
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-400">Your Financial Success Partner</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With over 15 years of dedicated experience in the insurance and financial services industry, I have
                helped over 1500+ families and working professionals in Mumbai and surrounding areas secure their
                financial future through smart investment strategies and comprehensive insurance planning.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My approach is built on understanding each client's unique financial situation, goals, and risk
                appetite. I believe in providing transparent, honest advice that puts your interests first, ensuring you
                make informed decisions about your financial future.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                As a certified IRDAI agent and registered mutual fund advisor, I stay updated with the latest market
                trends and regulatory changes to provide you with the most current and effective financial solutions.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-white mb-3" />
                  <h4 className="text-white font-semibold mb-2">Education</h4>
                  <p className="text-blue-100 text-sm">
                    Certified Financial Planner with continuous professional development
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-lg">
                  <Briefcase className="h-8 w-8 text-white mb-3" />
                  <h4 className="text-white font-semibold mb-2">Specialization</h4>
                  <p className="text-red-100 text-sm">Insurance, Mutual Funds, Retirement & Tax Planning</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h4 className="text-2xl font-bold mb-6 text-white">Professional Credentials</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-blue-400 font-semibold">IRDAI Agent Code</p>
                    <p className="text-white font-bold">4259</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-blue-400 font-semibold">MF ARN Code</p>
                    <p className="text-white font-bold">108470</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-blue-400 font-semibold">PAN Number</p>
                    <p className="text-white font-bold">ADJPT6638H</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-blue-400 font-semibold">Experience</p>
                    <p className="text-white font-bold">15+ Years</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-blue-600 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold mb-6 text-white">Why Choose Me?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">15+ years of proven track record with 1500+ satisfied clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">Certified IRDAI agent with proper licensing and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">Personalized financial solutions tailored to your unique needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">End-to-end support from planning to claim settlement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">Transparent advice with no hidden charges or commissions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Comprehensive Financial Services</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              From insurance protection to wealth creation, I offer complete financial solutions tailored to your life
              goals and risk profile.
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-900 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Partner Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.companies.map((company, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("contact")}>
              <Calculator className="mr-2 h-5 w-5" />
              Get Personalized Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">My Track Record</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Over 15 years of helping clients achieve their financial goals through strategic planning and expert
              guidance.
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 text-white">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Goal Achievement</h3>
                <p className="text-blue-100 mb-4">95% of my clients achieve their financial goals on time</p>
                <div className="text-3xl font-bold">95%</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0 text-white">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Claim Settlement</h3>
                <p className="text-red-100 mb-4">Successful claim settlement rate with my assistance</p>
                <div className="text-3xl font-bold">98%</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-800 to-blue-900 border-0 text-white">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Client Retention</h3>
                <p className="text-blue-100 mb-4">Long-term relationships built on trust and results</p>
                <div className="text-3xl font-bold">92%</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What My Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real experiences from real people who trusted me with their financial future.
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="bg-blue-600 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section id="faq" className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Get answers to common questions about financial planning and insurance.
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <ChevronDown className="h-5 w-5 text-blue-400 mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Have more questions? I'm here to help!</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("contact")}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Your Question
            </Button>
          </div>
        </div>
      </section> */}
      <section id="faq" className="py-20 px-4 bg-slate-900">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-400">
          Get answers to common questions about financial planning and insurance.
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <button
                className="w-full flex items-center justify-between text-lg font-semibold text-white mb-3 focus:outline-none"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                aria-expanded={openFaqIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="flex items-center">
                  <ChevronDown
                    className={`h-5 w-5 text-blue-400 mr-2 transition-transform duration-200 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                  {faq.question}
                </span>
              </button>
              {openFaqIndex === index && (
                <p
                  id={`faq-answer-${index}`}
                  className="text-gray-300 leading-relaxed pl-7 transition-all duration-200"
                >
                  {faq.answer}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 mb-6">Have more questions? I'm here to help!</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("contact")}>
          <MessageCircle className="mr-2 h-5 w-5" />
          Ask Your Question
        </Button>
      </div>
    </div>
  </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Let's Plan Your Financial Future</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Ready to take control of your financial destiny? Get in touch for a personalized consultation.
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-blue-400">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="bg-blue-600 p-4 rounded-lg mr-6">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-gray-300">Primary: 9869111462</p>
                    <p className="text-gray-300">Secondary: 9224311886</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-red-600 p-4 rounded-lg mr-6">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-300">siddhesht60@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-800 p-4 rounded-lg mr-6">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Office Location</h4>
                    <p className="text-gray-300">Kalyan East, Mumbai</p>
                    <p className="text-gray-400">Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-red-600 p-4 rounded-lg mr-6">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Social Media</h4>
                    <p className="text-gray-300">@Pravin_licmfadvisor</p>
                    <p className="text-gray-400">Follow for financial tips & updates</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-300 text-lg font-semibold mb-4">Office Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="font-medium">Monday - Friday:</span> 9:00 AM - 7:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> 10:00 AM - 5:00 PM
                  </p>
                </div>
                <p className="text-blue-300 text-sm mt-4">Emergency support available 24/7 for existing clients</p>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">Schedule Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Get personalized financial advice tailored to your goals. No obligation, just expert guidance to
                    help you make informed decisions about your financial future.
                  </p>

                  <div className="space-y-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for Free Consultation
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white py-3 bg-transparent"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Chat
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white py-3 bg-transparent"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email Inquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-600 to-blue-600 border-0 text-white">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold mb-4">Free Financial Health Checkup</h4>
                  <p className="mb-6">
                    Get a comprehensive review of your current financial situation and receive personalized
                    recommendations for improvement.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Portfolio Analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Insurance Gap Analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Tax Optimization Review
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Goal-based Planning
                    </li>
                  </ul>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    <FileText className="mr-2 h-5 w-5" />
                    Book Free Checkup
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Pravin Thorat</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted financial partner for insurance, mutual funds, and comprehensive financial planning.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Life Insurance</li>
                <li>Health Insurance</li>
                <li>Mutual Funds</li>
                <li>Retirement Planning</li>
                <li>Tax Planning</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 9869111462</li>
                <li>Email: siddhesht60@gmail.com</li>
                <li>Location: Kalyan East, Mumbai</li>
                <li>Instagram: @Pravin_licmfadvisor</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Users,
  Heart,
  Shield,
  Handshake,
  GraduationCap,
  ChevronRight,
  Calendar,
} from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark via-dark-light to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-6">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t("hero.title")}{" "}
              <span className="text-accent">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg text-gray-light leading-relaxed mb-10 max-w-2xl">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/briefing/news`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-[#8244a0] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/about/vision-mission`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:-translate-y-0.5"
              >
                {t("hero.secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                {t("about.sectionTag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6 leading-tight">
                {t("about.title")}{" "}
                <span className="text-accent">
                  {t("about.titleHighlight")}
                </span>
              </h2>
              <p className="text-gray leading-relaxed mb-8">
                {t("about.description")}
              </p>
              <Link
                href={`/${locale}/about/vision-mission`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[#8244a0] text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-accent/25"
              >
                {t("about.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl font-bold text-dark">500K+</p>
                <p className="text-sm text-gray mt-1">
                  {t("about.stats.membersLabel")}
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-dark/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-dark" />
                </div>
                <p className="text-2xl font-bold text-dark">5+</p>
                <p className="text-sm text-gray mt-1">
                  {t("about.stats.officesLabel")}
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 col-span-2">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl font-bold text-dark">5+</p>
                <p className="text-sm text-gray mt-1">
                  {t("about.stats.yearsLabel")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Focus Areas Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              {t("services.sectionTag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              {t("services.title")}{" "}
              <span className="text-accent">
                {t("services.titleHighlight")}
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: t("services.politicalEducation"),
                desc: t("services.politicalEducationDesc"),
                color: "primary",
              },
              {
                icon: Users,
                title: t("services.youthEngagement"),
                desc: t("services.youthEngagementDesc"),
                color: "secondary",
              },
              {
                icon: Heart,
                title: t("services.communityDev"),
                desc: t("services.communityDevDesc"),
                color: "accent",
              },
              {
                icon: Shield,
                title: t("services.womenEmpowerment"),
                desc: t("services.womenEmpowermentDesc"),
                color: "primary",
              },
              {
                icon: Handshake,
                title: t("services.goodGovernance"),
                desc: t("services.goodGovernanceDesc"),
                color: "secondary",
              },
              {
                icon: Handshake,
                title: t("services.peaceBuilding"),
                desc: t("services.peaceBuildingDesc"),
                color: "accent",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const colorClasses: Record<string, string> = {
                primary: "bg-accent/10 text-accent",
                secondary: "bg-dark/10 text-dark",
                accent: "bg-primary/10 text-primary",
              };
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border group"
                >
                  <div
                    className={`w-14 h-14 ${colorClasses[item.color]} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              {t("leaders.sectionTag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              {t("leaders.title")}{" "}
              <span className="text-accent">
                {t("leaders.titleHighlight")}
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: t("leaders.leader1Name"),
                position: t("leaders.leader1Position"),
                image: "/images/leaders/mohammed-hussen.jpg",
              },
              {
                name: t("leaders.leader2Name"),
                position: t("leaders.leader2Position"),
                image: "/images/leaders/weleo-aytile.jpg",
              },
              {
                name: t("leaders.leader3Name"),
                position: t("leaders.leader3Position"),
                image: "/images/leaders/mohammed-aden.jpg",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {leader.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                {t("news.sectionTag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                {t("news.title")}{" "}
                <span className="text-accent">
                  {t("news.titleHighlight")}
                </span>
              </h2>
            </div>
            <Link
              href={`/${locale}/briefing/news`}
              className="inline-flex items-center gap-2 text-accent hover:text-[#8244a0] font-medium transition-colors"
            >
              {t("news.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("news.item1Title"),
                desc: t("news.item1Desc"),
                date: "2025-07-15",
              },
              {
                title: t("news.item2Title"),
                desc: t("news.item2Desc"),
                date: "2025-07-10",
              },
              {
                title: t("news.item3Title"),
                desc: t("news.item3Desc"),
                date: "2025-07-05",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-dark/20 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-accent/40" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray mb-3 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </p>
                  <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray leading-relaxed line-clamp-3 mb-4">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-[#8244a0] transition-colors">
                    {t("news.readMore")}
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-dark to-dark-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("cta.title")}{" "}
            <span className="text-accent">{t("cta.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent hover:bg-[#8244a0] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t("cta.button")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import { Calendar, Flag, Users, MapPin } from "lucide-react";

export default async function FormationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("pages.formation.title")}
        titleHighlight={t("pages.formation.titleHighlight")}
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray leading-relaxed mb-12 text-center">
            {t("pages.formation.description")}
          </p>

          {/* Timeline */}
          <div className="space-y-8">
            {[
              {
                icon: Calendar,
                year: "2019",
                title: locale === "aa" ? "Partik Islaamitte" : locale === "am" ? "ፓርቲው ምስረታ" : "Party Established",
                desc: locale === "aa" ? "Leeda Partik 2019 macaadah islaamme." : locale === "am" ? "የብልፅግና ፓርቲ በ2019 ተመሠረተ።" : "Prosperity Party was established in 2019.",
              },
              {
                icon: Flag,
                year: "2019",
                title: locale === "aa" ? "Qafar Rakaakayih K/Buxak" : locale === "am" ? "የአፋር ክልል ቅ/ፅ/ቤት" : "Afar Region Branch Office",
                desc: locale === "aa" ? "Qafar Rakaakayih K/Buxak islaamme." : locale === "am" ? "የአፋር ክልል ቅርንጫፍ ፅ/ቤት ተቋቋመ።" : "Afar Region Branch Office was established.",
              },
              {
                icon: Users,
                year: "2020-2025",
                title: locale === "aa" ? "Membaar Baaxo" : locale === "am" ? "የአባላት ዕድገት" : "Membership Growth",
                desc: locale === "aa" ? "Partik membaar rakaakayih macaadah baaxomme." : locale === "am" ? "የፓርቲ አባላት ቁጥር በክልሉ ጨምሯል።" : "Party membership has grown across the region.",
              },
              {
                icon: MapPin,
                year: "2025",
                title: locale === "aa" ? "Zone Buxak" : locale === "am" ? "ዞን ፅ/ቤቶች" : "Zone Offices",
                desc: locale === "aa" ? "Zone baddal buxak islaamme." : locale === "am" ? "በሁሉም ዞኖች ፅ/ቤቶች ተቋቋሙ።" : "Offices established across all zones.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-accent font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-dark mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

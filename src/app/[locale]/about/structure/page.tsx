import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import { Building2, Users, MapPin, Landmark } from "lucide-react";

export default async function StructurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const levels = [
    {
      icon: Landmark,
      title: locale === "aa" ? "Rakaakayih K/Buxak" : locale === "am" ? "ክልል ቅ/ፅ/ቤት" : "Regional Branch Office",
      desc: locale === "aa" ? "Qafar Rakaakayih K/Buxak saqalal kee missoyna." : locale === "am" ? "የአፋር ክልል ቅርንጫፍ ፅ/ቤት አመራር እና አደረጃጀት።" : "The Afar Region Branch Office leadership and organization.",
    },
    {
      icon: Building2,
      title: locale === "aa" ? "Zone Buxak" : locale === "am" ? "ዞን ፅ/ቤቶች" : "Zone Offices",
      desc: locale === "aa" ? "Zone baddal buxak kee saqolat." : locale === "am" ? "በሁሉም ዞኖች ያሉ ፅ/ቤቶች እና አመራሮች።" : "Offices and leaders across all zones.",
    },
    {
      icon: MapPin,
      title: locale === "aa" ? "Woreda Buxak" : locale === "am" ? "ወረዳ ፅ/ቤቶች" : "Woreda Offices",
      desc: locale === "aa" ? "Woreda baddal buxak kee missoyna." : locale === "am" ? "በሁሉም ወረዳዎች ያሉ ፅ/ቤቶች።" : "Offices across all woredas.",
    },
    {
      icon: Users,
      title: locale === "aa" ? "Kebele Missoyna" : locale === "am" ? "ቀበሌ አደረጃጀት" : "Kebele Structure",
      desc: locale === "aa" ? "Kebele macaadah missoyna kee membaar." : locale === "am" ? "በቀበሌ ደረጃ ያለ አደረጃጀት እና አባላት።" : "Structure and membership at kebele level.",
    },
  ];

  return (
    <>
      <PageHero
        title={t("pages.structure.title")}
        titleHighlight={t("pages.structure.titleHighlight")}
        description={t("pages.structure.description")}
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {levels.map((level, index) => {
              const Icon = level.icon;
              return (
                <div
                  key={index}
                  className="relative flex gap-6 items-start p-6 bg-muted rounded-2xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="absolute left-10 top-20 bottom-0 w-px bg-border -z-0 last:hidden" />
                  <div className="shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center z-10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">
                      {level.title}
                    </h3>
                    <p className="text-gray leading-relaxed">{level.desc}</p>
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

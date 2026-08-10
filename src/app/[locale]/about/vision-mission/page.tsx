import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import { Eye, Target, Star } from "lucide-react";

export default async function VisionMissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const values = t("pages.visionMission.valuesItems").split(",").map((v: string) => v.trim());

  return (
    <>
      <PageHero
        title={t("pages.visionMission.title")}
        titleHighlight={t("pages.visionMission.titleHighlight")}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-muted rounded-2xl p-8 lg:p-10 border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {t("pages.visionMission.vision")}
              </h2>
              <p className="text-gray leading-relaxed">
                {t("pages.visionMission.visionText")}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-muted rounded-2xl p-8 lg:p-10 border border-border">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {t("pages.visionMission.mission")}
              </h2>
              <p className="text-gray leading-relaxed">
                {t("pages.visionMission.missionText")}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-dark mb-8">
              {t("pages.visionMission.values")}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-6 py-3 bg-accent/5 border border-accent/20 rounded-full"
                >
                  <Star className="w-4 h-4 text-accent" />
                  <span className="text-dark font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

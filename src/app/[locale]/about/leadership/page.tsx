import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export default async function LeadershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const leaders = [
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
  ];

  return (
    <>
      <PageHero
        title={t("pages.leadership.title")}
        titleHighlight={t("pages.leadership.titleHighlight")}
        description={t("pages.leadership.description")}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-medium">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

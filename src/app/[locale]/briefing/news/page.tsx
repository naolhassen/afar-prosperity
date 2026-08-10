import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import { Calendar, ChevronRight } from "lucide-react";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const newsItems = [
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
  ];

  return (
    <>
      <PageHero
        title={t("pages.newsPage.title")}
        titleHighlight={t("pages.newsPage.titleHighlight")}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
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
                  <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                    {t("news.readMore")}
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

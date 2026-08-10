import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("pages.articles.title")}
        titleHighlight={t("pages.articles.titleHighlight")}
      />
      <ComingSoon />
    </>
  );
}

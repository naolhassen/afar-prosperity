import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("pages.manifesto.title")}
        titleHighlight={t("pages.manifesto.titleHighlight")}
        description={t("pages.manifesto.description")}
      />
      <ComingSoon />
    </>
  );
}

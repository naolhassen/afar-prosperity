import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export default async function RulesOfProcedurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("pages.rulesOfProcedure.title")}
        titleHighlight={t("pages.rulesOfProcedure.titleHighlight")}
        description={t("pages.rulesOfProcedure.description")}
      />
      <ComingSoon />
    </>
  );
}

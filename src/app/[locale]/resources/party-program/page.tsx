import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export default async function PartyProgramPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("pages.partyProgram.title")}
        titleHighlight={t("pages.partyProgram.titleHighlight")}
        description={t("pages.partyProgram.description")}
      />
      <ComingSoon />
    </>
  );
}

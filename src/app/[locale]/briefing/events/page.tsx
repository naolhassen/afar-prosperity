import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("pages.events.title")}
        titleHighlight={t("pages.events.titleHighlight")}
      />
      <ComingSoon />
    </>
  );
}

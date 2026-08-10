import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("pages.pressRelease.title")}
        titleHighlight={t("pages.pressRelease.titleHighlight")}
      />
      <ComingSoon />
    </>
  );
}

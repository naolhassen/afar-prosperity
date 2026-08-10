import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export default async function LogoMeaningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("pages.logoMeaning.title")}
        titleHighlight={t("pages.logoMeaning.titleHighlight")}
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative mb-10">
              <Image
                src="/images/logo.jpg"
                alt="Prosperity Party Logo"
                fill
                sizes="192px"
                className="object-contain rounded-2xl shadow-xl"
              />
            </div>
            <p className="text-lg text-gray leading-relaxed text-center max-w-2xl">
              {t("pages.logoMeaning.description")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

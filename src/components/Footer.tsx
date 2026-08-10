"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold text-white leading-tight">
                  {locale === "aa"
                    ? "Leeda Partik"
                    : locale === "am"
                    ? "ብልፅግና ፓርቲ"
                    : "Prosperity Party"}
                </p>
                <p className="text-xs text-gray-light leading-tight">
                  {locale === "aa"
                    ? "Qafar Rakaakayih K/Buxak"
                    : locale === "am"
                    ? "አፋር ክልል ቅ/ፅ/ቤት"
                    : "Afar Region Branch"}
                </p>
              </div>
            </Link>
            <p className="text-sm text-gray-light leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-sm text-gray-light hover:text-accent transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about/vision-mission`}
                  className="text-sm text-gray-light hover:text-accent transition-colors"
                >
                  {t("nav.visionMission")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about/leadership`}
                  className="text-sm text-gray-light hover:text-accent transition-colors"
                >
                  {t("nav.leadership")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/briefing/news`}
                  className="text-sm text-gray-light hover:text-accent transition-colors"
                >
                  {t("nav.news")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-sm text-gray-light hover:text-accent transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              {t("nav.resources")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/resources/manifesto`}
                  className="text-sm text-gray-light hover:text-accent transition-colors"
                >
                  {t("nav.manifesto")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/resources/party-program`}
                  className="text-sm text-gray-light hover:text-accent transition-colors"
                >
                  {t("nav.partyProgram")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/resources/rules-of-procedure`}
                  className="text-sm text-gray-light hover:text-accent transition-colors"
                >
                  {t("nav.rulesOfProcedure")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-light mb-0.5">
                    {t("footer.email")}
                  </p>
                  <a
                    href="mailto:prosperityafarbranch@gmail.com"
                    className="text-sm text-white hover:text-accent transition-colors"
                  >
                    prosperityafarbranch@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-light mb-0.5">
                    {t("footer.address")}
                  </p>
                  <p className="text-sm text-white">
                    {t("footer.addressValue")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-sm text-gray-light">
            {t("footer.rights", { year: year.toString() })}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const localeLabels: Record<string, string> = {
    aa: "Qafaraf",
    am: "አማርኛ",
    en: "English",
  };

  const aboutLinks = [
    { href: `/${locale}/about/vision-mission`, label: t("visionMission") },
    { href: `/${locale}/about/leadership`, label: t("leadership") },
    { href: `/${locale}/about/formation`, label: t("formation") },
    { href: `/${locale}/about/structure`, label: t("structure") },
    { href: `/${locale}/about/logo-meaning`, label: t("logoMeaning") },
  ];

  const briefingLinks = [
    { href: `/${locale}/briefing/news`, label: t("news") },
    { href: `/${locale}/briefing/articles`, label: t("articles") },
    { href: `/${locale}/briefing/events`, label: t("events") },
    { href: `/${locale}/briefing/press-release`, label: t("pressRelease") },
  ];

  const resourceLinks = [
    { href: `/${locale}/resources/manifesto`, label: t("manifesto") },
    { href: `/${locale}/resources/party-program`, label: t("partyProgram") },
    {
      href: `/${locale}/resources/rules-of-procedure`,
      label: t("rulesOfProcedure"),
    },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Prosperity Party Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-dark leading-tight">
                {locale === "aa"
                  ? "Leeda Partik"
                  : locale === "am"
                  ? "ብልፅግና ፓርቲ"
                  : "Prosperity Party"}
              </p>
              <p className="text-xs text-gray leading-tight">
                {locale === "aa"
                  ? "Qafar Rakaakayih K/Buxak"
                  : locale === "am"
                  ? "አፋር ክልል ቅ/ፅ/ቤት"
                  : "Afar Region Branch"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href={`/${locale}`}
              className="px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted"
            >
              {t("home")}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted">
                {t("about")}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-dark hover:text-accent hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Briefing Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("briefing")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted">
                {t("briefing")}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                  {briefingLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-dark hover:text-accent hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted">
                {t("resources")}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-dark hover:text-accent hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Right side: Language Switcher + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-dark hover:text-accent border border-border rounded-lg hover:bg-muted transition-colors">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {localeLabels[locale]}
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full right-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[140px]">
                  {Object.entries(localeLabels).map(([code, label]) => (
                    <button
                      key={code}
                      onClick={() => switchLocale(code)}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        locale === code
                          ? "text-accent bg-muted font-medium"
                          : "text-dark hover:text-accent hover:bg-muted"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors"
            >
              {t("home")}
            </Link>

            {/* About */}
            <div>
              <button
                onClick={() => toggleDropdown("about-mobile")}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors"
              >
                {t("about")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "about-mobile" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "about-mobile" && (
                <div className="pl-4 space-y-1">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray hover:text-accent hover:bg-muted rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Briefing */}
            <div>
              <button
                onClick={() => toggleDropdown("briefing-mobile")}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors"
              >
                {t("briefing")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "briefing-mobile" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "briefing-mobile" && (
                <div className="pl-4 space-y-1">
                  {briefingLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray hover:text-accent hover:bg-muted rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources */}
            <div>
              <button
                onClick={() => toggleDropdown("resources-mobile")}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors"
              >
                {t("resources")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "resources-mobile" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "resources-mobile" && (
                <div className="pl-4 space-y-1">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray hover:text-accent hover:bg-muted rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

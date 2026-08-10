import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <PageHero
        title={t("contact.title")}
        titleHighlight={t("contact.titleHighlight")}
        description={t("contact.description")}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    {t("contact.nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    {t("contact.messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-accent hover:bg-[#8244a0] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
                >
                  {t("contact.submit")}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-dark mb-6">
                  {t("contact.info")}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray mb-1">
                        {t("contact.emailLabel")}
                      </p>
                      <a
                        href="mailto:prosperityafarbranch@gmail.com"
                        className="text-dark font-medium hover:text-accent transition-colors"
                      >
                        {t("contact.emailValue")}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-dark/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <p className="text-sm text-gray mb-1">
                        {t("contact.addressLabel")}
                      </p>
                      <p className="text-dark font-medium">
                        {t("contact.addressValue")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

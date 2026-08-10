import { useTranslations } from "next-intl";
import { Clock } from "lucide-react";

export default function ComingSoon() {
  const t = useTranslations("pages");

  return (
    <div className="py-20 text-center">
      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Clock className="w-10 h-10 text-accent" />
      </div>
      <p className="text-xl text-gray font-medium">{t("comingSoon")}</p>
    </div>
  );
}

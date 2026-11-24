import { Clock, MapPin, Navigation } from "lucide-react";
import { MAP, MAPS_URL, WEEKDAYS, WEEK_HOURS } from "@/lib/store";

const EMBED = `https://www.google.com/maps?q=${MAP.lat},${MAP.lng}&z=${MAP.z}&hl=pt-BR&output=embed`;

// Ordem de exibição: segunda a domingo.
const ORDER = [1, 2, 3, 4, 5, 6, 0];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1fr_320px] md:items-center">
        <div>
          <p className="font-display text-2xl">
            Barbearia <span className="text-primary">100 Erro</span>
          </p>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              {MAP.street}
              <br />
              {MAP.area} · CEP {MAP.zip}
            </span>
          </p>
          <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <ul className="space-y-0.5">
              {ORDER.map((d) => {
                const h = WEEK_HOURS[d];
                return (
                  <li key={d} className="flex gap-2">
                    <span className="w-20">{WEEKDAYS[d]}</span>
                    <span className={h ? "" : "text-primary"}>{h ? h.label : "Fechado"}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            <Navigation className="h-4 w-4" /> Como chegar
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-border shadow-glow">
          <iframe
            title="Mapa da Barbearia 100 Erro"
            src={EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-40 w-full md:h-44"
            tabIndex={-1}
          />
        </div>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        Barbearia 100 Erro · Ter a Sáb · domingo e segunda fechado
      </p>
    </footer>
  );
}

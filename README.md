# Software House UI

Strona internetowa software house'u zbudowana w Next.js.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**
- **Framer Motion** — animacje
- **react-hook-form** + **zod** — formularz kontaktowy

## Wymagania

- Node.js >= 20
- pnpm >= 10

## Uruchomienie

```bash
pnpm install
cp .env.example .env.local  # uzupełnij zmienne
pnpm dev
```

## Zmienne środowiskowe

| Zmienna    | Opis                              | Przykład                  |
|------------|-----------------------------------|---------------------------|
| `SITE_URL` | Produkcyjny URL (używany w sitemap) | `https://example.com` |

## Skrypty

| Komenda         | Opis                              |
|-----------------|-----------------------------------|
| `pnpm dev`      | Serwer deweloperski               |
| `pnpm build`    | Build produkcyjny + generuje sitemap |
| `pnpm lint`     | Sprawdź kod (Biome)               |
| `pnpm lint:fix` | Napraw błędy automatycznie        |

## Tooling

- **Biome** — linting i formatowanie
- **Husky** — git hooks (pre-commit, commit-msg)
- **lint-staged** — Biome tylko na staged files
- **commitlint** — conventional commits (`feat:`, `fix:`, `chore:` itd.)

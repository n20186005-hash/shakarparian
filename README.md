# Shakarparian visitor guide

Independent Urdu and English Astro guide for Shakarparian, Islamabad. Sixteen original guide/legal routes are preserved, with a noindex404 page. Facts and dated listing values are in `src/data/site.ts`; snapshots do not establish operator schedules, ticket prices or accessibility.

## Local validation

Node24 is required. Install the frozen pnpm lockfile, then run `pnpm check`, `pnpm build`, `pnpm verify:dist`, `node scripts/behavior-test.mjs` and `node scripts/audit.mjs`. Build output `dist/` is ignored and is rebuilt by deployment.

## Deployment

Cloudflare's existing production project is `shakarparian`, reflected in `wrangler.jsonc`. The Worker binds `ASSETS`, preserves path/query in HTTP/www canonical redirects and returns genuine404 responses with noindex. Confirm the target production build and existing domain bindings before publishing; the repo does not change security or Access settings.

## Images and privacy

Only two verified Pakistan Monument photos are used, both Fawad4real, CC BY-SA4.0, with source/date/licence/modification links visible on every page. See `public/images/README.md`. They illustrate the separate monument, not today's park entrance or facilities.

Google Analytics is optional and disabled until explicit consent. Denial disables measurement immediately, including when local-storage writes fail; a same-tab veto prevents stale-grant recovery where available. Maps loads separately from Google. Privacy and cookie pages describe actual behavior. The former service-worker cache is retired to avoid preserving old consent logic and visitor content.

## Sources

See `CONTENT-REVIEW.md` and each guide's public source section. Private analytics exports and diagnostics belong outside this repository.

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Oro Shogran" },
      { name: "theme-color", content: "#0B0B0B" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:site_name", content: "Oro Shogran" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@oroshogran" },
      { name: "geo.region", content: "PK-KP" },
      { name: "geo.placename", content: "Shogran, Kaghan Valley" },
      { name: "geo.position", content: "34.6397;73.4577" },
      { name: "ICBM", content: "34.6397, 73.4577" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Fira+Sans:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Hotel", "LodgingBusiness"],
          "@id": "https://www.oroshogran.com/#hotel",
          name: "Oro Shogran",
          alternateName: "ORO Shogran Hotel & Resort",
          description:
            "Luxury family hotel in Shogran, Kaghan Valley — mountain-view suites, guided jeep tours to Siri Paye, bonfires and slow local cuisine.",
          url: "https://www.oroshogran.com/",
          telephone: "+92-347-904-4301",
          email: "info@oroshogran.com",
          priceRange: "₨16,500 – ₨33,500",
          currenciesAccepted: "PKR",
          paymentAccepted: "Cash, Credit Card, Bank Transfer",
          starRating: { "@type": "Rating", ratingValue: "4" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "128",
            bestRating: "5",
            worstRating: "1",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shogran",
            addressLocality: "Shogran",
            addressRegion: "Khyber Pakhtunkhwa",
            postalCode: "21210",
            addressCountry: "PK",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 34.6397,
            longitude: 73.4577,
          },
          areaServed: ["Shogran", "Kaghan Valley", "Siri Paye", "Makra Peak", "Naran"],
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
            { "@type": "LocationFeatureSpecification", name: "24/7 Hot Water", value: true },
            { "@type": "LocationFeatureSpecification", name: "Bonfire", value: true },
            { "@type": "LocationFeatureSpecification", name: "Guided Jeep Tours", value: true },
            { "@type": "LocationFeatureSpecification", name: "Mountain View", value: true },
            { "@type": "LocationFeatureSpecification", name: "Family Rooms", value: true },
            { "@type": "LocationFeatureSpecification", name: "On-site Parking", value: true },
            { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
          ],
          checkinTime: "14:00",
          checkoutTime: "11:00",
          numberOfRooms: 12,
          petsAllowed: false,
          smokingAllowed: false,
          sameAs: [
            "https://www.facebook.com/oroshogran",
            "https://www.instagram.com/oroshogran",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Oro Shogran",
          url: "https://www.oroshogran.com/",
          logo: "https://www.oroshogran.com/favicon.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+92-347-904-4301",
            contactType: "reservations",
            areaServed: "PK",
            availableLanguage: ["English", "Urdu"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Oro Shogran",
          url: "https://www.oroshogran.com/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.oroshogran.com/blogs?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

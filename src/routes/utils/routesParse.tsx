import React from 'react';
import type { RouteDefFinal, RoutesParseProps } from "../routes.types";

export function RoutesParse(props: RoutesParseProps): RouteDefFinal[] {
    const { defs, loading } = props;

    if (!Array.isArray(defs)) return [];

    return defs.reduce<RouteDefFinal[]>((acc, route) => {
        const { element, children, ...propsRoute } = route;
        let Page: React.ReactNode = null;

        if (typeof element === "string") {
            const LazyPage = React.lazy(async () => await import(/* @vite-ignore */ `../../pages/${element}`));
            Page = (
                <React.Suspense fallback={loading}>
                    <LazyPage />
                </React.Suspense>
            )
        }

        return acc.concat({
            ...propsRoute,
            children: RoutesParse({ defs: children, loading }),
            element: (Page !== null) ? Page : element,
        } satisfies RouteDefFinal);
    }, []);
}
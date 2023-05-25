export interface RouteDef {
    index?: boolean;
    path?: string;
    element: string | React.ReactNode;
    children?: RouteDef[];
}

export interface RoutesParseProps {
    defs?: RouteDef[];
    loading?: JSX.Element;
}

export interface RouteDefFinal {
    path?: string;
    element: React.ReactNode;
    children?: RouteDefFinal[];
}
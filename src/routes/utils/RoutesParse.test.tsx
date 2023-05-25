import { RoutesParse } from ".";
import { RouteDef, RouteDefFinal } from "../routes.types";

describe('RoutesParse', () => {
  // Tests that the function returns an empty array when given an empty array of RouteDefs. 
  it("test_routes_parse_returns_empty_array_when_given_empty_defs", () => {
    const result = RoutesParse({ defs: [] });
    expect(result).toEqual([]);
  });

  // Tests that RoutesParse returns an array of RouteDefFinals with the correct properties and elements when given a valid array of RouteDefs. 
  it("test_routes_parse_parses_valid_route_defs", () => {
    const validDefs: RouteDef[] = [
      {
        path: "/home",
        element: <div>Elemen</div>,
        children: [
          {
            path: "/home/profile",
            element: <div>/home/profile</div>,
          },
          {
            path: "/home/settings",
            element: <div>/home/settings</div>,
          },
        ],
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
    ];

    const expectedOutput: RouteDefFinal[] = [
      {
        path: "/home",
        element: <div>Elemen</div>,
        children: [
          {
            path: "/home/profile",
            element: <div>/home/profile</div>,
            children: [],
          },
          {
            path: "/home/settings",
            element: <div>/home/settings</div>,
            children: [],
          },
        ],
      },
      {
        path: "/about",
        element: <div>about</div>,
        children: [],
      },
    ];

    expect(RoutesParse({ defs: validDefs })).toEqual(expectedOutput);
  });

  // Tests that the function returns an array of RouteDefFinals with the correct structure and lazy-loaded pages when given a valid array of RouteDefs. 
  it("test_routes_parse_returns_correctly_structured_array_of_routedefinals_with_lazy_loaded_pages", () => {
    const defs = [
      { path: "/", element: "Home" },
      { path: "/about", element: "About" },
      { path: "/contact", element: "Contact" }
    ];
    const loading = <div>Loading...</div>;
    const result = RoutesParse({ defs, loading });
    expect(result).toEqual([
      { path: "/", element: expect.any(Object), children: [] },
      { path: "/about", element: expect.any(Object), children: [] },
      { path: "/contact", element: expect.any(Object), children: [] }
    ]);
  });

  // Tests that the function returns a RouteDefFinal with an empty children array property when given a RouteDef with no children property. 
  it("test_routes_parse_handles_route_def_with_no_children_property", () => {
    const defs = [{ path: "/", element: "Home" }];
    const loading = <div>Loading...</div>;
    const result = RoutesParse({ defs, loading });
    expect(result).toEqual([{ path: "/", element: expect.any(Object), children: [] }]);
  });

  // Tests that the function correctly handles nested RouteDefs and returns a correctly structured array of RouteDefFinals. 
  it("test_routes_parse_handles_nested_routedefs_and_reutrns_correctly_structured_array_of_routedefinals", () => {
    const defs = [
      {
        path: "/",
        element: "Home",
        children: [
          { path: "/about", element: "About" },
          { path: "/contact", element: "Contact" }
        ]
      }
    ];
    const loading = <div>Loading...</div>;
    const result = RoutesParse({ defs, loading });
    expect(result).toEqual([
      {
        path: "/",
        element: expect.any(Object),
        children: [
          { path: "/about", element: expect.any(Object), children: [] },
          { path: "/contact", element: expect.any(Object), children: [] }
        ]
      }
    ]);
  });
});

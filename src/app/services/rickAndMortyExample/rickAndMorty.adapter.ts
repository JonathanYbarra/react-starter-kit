export const response = {
    user: {
        id: 1,
        username: "Jhon Doe",
        email: "jon.doe@gmail.com",
        firstName: "John",
        lastName: "Doe"
    },
    role: {
        id: 1,
        name: "ADMIN"
    },
    permissions: [
        {
            id: 1,
            menu: {
                id: 1,
                label: "Forecast",
                url: "/forecast",
                icon: "fa-chart-line",
                order: 2,
                enabled: true
            },
            sections: [
                {
                    id: 1,
                    name: "forecast list",
                    order: 1,
                    enabled: true,
                    reorder: true,
                    key: 'FRCT'
                },
                {
                    id: 2,
                    name: "chart line",
                    order: 2,
                    enabled: true,
                    reorder: false,
                    key: 'CHART',
                    actions: [
                        {

                        }
                    ]
                },
                {
                    id: 3,
                    name: "sku list",
                    order: 3,
                    enabled: true,
                    reorder: true,
                    key: 'SKU'
                },
            ]
        },

        {
            id: 2,
            menu: {
                id: 2,
                label: "Bienvenida",
                url: "/welcome",
                icon: "fa-home",
                order: 1,
                enabled: true
            },
            sections: [
                {
                    id: 4,
                    name: "profile card",
                    order: 1,
                    enabled: true,
                    reorder: true,
                    key: 'PF_CRD'
                },
                {
                    id: 5,
                    name: "notifications",
                    order: 2,
                    enabled: true,
                    reorder: false,
                    key: 'NOTIF'
                },
                {
                    id: 6,
                    name: "forecast favorite",
                    order: 3,
                    enabled: true,
                    reorder: true,
                    key: 'FCTF'
                },
                {
                    id: 7,
                    name: "calendar",
                    order: 4,
                    enabled: true,
                    reorder: true,
                    key: 'CAL'
                },
            ]
        }
    ]
}

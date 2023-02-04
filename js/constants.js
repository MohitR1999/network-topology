const BASE_URL = 'http://localhost:3000'
const SOCKET_URL = 'http://localhost:9000'
const APP_PARENT_DIV = "root";
const APP_PATTERN = "2U";
const APP_SIDEBAR_CONFIG = {
    parent : APP_PARENT_DIV,
    template : "tiles",
    header : true,
    autohide : true,
    items : [
        {
            id : "topology_view",
            text : "Topology View",
            icon : "res/icons/hub_filled.svg",
            selected : true
        },

        {
            id : "manage_nodes",
            text : "Manage Nodes",
            icon : "res/icons/spoke_fill.svg",
        },

        {
            id : "manage_tl",
            text : "Manage TLs",
            icon : "res/icons/lan_filled.svg",
        },

        {
            id : "manage_services",
            text : "Manage Services",
            icon : "res/icons/settings_ethernet_fill.svg",
        }
    ]
};
const APP_RIBBON_CONFIG = {
    tabs: [
        {
            id: "home",
            text: "Home",
            active: true,
            items: [
                {
                    type: "block", text: "Sync", list: [
                        {
                            id: "refresh", type: "button", text: "Refresh", isbig: true, img: "res/icons/sync.svg", imgdis: "res/icons/sync.svg"
                        }
                    ]
                },

                {
                    type: "block", text: "Manage Nodes", list: [
                        {
                            id: "add_node", type: "button", text: "Add Node", isbig: true, img: "res/icons/add_circle.svg", imgdis: "res/icons/add_circle.svg"
                        },
                        {
                            id: "delete_node", type: "button", text: "Delete Node", isbig: true, img: "res/icons/delete_circle.svg", imgdis: "res/icons/delete_circle.svg"
                        }
                    ]
                },

                {
                    type: "block", text: "Manage Links", list: [
                        {
                            id: "create_tl", type: "button", text: "Create TL", isbig: true, img: "res/icons/add.svg", imgdis: "res/icons/add.svg"
                        },
                        {
                            id: "delete_tl", type: "button", text: "Delete TL", isbig: true, img: "res/icons/delete.svg", imgdis: "res/icons/delete.svg"
                        },

                        {
                            id: "view_rings", type: "button", text: "View Rings on TL", img: "res/icons/hub.svg", imgdis: "res/icons/hub.svg"
                        },
                        {
                            id: "view_optical_power_report", type: "button", text: "View Optical Power Report", img: "res/icons/analytics.svg", imgdis: "res/icons/analytics.svg"
                        },
                        {
                            id: "view_tl_bw", type: "button", text: "View TL Bandwidth Utilization", img: "res/icons/bar_chart.svg", imgdis: "res/icons/bar_chart.svg"
                        },
                    ]
                }
            ]
        },

        {
            id: "view",
            text: "View",
            items: [

            ]
        }
    ]
}

const APP_NODE_ADDITION_WINDOW_PROPS = {
    X : 300,
    Y : 100,
    WIDTH : 350,
    HEIGHT : 250
}

const APP_NODE_ADDITION_FORM_CONFIG = [
    {
        type : "settings", position: "label-top", inputWidth : 300
    },
    
    {
        type: "block", name: "data",
        list: [
            { type: "input", name: "ip", label: "IP Address:", required : true },
            { type: "button", name: "proceed", value: "Proceed" }
        ]
    }
]
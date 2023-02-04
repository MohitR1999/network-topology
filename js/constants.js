const APP_PARENT_DIV = "root";
const APP_PATTERN = "2U";
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
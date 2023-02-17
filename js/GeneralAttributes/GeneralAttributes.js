class GeneralAttributesPage extends WizardPage {
    /**
     * Returns an object of General Attributes page
     * @param {String} id Unique ID of the page 
     * @param {Wizard} parentWizard Parent wizard
     */
    constructor(id, parentWizard) {
        super(id, parentWizard);
        const _self = this;
        this.layout = new dhtmlXLayoutObject(parentWizard.getCellById(id), "1C");
        this.contentCell = this.layout.cells("a");
        this.contentCell.hideHeader();
        this.form = this.contentCell.attachForm([
            {
                type: "settings", inputWidth : 250, position : "label-left", labelWidth : 200
            },
            {
                type : "fieldset", name : "general_attributes", label : "General Attributes", width : 500, offsetLeft : 10,
                list : [
                    {
                        type : "input", name : "service_name", label : "Service Name"
                    },

                    {
                        type : "combo", name : "service_technology", label : "Technology",
                        options : [
                            {
                                text : "MPLS-TP", value : "MPLS_TP"
                            },

                            {
                                text : ".1q/.1ad", value : "DOT1Q_DOT1AD"
                            }
                        ]
                    },

                    {
                        type : "checkbox", label : "Apply VRF Configuration", checked : true, name : "vrf_configuration"
                    }
                ]
            }
        ]);

        this.form.attachEvent("onChange", function(name, value, state) {
            if (name === "vrf_configuration") {
                if (state == true) {
                    // show VRF page
                    _self.parentWizard.sidebar.cells("vrf_selection").show();
                } else {
                    // hide VRF page
                    _self.parentWizard.sidebar.cells("vrf_selection").hide();
                }
            }
        })
    }

    next() {
        const serviceName = this.form.getItemValue("service_name");
        if (serviceName) {
            console.log("Validated");
            return true;
        } else {
            return false;
        }
    }
}
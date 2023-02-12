class GeneralAttributesPage extends WizardPage {
    /**
     * Returns an object of General Attributes page
     * @param {String} id Unique ID of the page 
     * @param {Object} parent HTML element that would contain all the content of the wizard page
     */
    constructor(id, parent) {
        super(id, parent);
        this.layout = new dhtmlXLayoutObject(parent, "1C");
        this.contentCell = this.layout.cells("a");
        this.contentCell.hideHeader();
        this.form = this.contentCell.attachForm([
            {
                type: "settings", inputWidth : 250, position : "label-left", labelWidth : 100
            },
            {
                type : "fieldset", name : "general_attributes", label : "General Attributes", width : 400, offsetLeft : 10,
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
                    }
                ]
            }
        ]);
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
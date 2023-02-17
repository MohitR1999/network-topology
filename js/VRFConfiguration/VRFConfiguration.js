class VRFConfiguration extends WizardPage {
    constructor(id, parent) {
        super(id, parent);
        this.layout = new dhtmlXLayoutObject(parent, "1C");
        this.layout.cells("a").setText("VRF Configuration");
    }
}
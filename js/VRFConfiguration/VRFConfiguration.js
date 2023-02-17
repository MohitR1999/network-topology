class VRFConfiguration extends WizardPage {
    constructor(id, parentWizard) {
        super(id, parentWizard);
        this.layout = new dhtmlXLayoutObject(parentWizard.getCellById(id), "1C");
        this.layout.cells("a").setText("VRF Configuration");
    }
}
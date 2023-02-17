class TopologySelection extends WizardPage {
    constructor(id, parent) {
        super(id, parent);
        this.layout = new dhtmlXLayoutObject(parent, "1C");
        this.layout.cells("a").setText("Topology Selection");
    }
}
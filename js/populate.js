function populateAppManageNodesDataStore() {
    fetch(`${BASE_URL}/nodes`)
    .then(res => res.json())
    .then(data => {
        appManageNodesGridDataStore.parse(data);
    })
}

function populateAppTopologyViewGraph() {
    fetch(`${BASE_URL}/graph/data`)
    .then(res => res.json())
    .then(data => {
        appGraph.add(data);
        const layout = appGraph.layout({
            name : 'grid',
            fit: true,
            rows : 3,
            cols : 3
        });
        layout.run();
    })
}
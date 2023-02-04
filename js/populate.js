function populateAppManageNodesDataStore() {
    fetch(`${BASE_URL}/nodes`)
    .then(res => res.json())
    .then(data => {
        appManageNodesGridDataStore.parse(data);
    })
}
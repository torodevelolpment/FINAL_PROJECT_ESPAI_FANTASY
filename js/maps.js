// Initialize and add the map
function initMap() {
    // The location of barcelona
    const barcelona = { lat: 41.38879, lng: 2.15899 };
    // The map, centered at barcelona
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.38879, lng: 2.15899 },
        zoom: 11,
        mapId: '5a8c7be964031600'
    });

    // The marker, positioned at barcelona
    const marker = new google.maps.Marker({
        position: barcelona,
        map: map,
    });
}
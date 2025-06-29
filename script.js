document.addEventListener('DOMContentLoaded', () => {
  const components = [
    { name: "Motor (1000KV)", img: "images/motor-kv1000.jpg", price: "₹350–₹600" },
    { name: "ESC (30A)", img: "images/esc-30a.jpg", price: "₹300–₹500" },
    { name: "Flight Controller (F405)", img: "images/flightcontroller-f405.jpg", price: "₹1000–₹1800" },
    { name: "GPS (NEO-6M)", img: "images/gps-neo6m.jpg", price: "₹650–₹900" },
    { name: "IMU (MPU-9250)", img: "images/imu-mpu9250.jpg", price: "₹450–₹700" },
    { name: "Barometer (BMP280)", img: "images/barometer-bmp280.jpg", price: "₹150–₹300" },
    { name: "Battery (3S LiPo)", img: "images/battery-3s.jpg", price: "₹1000–₹1500" },
    { name: "Propeller (1045)", img: "images/propeller-1045.jpg", price: "₹150–₹300" },
    { name: "Frame (450mm)", img: "images/frame-450mm.jpg", price: "₹700–₹1200" },
    { name: "PDB", img: "images/pdb-board.jpg", price: "₹200–₹350" }
  ];
  const catalog = document.getElementById("componentCatalog");
  if (catalog) {
    components.forEach(c => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<img src="${c.img}" alt="${c.name}"><h3>${c.name}</h3><p>${c.price}</p>`;
      catalog.appendChild(card);
    });
  }
});

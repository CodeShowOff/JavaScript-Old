// ==============================
// Callback Function:
// ==============================

/*
This function dynamically loads an external JavaScript file (script)
and runs a callback once the script has successfully loaded.

🔁 Reusable for loading multiple scripts with different behavior after loading.
*/

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;

    script.onload = function () {
        console.log("Script loaded successfully from:", src);
        callback(); // call the function passed as an argument
    };

    script.onerror = function () {
        console.error("Failed to load script from:", src);
    };

    document.body.appendChild(script);
}

// ==============================
// 🔧 Callback Functions to Run After Script Loads
// ==============================

function hello() {
    console.log("hello");
}

function goodmorning() {
    console.log("goodmorning");
}

// ==============================
// 📌 Usage Example — Named Functions as Callbacks
// ==============================

loadScript("https://www.example.com/script1.js", hello);
loadScript("https://www.example.com/script2.js", goodmorning);

/*
❓ Why use a callback?
✅ Because it gives us the flexibility to decide what should happen
   *after* the script loads — instead of hardcoding actions in `loadScript`.

Without callbacks, we would have to duplicate the script-loading logic
for every different behavior, which is inefficient and not modular.
*/

// ==============================
// 📌 Usage Example — Anonymous Function as Callback
// ==============================

loadScript("https://www.example.com/script3.js", function () {
    console.log("hey there");
});
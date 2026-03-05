/**
 * research_data.js - Klausner's Box Project
 * Master Narrative and Chapter Database
 * Status: RECALIBRATED - Chapter 2 "Legacy" Fully Integrated
 */

(function() {
    const data = {
        // --- 01_ARCHIVE_1949 ---
        origin: {
            title: "PROJECT: KLAUSNER’S BOX",
            subtitle: "SUBJECT: Historical Case File #1949-RD (The Dahl Observations)",
            body: `
                <p style="color:var(--alert-amber); font-weight:bold;">STATUS: ARCHIVED / ESSENTIAL BACKGROUND</p>
                <br>
                <b>THE PHENOMENON:</b><br>
                In the late 1940s, a researcher named Klausner developed a rudimentary "Sound Machine." His hypothesis was simple yet terrifying: the world is filled with a vast, high-pitched "shrieking" that the human ear is too blunt to register. 
                <br><br>
                <b>THE DISCOVERY:</b><br>
                Using a wooden box equipped with a complex array of dials and a set of headphones, Klausner began to tune into frequencies above 15,000 vibrations per second. What he heard was not silence, but a "faint, needle-like scream."
                <br><br>
                <b>CURRENT MISSION:</b><br>
                At "Sound endeavourS," we have rebuilt the “Box.” We pick up Klausner’s research and continue the story. The unheard is finally being recorded.
                <br><br>
                <hr style="border:0; border-top:1px dashed var(--ui-border);">
                <br>
                <a href="https://www.newyorker.com/magazine/1949/09/17/the-sound-machine" target="_blank">Access Original 1949 New Yorker Case File</a>
            `
        },

        // --- 02_LOG_ENTRIES (CHAPTER ARCHIVE) ---
        logs: {
            log_01: { 
                title: "THE RETURN TO THE FOSSIL", 
                subtitle: "LOG_ENTRY: 01", 
                body: `The air at the edge of the estate was thick with the scent of damp earth and neglected pine, a heavy, rhythmic stillness that Klausner hadn’t felt in decades. The cottage sat like a fossil in the overgrowth, its stone walls surrendered to ivy that seemed to pulse with a slow, vegetable intent. <br><br> Inside, the dust was a shroud over a life abandoned. He bypassed the Main House, drawn by a magnetic pull toward the back, where the Cottage and the “forbidden Garden Lab" waited. Opening the door, sealed for more than 70 years, released the stale air that smelled of ozone and ancient paper. “This was Granddad’s world, his research lab,” he said to himself, “I will make it mine.” <br><br> As Klausner threw the master power switch, the lights in the flint-and-mortar lab dimmed significantly. The Box didn't just turn on; it began to hum with a vibration that he felt in his teeth. Suddenly, the lab erupted in sound… 
                <br><br>
                <div class="audio-link">
                    <button onclick="window.open('https://youtu.be/ZNIhFT7wBno?si=AbD7YEcl-Tba8560')" 
                            style="background:var(--alert-amber); color:black; font-weight:bold; width:100%; text-align:center; padding:15px; border:none; cursor:pointer; font-family:inherit;">
                            [▶] MONITOR SIGNAL: TRACK_01
                    </button>
                </div>`
            },
            log_02: {
                title: "KLAUSNER’S BOX: LEGACY",
                subtitle: "LOG_ENTRY: 02",
                body: `“...Pay attention boy,” his father said sternly, tapping the end of his pen on the hard plastic shell of the phone next to him on the desk. “There is no hiding in the numbers, Kevin, remember that” his father’s advice echoed. “Kevin, Kevin…” the voice sounded distant. <br><br> Klausner’s head ached and he felt the disorientation of waking up and realizing you’re not at home, in your own bed. “Where am I?”, his eyes were open but he couldn’t see anything. In the darkness he felt the cold stone floor and the voice again, “Kevin, are you alright?” it was Aria, from his bio-watch. It all came rushing back, the sound… Klausner felt a sudden rush of fear, he realized he was lying on the lab floor, in the dark, he didn't wait for his eyes to adjust, with a frantic, stumbling grace, he jumped to his feet, shoved the heavy oak chair in his way, sending it clattering against the work bench, bolted for the lab door, slammed it open with his shoulder and sprinted to the safety of the cottage. <br><br> “I’m OK, Aria… I think.” He replied as he bent over trying to catch his breath. After a few minutes of silence and calm Klausner got up and rekindled the fire in the cottage hearth. Mentally exhausted, Klausner slipped from trance into sleep, but it was a restless sleep.
                <br><br>
                <div class="audio-link">
                    <button onclick="window.open('https://youtu.be/56eC-rr1ndE')" 
                            style="background:var(--alert-amber); color:black; font-weight:bold; width:100%; text-align:center; padding:15px; border:none; cursor:pointer; font-family:inherit;">
                            [▶] MONITOR SIGNAL: TRACK_02
                    </button>
                </div>`
            }
        },
        
        // --- STATION DEFAULTS ---
        field: {
            title: "FIELD RELAY",
            subtitle: "STN_LOG: SENSOR_ARRAY_01",
            body: `Active sensors placed at the edge of the forest. High-frequency oscillations detected at 42kHz. Nature is not silent; it is merely unheard by the uninitiated.
            <br><br>
            <hr style="border:0; border-top:1px dashed var(--ui-border); margin:20px 0;">
            <p style="text-align:center;">
                <a href="https://www.soundendeavours.com" target="_blank" style="color:var(--alert-amber); font-weight:bold; text-decoration:none;">
                    [ UPLINK ] Connect to Sound endeavourS HQ
                </a>
            </p>`
        },
        social: {
            title: "NETWORK LINKS",
            subtitle: "UPLINK: EXTERNAL_CHANNELS",
            body: "Follow the frequencies:<br><br>* <a href='https://www.youtube.com/@KlausnersBox' target='_blank'>YouTube</a><br>* <a href='https://x.com/KlausnersBox' target='_blank'>X</a>"
        },
        contact: {
            title: "CONTACT STATION",
            subtitle: "UPLINK: SECURE_COMMS",
            body: "To report anomalous frequencies, transmit to: <a href='mailto:klausnersbox@gmail.com'>klausnersbox@gmail.com</a>"
        }
    };

    window.researchData = data;
})();
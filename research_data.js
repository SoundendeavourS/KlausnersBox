/**
 * research_data.js - Klausner's Box Project
 * Master Narrative and Character Database
 * Status: FULL RESTORATION - Dahl Observations & Entry 01
 */

(function() {
    const data = {
        // 01_ARCHIVE_1949 - THE DAHL OBSERVATIONS
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
                <b>KEY FIELD OBSERVATIONS:</b><br>
                1. <i>The Flora Response:</i> While monitoring a neighbor’s garden, Klausner recorded a "shriek of a flower" at the exact moment it was severed from its stem. It was a cold, neutral, yet agonizing sound.<br>
                2. <i>The Tree Trauma:</i> Upon striking a large oak with an axe, Klausner reported a "low, vibrating moan" that resonated through his headphones—a sound of immense, ancient suffering.
                <br><br>
                <b>THE AFTERMATH:</b><br>
                Klausner’s initial research ended abruptly during a final experiment under a local park's tree. A falling branch destroyed the original device, silencing the vibrations. Klausner was left in a state of scientific obsession, unable to prove what he had heard to the witnesses present.
                <br><br>
                <b>CURRENT MISSION:</b><br>
                At "Sound endeavourS," we have rebuilt the “Box” and we pick up Klausner’s research and continue the story. We are no longer just listening; we are capturing. The unheard is finally being recorded.
                <br><br>
                <hr style="border:0; border-top:1px dashed var(--ui-border);">
                <br>
                <a href="https://archive.org/details/TheSoundMachineRoaldDahl" target="_blank">Click Here To Open An External Link To The Original Story.</a>
            `
        },

        // 02_LOG_ENTRIES - FULL NARRATIVE
        log_01: { 
            title: "THE RETURN TO THE FOSSIL", 
            subtitle: "ENTRY_01", 
            body: "The air at the edge of the estate was thick with the scent of damp earth and neglected pine, a heavy, rhythmic stillness that Klausner hadn’t felt in decades. The cottage sat like a fossil in the overgrowth, its stone walls surrendered to ivy that seemed to pulse with a slow, vegetable intent. Klausner stood there in the driveway looking at the cottage and the work ahead and smiled. Retirement here, in this peaceful setting is exactly what I need to finally work on my music instead of someone else’s. <br><br> As Klausner turned the heavy iron key—a relic from his father’s desk—the door groaned, a low-frequency protest that vibrated through his marrow. Inside, the dust was a shroud over a life abandoned. He bypassed the Main House, drawn by a magnetic pull toward the back, where the Cottage and the 'forbidden Garden Lab' waited. The lab was a solid stone structure, like the Cottage and the Main House as well. It was almost as big as the cottage and overgrown with ivy, looking like something from a fairy-tale. Opening the door, sealed for more than 70 years, released the stale air that smelled of ozone and ancient paper. Thick columns of dust floated heavily in the light streaming in from the high, narrow windows, dancing in the late afternoon sun. The Estate belonged to Klausner’s Grandmother’s family 'This was Granddad’s world, his research lab' he said to himself, 'I will make it mine.'" 
        },
        
        field: {
            title: "FIELD RELAY",
            subtitle: "STN_LOG: SENSOR_ARRAY_01",
            body: "Active sensors placed at the edge of the forest. High-frequency oscillations detected at 42kHz. Nature is not silent; it is merely unheard by the uninitiated."
        },
        social: {
            title: "NETWORK LINKS",
            subtitle: "UPLINK: EXTERNAL_CHANNELS",
            body: "Follow the frequencies:<br><br>* <a href='https://www.youtube.com/@KlausnersBox' target='_blank'>YouTube</a><br>* <a href='https://x.com/KlausnersBox' target='_blank'>X / Twitter</a><br>* <a href='https://suno.com/@klausnersbox' target='_blank'>Suno</a>"
        },
        contact: {
            title: "CONTACT STATION",
            subtitle: "UPLINK: SECURE_COMMS",
            body: "To report anomalous frequencies or request data access, transmit your query to the lead researcher via the encrypted channel: <a href='mailto:klausnersbox@gmail.com'>klausnersbox@gmail.com</a>"
        }
    };

    // Essential link to station.html
    window.researchData = data;
})();
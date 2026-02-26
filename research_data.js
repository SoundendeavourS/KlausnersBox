/**
 * research_data.js - Klausner's Box Project
 * Master Narrative and Character Database
 * Status: Calibrated / Ready for Push
 */

(function() {
    const data = {
        // 01_ARCHIVE_1949
        origin: {
            title: "PROJECT: KLAUSNER'S BOX",
            subtitle: "STN_LOG: ARCHIVE_SUMMARY_RECOVERY",
            body: "<b>PROJECT:</b> Klausner's Box<br><b>PROTAGONIST:</b> Klausner (Kevin)<br><b>ASSISTANT:</b> Aria<br><br><b>RESEARCH NOTE:</b> The objective is the reconstruction of the 1950s vibration-capture device. After 40 years of professional audio experience and a Master’s in Acoustic Engineering, the protagonist has returned to the family estate. Reverting to original vacuum-tube schematics following silicon-based processor failures."
        },

        // 02_LOG_ENTRIES
        log_01: { 
            title: "THE RETURN TO THE FOSSIL", 
            subtitle: "ENTRY_01", 
            body: "The air at the edge of the estate was thick with the scent of damp earth and neglected pine, a heavy, rhythmic stillness that Klausner hadn’t felt in decades. The cottage sat like a fossil in the overgrowth, its stone walls surrendered to ivy that seemed to pulse with a slow, vegetable intent. Klausner stood there in the driveway looking at the cottage and the work ahead and smiled. Retirement here, in this peaceful setting is exactly what I need to finally work on my music instead of someone else’s." 
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

    // Global bridge for station.html
    window.researchData = data;
})();
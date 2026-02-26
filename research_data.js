/**
 * research_data.js - Klausner's Box Project
 * Master Narrative and Character Database
 */

(function() {
    const data = {
        // 01_ARCHIVE_1949 - THE RECOVERY SUMMARY
        origin: {
            title: "PROJECT: KLAUSNER'S BOX",
            subtitle: "STN_LOG: ARCHIVE_SUMMARY_RECOVERY",
            body: "<b>SUBJECT:</b> Reconstruction of the vibration-capture device.<br><b>STATUS:</b> Active. Reverting to 1950s vacuum-tube schematics.<br><b>NOTES:</b> All silicon-based testing resulted in thermal loops. The greenish-blue crystal is now integrated into the primary housing."
        },

        // 02_LOG_ENTRIES (Mapping the story correctly)
        log_01: { 
            title: "LOG_01: THE RETURN TO THE FOSSIL", 
            subtitle: "ENTRY: 001", 
            body: "The air at the edge of the estate was thick with the scent of damp earth and neglected pine. The cottage sat like a fossil in the overgrowth. Retirement here is exactly what I need to finally work on my music instead of someone else’s." 
        },
        log_02: { 
            title: "LOG_02: THE FORBIDDEN LAB", 
            subtitle: "ENTRY: 002", 
            body: "As Klausner turned the heavy iron key, the door groaned. The lab was a solid stone structure, sealed for more than 70 years. “This was Granddad’s world,” he said to himself, “I will make it mine.”" 
        },
        log_03: { 
            title: "LOG_03: ACTIVATION AND ARIA", 
            subtitle: "ENTRY: 003", 
            body: "“Aria, status” he queried. “System status is 100%,” replied Aria. “The power here is noisy but I can filter it.” A thank you from Klausner came naturally, even to his A.I. assistant." 
        },
        log_04: { 
            title: "LOG_04: THE CENTERPIECE", 
            subtitle: "ENTRY: 004", 
            body: "Under a tarp sat the ruined “Box”. Kevin found a small crystal; opaque with a cloudy greenish-blue color. “Fascinating,” he quipped. “Aria, analyze this.”" 
        },
        log_05: { 
            title: "LOG_05: THE FAMILY TRAIT", 
            subtitle: "ENTRY: 005", 
            body: "As he set his coffee cup down, his hand trembled. That tremor was a family trait; his father had it, and his grandfather before him. “Must be this damp stone,” he thought." 
        },
        log_06: { 
            title: "LOG_06: THE CRYSTAL ANALYSIS", 
            subtitle: "ENTRY: 006", 
            body: "“I finished the analysis,” Aria said. “That’s an unusual crystal, Aria. None of its properties suggest why it was part of a scientific experiment.”" 
        },
        log_07: { 
            title: "LOG_07: THE RECONSTRUCTION", 
            subtitle: "ENTRY: 007", 
            body: "Klausner continued the chore of setting up his DAW and synthesizers. The silence of the stone room was absolute until Aria’s voice cut through it, startling him." 
        },
        log_08: { 
            title: "LOG_08: THE DRIVING NEED", 
            subtitle: "ENTRY: 008", 
            body: "The desire to relax was eclipsed by a driving need to rebuild the Box. “I have a Master’s in Acoustic Engineering. I can rebuild this and get to the bottom of this blight.”" 
        },
        log_09: { 
            title: "LOG_09: ABANDONING SILICON", 
            subtitle: "ENTRY: 009", 
            body: "A year of building ended in frustration. Silicon microprocessors failed. Kevin decided to follow the journals to the letter, inserting the crystal into the housing." 
        },
        log_10: { 
            title: "LOG_10: THE HUM AND THE ERUPTION", 
            subtitle: "ENTRY: 010", 
            body: "The lights in the lab dimmed significantly. The Box began to hum with a vibration Kevin felt in his teeth. Suddenly, the lab erupted in sound..." 
        },

        field: { title: "FIELD RELAY", subtitle: "SIGNAL_ANALYSIS", body: "Sensors detecting rhythmic pulses at the 40kHz threshold. Nature is beginning to scream." },
        social: { title: "COMMUNICATIONS HUB", subtitle: "OUTREACH", body: "Follow the research:<br><br>> <a href='https://x.com/Klausnersbox' target='_blank'>X_FEED</a><br>> <a href='https://suno.com/@klausnersboxx' target='_blank'>SUNO_FORGE</a>" },
        contact: { title: "CONTACT STATION", subtitle: "ENCRYPTED", body: "Broadcast your frequency: <a href='mailto:research@klausnersbox.com'>research@klausnersbox.com</a>" }
    };

    window.researchData = data;
})();
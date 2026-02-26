/**
 * research_data.js - Klausner's Box Project
 * Master Narrative and Character Database
 * Re-aligned for Research Station UI
 */

const researchData = {
  // 01_ARCHIVE_1949 Button
  origin: {
    title: "THE RETURN TO THE FOSSIL",
    subtitle: "STN_LOG: ARCHIVE_RECOVERY_1949",
    body: `The air at the edge of the estate was thick with the scent of damp earth and neglected pine, a heavy, rhythmic stillness that Klausner hadn’t felt in decades. The cottage sat like a fossil in the overgrowth, its stone walls surrendered to ivy that seemed to pulse with a slow, vegetable intent. Klausner stood there in the driveway looking at the cottage and the work ahead and smiled. Retirement here, in this peaceful setting is exactly what I need to finally work on my music instead of someone else’s.`
  },

  // _LOG_01 Button
  log_01: {
    title: "THE FORBIDDEN LAB",
    subtitle: "STN_LOG: ENTRY_001",
    body: `As Klausner turned the heavy iron key—a relic from his father’s desk—the door groaned, a low-frequency protest that vibrated through his marrow. Inside, the dust was a shroud over a life abandoned. The lab was a solid stone structure, almost as big as the cottage and overgrown with ivy. Opening the door, sealed for more than 70 years, released the stale air that smelled of ozone and ancient paper. “This was Granddad’s world, his research lab,” he said to himself, “I will make it mine.”`
  },

  // 03_FIELD_RELAY Button
  field: {
    title: "THE CRYSTAL ANALYSIS",
    subtitle: "STN_LOG: FIELD_DATA_STN_02",
    body: `“I finished the analysis; it should be on your screen now,” Aria said. Kevin leaned forward and arched one brow. “Fascinating,” he said in his Spock impression. “That’s an unusual crystal, Aria. Does it have any properties that suggest why it was part of a scientific experiment?” Aria chided, “None that I’m aware of, Spock.” The crystal is opaque with a cloudy greenish-blue color. Its purpose remains a mystery tucked within the family journals.`
  },

  // SOCIAL MEDIA LINKS Button
  social: {
    title: "COMMUNICATIONS HUB",
    subtitle: "PUBLIC_OUTREACH_PROTOCOL",
    body: `Monitoring outgoing signals to the public sphere. <br><br>
           > <a href="https://x.com/KlausnersBox" target="_blank">UPLINK: X_FEED</a><br>
           > <a href="https://instagram.com/klausnersbox" target="_blank">UPLINK: INSTAGRAM</a><br>
           > <a href="https://suno.com/@klausnersbox" target="_blank">UPLINK: SUNO_FORGE</a>`
  },

  // [CONTACT_STATION] Button
  contact: {
    title: "CONTACT STATION",
    subtitle: "ENCRYPTED_CHANNEL",
    body: `Broadcast your frequency to the lab. We are always listening for the heard and the unheard. <br><br>
           EMAIL: <a href="mailto:research@klausnersbox.com">research@klausnersbox.com</a>`
  }
};

// Global scope assignment for station.html compatibility
window.researchData = researchData;
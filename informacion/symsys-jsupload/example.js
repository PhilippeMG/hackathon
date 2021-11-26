console.log("-- hackathon 21 --")

var banner = "Connected || Hackathon 21 || Nayar Systems || "
var lastkey = "none"

pubsub.subscribe("conin.evt.key", function (msg) {
    console.log("Key:", msg.value.c, " State:", msg.value.st)
    lastkey = msg.value.c
})



setInterval(function () {
    // Rotate banner
    banner = banner.slice(1) + banner.slice(0, 1)

    // Update screen
    screen_text = banner.slice(0, 16) + "Last key: " + lastkey
    pubsub.publish("conout.stat.screen", screen_text, { "sticky": true })
}, 200)


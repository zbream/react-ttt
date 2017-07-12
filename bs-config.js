module.exports = {
    server: {
        baseDir: "dist"
    },
    files: [
        "dist/**/*.{html,js,css}"
    ],

    logFileChanges: true,

    // webpack might output its chunks at different times
    reloadDelay: 2000,
    reloadThrottle: 2000,

    // don't open the browser on start
    open: false
}

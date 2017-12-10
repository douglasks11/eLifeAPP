cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dynamic-update/www/dynamicupdate.js",
        "id": "cordova-plugin-dynamic-update.DynamicUpdate",
        "pluginId": "cordova-plugin-dynamic-update",
        "clobbers": [
            "dynamicupdate"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-dynamic-update": "0.2.1"
}
// BOTTOM OF METADATA
});
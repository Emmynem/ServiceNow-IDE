import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "18d041e91ac04f8ca319e74e47501fb1"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "b1cbab419e0b4fa48180bc71c252dabf"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "35845206b642437bb37e0dc00515fe29"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "a4571cdfa1f14daaa2431646096265a8"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "7ed4afab408b4167be374b5323ca5809",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "dd98185388c449fa96836c27c73ddc88",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "d617855aa1334f2f86f9387a4c15014f",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}

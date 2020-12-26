var boons = [
    {
        "id": "boon_curse_of_longing",
        "god": [
            "god_aphrodite", "god_ares"
        ],
        "name": "Curse of Longing",
        "description": "Your Doom effects continuously strike Weak foes.",
        "type": [
            "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_passion_dash", "boon_crush_shot", "boon_hearthbreak_strike", "boon_hearthbreak_florish"
                ],
                1: [
                    "boon_curse_of_agony", "boon_curse_of_pain"
                ]
            },
            "incompatible": []
        },
        "status_effect": [],
        "tier": 3,
        "extra": {},
        "value_description": "Successive Hit Damage",
        "rarity": {
            "duo": {
                "base": null,
                "type": "%",
                "value": 50
            }
        }
    },
    {
        "id": "boon_heart_rend",
        "god": [
            "god_aphrodite", "god_artemis"
        ],
        "name": "Heart Rend",
        "description": "Your Critical effects deal even more damage to Weak foes.",
        "type": [
            "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0:[
                    "boon_passion_dash", "boon_crush_shot", "boon_hearthbreak_strike", "boon_hearthbreak_florish"
                ],
                1:[
                    "boon_deadly_strike", "boon_deadly_florish", "boon_true_shot"
                ]
            },
            "incompatible": []
        },
        "status_effect": [],
        "tier": 4,
        "extra": {},
        "value_description": "Bonus Critical Damage vs Weak",
        "rarity": {
            "duo": {
                "base": null,
                "type": "%",
                "value": 150
            }
        }
    },
    {
        "id": "boon_parting_shot",
        "god": [
            "god_aphrodite", "god_athena"
        ],
        "name": "Parting Shot",
        "description": "Your Cast gains any bonuses you have for striking foes from behind.",
        "type": [
            "cast", "upgrade", "backstab"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_passion_dash",
                    "boon_crush_shot",
                    "boon_hearthbreak_strike",
                    "boon_hearthbreak_florish",
                    "boon_aphrodite_aid"
                ],
                1: [
                    "boon_divine_strike", "boon_phalanx_shot", "boon_divine_flourish", "boon_divine_dash", "boon_athena_aid"
                ]
            },
            "incompatible": ["boon_trippy_shot"]
        },
        "status_effect": [],
        "tier": 4,
        "extra": {},
        "value_description": "Bonus Backstab Damage",
        "rarity": {
            "duo": {
                "base": null,
                "type": "%",
                "value": 25
            }
        }
    },
    {
        "id": "boon_cold_embrace",
        "god": [
            "god_aphrodite", "god_demeter"
        ],
        "name": "Parting Shot",
        "description": "Your Cast crystal fires its beam directly at you for 4 seconds.",
        "type": [
            "cast", "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_passion_dash",
                    "boon_crush_shot",
                    "boon_hearthbreak_strike",
                    "boon_hearthbreak_florish",
                    "boon_aphrodite_aid"
                ],
                1: [
                    "boon_crystal_beam"
                ]
            },
            "incompatible": ["boon_crystal_clarity", "weapon_shield_beowulf"]
        },
        "status_effect": [],
        "tier": 4,
        "extra": {
            "beam_player_target_duration_seconds": 4
        },
        "value_description": "Bonus Cast Damage",
        "rarity": {
            "duo": {
                "base": null,
                "type": "%",
                "value": 25
            }
        }
    },
    {
        "id": "boon_low_tolerance",
        "god": [
            "god_aphrodite", "god_dionysus"
        ],
        "name": "Low Tolerance",
        "description": "Your Hangover effects stack even more times against Weak foes.",
        "type": [
            "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_passion_dash", "boon_crush_shot", "boon_hearthbreak_strike", "boon_hearthbreak_florish"
                ],
                1: [
                    "boon_drunken_strike", "boon_drunken_florish", "boon_drunken_dash", "boon_dionysus_aid"
                ]
            },
            "incompatible": []
        },
        "status_effect": [],
        "tier": 4,
        "extra": {
        },
        "value_description": "Bonus Hangover Stacks",
        "rarity": {
            "duo": {
                "base": null,
                "type": ".",
                "value": 3
            }
        }
    },
    {
        "id": "boon_sweet_nectar",
        "god": [
            "god_aphrodite", "god_poseidon"
        ],
        "name": "Sweet Nectar",
        "description": "Any Poms of Power you find are more effective.",
        "type": [
            "buff_poms"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_passion_dash", "boon_crush_shot", "boon_hearthbreak_strike", "boon_hearthbreak_florish", "boon_aphrodite_aid"
                ],
                1: [
                    "boon_tempest_strike", "boon_tempest_flourish", "boon_flood_shot", "boon_tidal_dash", "boon_posidon_aid"
                ]
            },
            "incompatible": []
        },
        "status_effect": [],
        "tier": 4,
        "extra": {
        },
        "value_description": "Bonus Level From Poms",
        "rarity": {
            "duo": {
                "base": null,
                "type": ".",
                "value": 1
            }
        }
    },
    {
        "id": "boon_smoldering_air",
        "god": [
            "god_aphrodite", "god_zeus"
        ],
        "name": "Smoldering Air",
        "description": "Your Call charges up automatically, but is capped at 25%.",
        "type": [
            "call"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_passion_dash",
                    "boon_crush_shot",
                    "boon_hearthbreak_strike",
                    "boon_hearthbreak_florish",
                    "boon_aphrodite_aid"
                ],
                1: [
                    "boon_ligtning_strike", "boon_thunder_dash", "boon_thunder_flourish", "bloon_electric_shot", "boon_zeus_aid"
                ]
            },
            "incompatible": ["keepsake_sigil_of_the_dead"]
        },
        "status_effect": [],
        "tier": 4,
        "extra": {
            "gain_per_second": 0.2,
            "call_max_percent": 25
        },
        "value_description": "Auto Gauge Gain",
        "rarity": {
            "duo": {
                "base": null,
                "type": "%",
                "value": 1
            }
        }
    },
    {
        "id": "boon_hunting_blades",
        "god": [
            "god_artemis", "god_ares"
        ],
        "name": "Hunting Blades",
        "description": "Your Cast creates a faster Blade Rift that seeks the nearest foe.",
        "type": [
            "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_slicing_flare", "boon_slicing_shot"
                ],
                1: [
                    "artemis_aid", "boon_deadly_florish", "boon_deadly_strike", "boon_hunting_dash"
                ]
            },
            "incompatible": ["weapon_shield_beowulf", "boon_freezing_vortex"]
        },
        "status_effect": [],
        "tier": 3,
        "extra": {
        },
        "value_description": "Seek Duration Seconds",
        "rarity": {
            "duo": {
                "base": null,
                "type": ".",
                "value": 3.3
            }
        }
    },
    {
        "id": "boon_merciful_end",
        "god": [
            "god_athena", "god_ares"
        ],
        "name": "Merciful End",
        "description": "Your attacks that can Deflect immediately activate Doom effects.",
        "type": [
            "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_curse_of_agony", "boon_curse_of_pain"
                ],
                1: [
                    "boon_divine_flourish", "boon_divine_strike"
                ]
            },
            "incompatible": ["weapon_shield_beowulf", "boon_freezing_vortex"]
        },
        "status_effect": [],
        "tier": 4,
        "extra": {
        },
        "value_description": "Doom Combo Damage",
        "rarity": {
            "duo": {
                "base": null,
                "type": ".",
                "value": 40
            }
        }
    },
    {
        "id": "boon_freezing_vortex",
        "god": [
            "god_demeter", "god_ares"
        ],
        "name": "Freezing Vortex",
        "description": "Your Cast inflicts Chill, but is smaller and moves slower.",
        "type": [
            "cast", "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_slicing_flare", "boon_slicing_shot"
                ],
                1: [
                    "boon_demeters_aid", "boon_frost_florish", "boon_frost_strike", "boon_mistral_dash"
                ]
            },
            "incompatible": ["boon_hunting_blades"]
        },
        "status_effect": ["chill"],
        "tier": 4,
        "extra": {
        },
        "value_description": "Blade Rift Size",
        "rarity": {
            "duo": {
                "base": null,
                "type": "-%",
                "value": 15
            }
        }
    },
    {
        "id": "boon_curse_of_nausea",
        "god": [
            "god_dionysus", "god_ares"
        ],
        "name": "Freezing Vortex",
        "description": "Your Hangover effects deal damage faster.",
        "type": [
            "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_curse_of_agony", "boon_curse_of_pain", "boon_curse_of_vengeance"
                ],
                1: [
                    "boon_dionysus_aid", "boon_drunken_dash", "boon_drunken_florish", "boon_drunken_strike"
                ]
            },
            "incompatible": []
        },
        "status_effect": [],
        "tier": 4,
        "extra": {
        },
        "value_description": "Damage Rate seconds",
        "rarity": {
            "duo": {
                "base": null,
                "type": ".",
                "value": 0.35
            }
        }
    },
    {
        "id": "boon_curse_of_drowning",
        "god": [
            "god_poseidon", "god_ares"
        ],
        "name": "Curse of Drowning",
        "description": "Your Cast is a pulse that deals damage to foes around you.",
        "type": [
            "cast", "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_ares_aid", "boon_blade_dash", "boon_curse_of_agony", "boon_curse_of_pain"
                ],
                1: [
                    "boon_flood_shot"
                ]
            },
            "incompatible": ["boon_mirage_shot", "boon_blizzard_shot", "weapon_bow_hera"]
        },
        "status_effect": [],
        "tier": 4,
        "extra": {
        },
        "value_description": "Pulses per cast",
        "rarity": {
            "duo": {
                "base": null,
                "type": ".",
                "value": 3
            }
        }
    },
    {
        "id": "boon_vengeful_mood",
        "god": [
            "god_zeus", "god_ares"
        ],
        "name": "Vengeful Mood",
        "description": "Your Revenge attacks sometimes occur without taking damage.",
        "type": [
            "revenge", "upgrade"
        ],
        "availability": {
            "requiresOneOfEach": {
                0: [
                    "boon_ares_aid", "boon_blade_dash", "boon_curse_of_agony", "boon_curse_of_pain", "boon_slicing_flare", "boon_slicing_shot"
                ],
                1: [
                    "boon_electric_flare", "boon_electric_shot", "boon_lightning_strike", "boon_thunder_dash", "boon_zeus_aid"
                ],
                2: [
                    "boon_curse_of_vengeance", "boon_frozen_touch", "boon_heaven_vengeance", "boon_holy_shield", "boon_wave_of_despair"
                ]
            },
            "incompatible": []
        },
        "status_effect": [],
        "tier": 4,
        "extra": {
        },
        "value_description": "Auto Revenge Rate per Seconds",
        "rarity": {
            "duo": {
                "base": null,
                "type": ".",
                "value": 3
            }
        }
    }
    ];

var boons = [
    {
      "id": "boon_hearthbreak_strike",
      "god": ["god_aphrodite"],
      "name": "Heartbreak Strike",
      "description": "Your Attack deals more damage and inflicts Weak.",
      "type": ["attack"],
      "status_effect": ["weak"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "tier": 1,
      "extra": {
        "effect_duration": 3
      },
      "value_description": "Attack Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": "+%",
          "value": 50
        },
        "rare": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.3,
            "max": 1.5
          }
        },
        "epic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.8,
            "max": 2.0
          }
        },
        "heroic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 2.3,
            "max": 2.5
          }
        }
      }
    },
    {
      "id": "boon_hearthbreak_florish",
      "god": ["god_aphrodite"],
      "name": "Heartbreak Florish",
      "description": "Your Special deals more damage and inflicts Weak.",
      "type": ["special"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "status_effect": ["weak"],
      "tier": 1,
      "extra": {
        "effect_duration": 3
      },
      "value_description": "Special Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": "+%",
          "value": 80
        },
        "rare": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.3,
            "max": 1.5
          }
        },
        "epic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.8,
            "max": 2.0
          }
        },
        "heroic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 2.3,
            "max": 2.5
          }
        }
      }
    },
    {
      "id": "boon_crush_shot",
      "god": ["god_aphrodite"],
      "name": "Crush Shot",
      "description": "Your Cast is a wide, short-range blast that inflicts Weak.",
      "type": ["cast"],
      "status_effect": ["weak"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": ["weapon_shield_beowulf"]
      },
      "tier": 1,
      "extra": {
        "cast_range": 300,
        "effect_duration": 3
      },
      "value_description": "Cast Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": ".",
          "value": 90
        },
        "rare": {
          "base": null,
          "type": ".",
          "value": 100
        },
        "epic": {
          "base": null,
          "type": ".",
          "value": 110
        },
        "heroic": {
          "base": "common",
          "type": ".",
          "value": 120
        }
      }
    },
    {
      "id": "boon_passion_flare",
      "god": ["god_aphrodite"],
      "name": "Passion Flare",
      "description": "Your Cast damages foes around you and inflicts Weak.",
      "type": ["cast"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "status_effect": ["weak"],
      "tier": 1,
      "extra": {
        "cast_range": 300,
        "effect_duration": 3
      },
      "value_description": "Cast Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": ".",
          "value": 90
        },
        "rare": {
          "base": null,
          "type": ".",
          "value": 100
        },
        "epic": {
          "base": null,
          "type": ".",
          "value": 110
        },
        "heroic": {
          "base": null,
          "type": ".",
          "value": 120
        }
      }
    },
    {
      "id": "boon_passion_dash",
      "god": ["god_aphrodite"],
      "name": "Passion Dash",
      "description": "Your Dash inflicts damage where you end up, inflicting Weak.",
      "type": ["dash"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "status_effect": ["weak"],
      "tier": 1,
      "extra": {
        "radius": 180,
        "effect_duration": 3
      },
      "value_description": "Dash Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": ".",
          "value": 20
        },
        "rare": {
          "base": null,
          "type": ".",
          "value": 24
        },
        "epic": {
          "base": null,
          "type": ".",
          "value": 28
        },
        "heroic": {
          "base": null,
          "type": ".",
          "value": 32
        }
      }
    },
    {
      "id": "boon_aphrodite_aid",
      "god": ["god_aphrodite"],
      "name": "Aphrodite's Aid",
      "description": "Your Call fires a seeking projectile that inflicts Charm.",
      "type": ["aid"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "status_effect": ["charm"],
      "tier": 1,
      "extra": {
        "pierces_foes": true
      },
      "value_description": "Charm Duration",
      "rarity": {
        "common": {
          "base": null,
          "type": ".",
          "value": 5
        },
        "rare": {
          "base": null,
          "type": ".",
          "value": 5.5
        },
        "epic": {
          "base": null,
          "type": ".",
          "value": 6
        },
        "heroic": {
          "base": null,
          "type": ".",
          "value": 6.5
        }
      }
    },
    {
      "id": "boon_dying_lament",
      "god": ["god_aphrodite"],
      "name": "Dying Lament",
      "description": "When foes are slain, they damage nearby foes and inflict Weak.",
      "type": ["foe_death"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "status_effect": ["weak"],
      "tier": 1,
      "extra": {
        "radius": 200
      },
      "value_description": "Death Blast Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": ".",
          "value": 40
        },
        "rare": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.3,
            "max": 1.5
          }
        },
        "epic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.8,
            "max": 2.0
          }
        },
        "heroic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 2.3,
            "max": 2.5
          }
        }
      }
    },
    {
      "id": "boon_wave_of_despair",
      "god": ["god_aphrodite"],
      "name": "Wave of Despair",
      "description": "After you take damage, damage nearby foes and inflict Weak.",
      "type": ["revenge"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "status_effect": ["weak"],
      "tier": 1,
      "extra": {
        "radius": 700
      },
      "value_description": "Revenge Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": ".",
          "value": 50
        },
        "rare": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.3,
            "max": 1.5
          }
        },
        "epic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.8,
            "max": 2.0
          }
        },
        "heroic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 2.3,
            "max": 2.5
          }
        }
      }
    },
    {
      "id": "boon_different_league",
      "god": ["god_aphrodite"],
      "name": "Different League",
      "description": "Resist some damage from nearby foes' attacks.",
      "type": ["resist"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "status_effect": [],
      "tier": 1,
      "extra": {
        "proximity_threshold": 400
      },
      "value_description": "Revenge Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": "-%",
          "value": 10
        },
        "rare": {
          "base": null,
          "type": "-%",
          "value": 13
        },
        "epic": {
          "base": null,
          "type": "-%",
          "value": 15
        },
        "heroic": {
          "base": null,
          "type": "-%",
          "value": 18
        }
      }
    },
    {
      "id": "boon_life_affirmation",
      "god": ["god_aphrodite"],
      "name": "Life Affirmation",
      "description": "Any 'max health' or 'healing' chamber rewards are worth more.",
      "type": ["buff_max_health", "buff_healing"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "status_effect": [],
      "tier": 1,
      "extra": {
        "pomable": false
      },
      "value_description": "Reward Value",
      "rarity": {
        "common": {
          "base": null,
          "type": "+%",
          "value": 30
        },
        "rare": {
          "base": null,
          "type": "+%",
          "value": 36
        },
        "epic": {
          "base": null,
          "type": "+%",
          "value": 42
        },
        "heroic": {
          "base": null,
          "type": "+%",
          "value": 48
        }
      }
    },
    {
      "id": "boon_empty_inside",
      "god": [
        "god_aphrodite"
      ],
      "name": "Empty Inside",
      "description": "Your Weak effects have a longer duration.",
      "type": [
        "upgrade"
      ],
      "availability": {
        "requiresOneOfEach": {
          0: [
            "boon_passion_dash",
            "boon_crush_shot",
            "boon_hearthbreak_strike",
            "boon_hearthbreak_florish"
          ]
        },
        "incompatible": []
      },
      "status_effect": [],
      "tier": 2,
      "extra": {
      },
      "value_description": "Weak Duration Increase",
      "rarity": {
        "common": {
          "base": null,
          "type": "+.",
          "value": 5
        },
        "rare": {
          "base": null,
          "type": "+.",
          "value": 7.5
        },
        "epic": {
          "base": null,
          "type": "+.",
          "value": 10
        },
        "heroic": {
          "base": null,
          "type": "+.",
          "value": 12.5
        }
      }
    },
    {
      "id": "boon_sweet_surrender",
      "god": [
        "god_aphrodite"
      ],
      "name": "Sweet Surrender",
      "description": "Weak-afflicted foes are also more susceptible to damage.",
      "type": [
        "upgrade"
      ],
      "availability": {
        "requiresOneOfEach": {
          0: [
            "boon_passion_dash",
            "boon_crush_shot",
            "boon_hearthbreak_strike",
            "boon_hearthbreak_florish"
          ]
        },
        "incompatible": []
      },
      "status_effect": [],
      "tier": 2,
      "extra": {
      },
      "value_description": "Damage vs Weak Increase",
      "rarity": {
        "common": {
          "base": null,
          "type": "+%",
          "value": 10
        },
        "rare": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 1.3,
            "max": 1.5
          }
        },
        "epic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 2.0,
            "max": 2.5
          }
        },
        "heroic": {
          "base": "common",
          "type": "*",
          "value": {
            "min": 2.5,
            "max": 2.7
          }
        }
      }
    },
    {
      "id": "boon_broken_resolve",
      "god": [
        "god_aphrodite"
      ],
      "name": "Broken Resolve",
      "description": "Your Weak effects are more potent.",
      "type": [
        "upgrade"
      ],
      "availability": {
        "requiresOneOfEach": {
          0: [
            "boon_passion_dash",
            "boon_crush_shot",
            "boon_hearthbreak_strike",
            "boon_hearthbreak_florish"
          ]
        },
        "incompatible": []
      },
      "status_effect": [],
      "tier": 2,
      "extra": {
        "pomable": false
      },
      "value_description": "Weak Damage Reduction",
      "rarity": {
        "common": {
          "base": null,
          "type": "+%",
          "value": 10
        },
        "rare": {
          "base": null,
          "type": "+%",
          "value": 12.5
        },
        "epic": {
          "base": null,
          "type": "+%",
          "value": 15
        },
        "heroic": {
          "base": null,
          "type": "+%",
          "value": 17.5
        }
      }
    },
    {
      "id": "boon_blown_kiss",
      "god": [
        "god_aphrodite"
      ],
      "name": "Blown Kiss",
      "description": "Your Cast shoots farther and is stronger against undamaged foes.",
      "type": [
        "upgrade"
      ],
      "availability": {
        "requiresOneOfEach": {
          0: [
            "boon_crush_shot"
          ]
        },
        "incompatible": []
      },
      "status_effect": [],
      "tier": 2,
      "extra": {
        "cast_range_doubled": true,
        "cast_width_increase_percent": 30
      },
      "value_description": "Damage vs Weak Increase",
      "rarity": {
        "common": {
          "base": null,
          "type": "+%",
          "value": 50
        },
        "rare": {
          "base": "common",
          "type": "*",
          "value": 1.5
        },
        "epic": {
          "base": "common",
          "type": "*",
          "value": 2.0
        },
        "heroic": {
          "base": "common",
          "type": "*",
          "value": 2.5
        }
      }
    },
    {
      "id": "boon_unhealthy_fixation",
      "god": [
        "god_aphrodite"
      ],
      "name": "Unhealthy Fixation",
      "description": "Your Weak effects also have a 15% chance to Charm foes.",
      "type": [
        "upgrade"
      ],
      "availability": {
        "requiresOneOfEach": {
          0: [
            "boon_crush_shot"
          ]
        },
        "incompatible": []
      },
      "status_effect": ["charm"],
      "tier": 4,
      "extra": {
        "charm_duration_sec": 4
      },
      "value_description": "Chance To Charm Foes",
      "rarity": {
        "legendary": {
          "base": null,
          "type": "%",
          "value": 15
        }
      }
    }
  ];

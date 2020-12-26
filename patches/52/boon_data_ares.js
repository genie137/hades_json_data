var boons = [
  {
      "id": "boon_curse_of_agony",
      "god": ["god_ares"],
      "name": "Curse of Agony",
      "description": "Your Attack inflicts Doom.",
      "type": ["attack"],
      "status_effect": ["doom"],
      "availability": {
        "requiresOneOfEach": {},
        "incompatible": []
      },
      "tier": 1,
      "extra": {
        "curse_delay_seconds": 1.1
      },
      "value_description": "Curse Damage",
      "rarity": {
        "common": {
          "base": null,
          "type": ".",
          "value": 50
        },
        "rare": {
          "base": null,
          "type": ".",
          "value": 75
        },
        "epic": {
          "base": null,
          "type": ".",
          "value": 100
        },
        "heroic": {
          "base": null,
          "type": ".",
          "value": 125
        }
      }
    },
  {
    "id": "boon_curse_of_pain",
    "god": ["god_ares"],
    "name": "Curse of Pain",
    "description": "Your Special inflicts Doom.",
    "type": ["special"],
    "status_effect": ["doom"],
    "availability": {
      "requiresOneOfEach": {},
      "incompatible": []
    },
    "tier": 1,
    "extra": {
      "curse_delay_seconds": 1.1
    },
    "value_description": "Curse Damage",
    "rarity": {
      "common": {
        "base": null,
        "type": ".",
        "value": 60
      },
      "rare": {
        "base": null,
        "type": ".",
        "value": 80
      },
      "epic": {
        "base": null,
        "type": ".",
        "value": 100
      },
      "heroic": {
        "base": null,
        "type": ".",
        "value": 120
      }
    }
  },
  {
    "id": "boon_slicing_shot",
    "god": ["god_ares"],
    "name": "Slicing Shot",
    "description": "Your Cast sends a Blade Rift hurling ahead.",
    "type": ["cast"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {},
      "incompatible": ['weapon_shield_beowulf']
    },
    "tier": 1,
    "extra": {
      "duration_seconds": 4,
      "damage_interval_seconds": 0.1,
      "damage_radius": 150,
      "rift_speed": 250
    },
    "value_description": "Rift Damage per Hit",
    "rarity": {
      "common": {
        "base": null,
        "type": ".",
        "value": 20
      },
      "rare": {
        "base": null,
        "type": ".",
        "value": 22
      },
      "epic": {
        "base": null,
        "type": ".",
        "value": 24
      },
      "heroic": {
        "base": null,
        "type": ".",
        "value": 26
      }
    }
  },
  {
    "id": "boon_slicing_flare",
    "god": ["god_ares"],
    "name": "Slicing Flare",
    "description": "Your Cast sends a large Blade Rift hurling ahead for a brief time.",
    "type": ["cast"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {
        0: ['weapon_shield_beowulf']
      },
      "incompatible": []
    },
    "tier": 1,
    "extra": {
    },
    "value_description": "Rift Damage per Hit",
    "rarity": {
      "common": {
        "base": null,
        "type": ".",
        "value": 30
      },
      "rare": {
        "base": null,
        "type": ".",
        "value": 36
      },
      "epic": {
        "base": null,
        "type": ".",
        "value": 42
      },
      "heroic": {
        "base": null,
        "type": ".",
        "value": 46
      }
    }
  },
  {
    "id": "boon_blade_dash",
    "god": ["god_ares"],
    "name": "Blade Dash",
    "description": "Your Dash creates a Blade Rift where you started.",
    "type": ["dash"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {},
      "incompatible": []
    },
    "tier": 1,
    "extra": {
      "duration_seconds": 0.7,
      "damage_interval_seconds": 0.1,
      "damage_radius": 150
    },
    "value_description": "Rift Damage per Hit",
    "rarity": {
      "common": {
        "base": null,
        "type": ".",
        "value": 10
      },
      "rare": {
        "base": null,
        "type": ".",
        "value": 12
      },
      "epic": {
        "base": null,
        "type": ".",
        "value": 14
      },
      "heroic": {
        "base": null,
        "type": ".",
        "value": 16
      }
    }
  },
  {
    "id": "boon_ares_aid",
    "god": ["god_ares"],
    "name": "Ares Aid",
    "description": "Your Call turns you into an Impervious Blade Rift for 1.2 Sec.",
    "type": ["aid"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {},
      "incompatible": []
    },
    "tier": 1,
    "extra": {
      "duration_seconds": 1.2,
      "wrath_cost": 50,
      "max_gauge_bonus_seconds": 6
    },
    "value_description": "Rift Damage per Hit",
    "rarity": {
      "common": {
        "base": null,
        "type": ".",
        "value": 30
      },
      "rare": {
        "base": null,
        "type": ".",
        "value": 38
      },
      "epic": {
        "base": null,
        "type": ".",
        "value": 45
      },
      "heroic": {
        "base": null,
        "type": ".",
        "value": 53
      }
    }
  },
  {
    "id": "boon_curse_of_vengeance",
    "god": ["god_ares"],
    "name": "Curse of Vengeance",
    "description": "After you take damage, inflict Doom on surrounding foes.",
    "type": ["revenge"],
    "status_effect": ["doom"],
    "availability": {
      "requiresOneOfEach": {},
      "incompatible": []
    },
    "tier": 1,
    "extra": {
      "effect_radius": 150,
      "curse_delay_seconds": 1.1
    },
    "value_description": "Revenge Damage",
    "rarity": {
      "common": {
        "base": null,
        "type": ".",
        "value": 100
      },
      "rare": {
        "base": null,
        "type": ".",
        "value": 120
      },
      "epic": {
        "base": null,
        "type": ".",
        "value": 140
      },
      "heroic": {
        "base": null,
        "type": ".",
        "value": 160
      }
    }
  },
  {
    "id": "boon_urge_to_kill",
    "god": ["god_ares"],
    "name": "Urge to Kill",
    "description": "Your Attack and Cast deal more damage.",
    "type": ["attack", "cast", "upgrade"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {},
      "incompatible": []
    },
    "tier": 1,
    "extra": {
    },
    "value_description": "Attack and Cast Damage",
    "rarity": {
      "common": {
        "base": null,
        "type": "+%",
        "value": 10
      },
      "rare": {
        "base": null,
        "type": "+%",
        "value": 13
      },
      "epic": {
        "base": null,
        "type": "+%",
        "value": 16
      },
      "heroic": {
        "base": null,
        "type": "+%",
        "value": 19
      }
    }
  },
  {
    "id": "boon_battle_rage",
    "god": ["god_ares"],
    "name": "Battle Rage",
    "description": "After slaying a foe, your next Attack or Special deals more damage.",
    "type": ["attack", "special", "upgrade", "after_foe_death"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {},
      "incompatible": []
    },
    "tier": 1,
    "extra": {
    },
    "value_description": "Damage Bonus",
    "rarity": {
      "common": {
        "base": null,
        "type": "+%",
        "value": 100
      },
      "rare": {
        "base": null,
        "type": "+%",
        "value": 150
      },
      "epic": {
        "base": null,
        "type": "+%",
        "value": 200
      },
      "heroic": {
        "base": null,
        "type": "+%",
        "value": 250
      }
    }
  },
  {
    "id": "boon_blood_frenzy",
    "god": ["god_ares"],
    "name": "Battle Rage",
    "description": "After using Death Defiance, deal more damage that encounter.",
    "type": ["upgrade", "after_death_defiance"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {},
      "incompatible": []
    },
    "tier": 1,
    "extra": {
    },
    "value_description": "Damage Bonus",
    "rarity": {
      "common": {
        "base": null,
        "type": "+%",
        "value": 15
      },
      "rare": {
        "base": null,
        "type": "+%",
        "value": 22
      },
      "epic": {
        "base": null,
        "type": "+%",
        "value": 30
      },
      "heroic": {
        "base": null,
        "type": "+%",
        "value": 37
      }
    }
  },
  {
    "id": "boon_black_metal",
    "god": ["god_ares"],
    "name": "Black Metal",
    "description": "Your Blade Rift powers deal damage in a wider area.",
    "type": ["upgrade"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {
        0: ["boon_ares_aid", "boon_blade_dash", "boon_slicing_flare", "boon_slicing_shot"]
      },
      "incompatible": []
    },
    "tier": 2,
    "extra": {
    },
    "value_description": "Bonus Area of Effect",
    "rarity": {
      "common": {
        "base": null,
        "type": "+%",
        "value": 20
      },
      "rare": {
        "base": null,
        "type": "+%",
        "value": 22
      },
      "epic": {
        "base": null,
        "type": "+%",
        "value": 24
      },
      "heroic": {
        "base": null,
        "type": "+%",
        "value": 26
      }
    }
  },
  {
    "id": "boon_engulfing_vortex",
    "god": ["god_ares"],
    "name": "Engulfing Vortex",
    "description": "Your Blade Rift effects last longer and pull foes in.",
    "type": ["upgrade"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {
        0: ["boon_ares_aid", "boon_blade_dash", "boon_slicing_flare", "boon_slicing_shot"]
      },
      "incompatible": []
    },
    "tier": 2,
    "extra": {
      "pulls_foe_in_vortex": true,
      "pomable": false
    },
    "value_description": "Rift Duration",
    "rarity": {
      "common": {
        "base": null,
        "type": "+",
        "value": 0.2
      },
      "rare": {
        "base": null,
        "type": "+",
        "value": 0.3
      },
      "epic": {
        "base": null,
        "type": "+",
        "value": 0.4
      },
      "heroic": {
        "base": null,
        "type": "+",
        "value": 0.5
      }
    }
  },
  {
    "id": "boon_dire_misfortune",
    "god": ["god_ares"],
    "name": "Dire Misfortune",
    "description": "Your Doom effects deal more damage when applied multiple times.",
    "type": ["upgrade"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {
        0: ["boon_curse_of_agony", "boon_curse_of_pain"]
      },
      "incompatible": []
    },
    "tier": 2,
    "extra": {
      "pomable": false
    },
    "value_description": "Bonus Damage per Curse",
    "rarity": {
      "common": {
        "base": null,
        "type": ".",
        "value": 10
      },
      "rare": {
        "base": null,
        "type": ".",
        "value": 12
      },
      "epic": {
        "base": null,
        "type": ".",
        "value": 14
      },
      "heroic": {
        "base": null,
        "type": ".",
        "value": 16
      }
    }
  },
  {
    "id": "boon_impending_doom",
    "god": ["god_ares"],
    "name": "Dire Misfortune",
    "description": "Your Doom effects deal more damage, after +0.5 Sec.",
    "type": ["upgrade"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {
        0: ["boon_curse_of_agony", "boon_curse_of_pain", "boon_curse_of_vengeance"]
      },
      "incompatible": []
    },
    "tier": 2,
    "extra": {
    },
    "value_description": "Bonus Doom Damage",
    "rarity": {
      "common": {
        "base": null,
        "type": "+%",
        "value": 60
      },
      "rare": {
        "base": null,
        "type": "+%",
        "value": 65
      },
      "epic": {
        "base": null,
        "type": "+%",
        "value": 70
      },
      "heroic": {
        "base": null,
        "type": "+%",
        "value": 75
      }
    }
  },
  {
    "id": "boon_vicious_cycle",
    "god": ["god_ares"],
    "name": "Vicious Cycle",
    "description": "Your Blade Rift effects deal more damage for each consecutive hit.",
    "type": ["upgrade"],
    "status_effect": [],
    "availability": {
      "requiresOneOfEach": {
        0: ["boon_black_metal", "boon_engulfing_vortex"]
      },
      "incompatible": []
    },
    "tier": 3,
    "extra": {
    },
    "value_description": "Damage increase per hit",
    "rarity": {
      "legendary": {
        "base": null,
        "type": ".",
        "value": 2
      }
    }
  }
  ];

# Repository containing json-ified data for the Supergiant game Hades.

## Weapons (weapon_data.json)

### Format:

- id (slug with `weapon_<WEAPONTYPE>_<ASPECT>`)

## Boons (boon_data.json)

### Format:

- id (slug with `boon_<GODABV>_<BOONNAME>`)
- god (slug with `god_<GODNAME>`)
- name (readable name of the boon)
- description (readable description of the boon)
- type (array with string defining the type of boon)
    - Choices: `attack`, `special`, `cast`, `dash`, `aid`, `revenge`, `buff_inc_damage`, `buff_red_damage`, `buff_sturdy`, `buff_dodge`, `buff_move_speed`, `buff_shielded` 
- status_effect (array with string defining if the boon inflicts a status effect)
    - Choices: `weak`, `ruptured`, `hangover`, `marked`, `jolted`, `exposed`, `doom`, `chill`, `punished`, `stun`, `petrified`, `poison`
- availability (json obj with data describing when the boon can be obtained)
    - keys: `required`, `incompatible` 
    - values: arrays with the id`s of the subjects.
- tier (number with tier of boon)
- extra (json obj with extra data about the boon)
- rarity (json obj describing rarity values)
    - key-choices: `common`, `rare`, `epic`, `heroic`, `legendary`, `duo` 
        - required is `common` OR `legendary` OR `duo`
    - value is obj with keys: `base`, `type`, `value`
        - **base** (can be null if its common, or the value of the rarity is absolute (and does not depend on the base))
        - **type** (type of value)
            - Choices: `+%` (increase percentage), `-%` (reduce percentage) ,`*` (multiplier), `.` (absolute value)
        - **value** (either a value or a json with a `min` and `max` key with values)
### Placeholders:

- GODNAME = The name of the god in lowercase.
- GODABV = A lowercase abbreviation of the god's name.
- BOONNAME = The name of the boon in lowercase with spaces replaced by underscores. 
- WEAPONTYPE = The name of the weapon in lowercase.
- ASPECT = The name of the weapon aspect in lowercase.

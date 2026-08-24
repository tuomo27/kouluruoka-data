# kouluruoka-data

Public, anonymized school-menu snapshot used by a private family meal-planning workflow.

- `menus.json` contains only anonymous child identifiers (`child_1`, `child_2`) and menu data.
- No child names or school names are stored in this repository.
- `.github/workflows/update-menus.yml` refreshes the snapshot automatically from the anonymized collector endpoint.
- If the upstream fetch fails, the last known good `menus.json` remains in place.

Raw data URL:

`https://raw.githubusercontent.com/tuomo27/kouluruoka-data/main/menus.json`

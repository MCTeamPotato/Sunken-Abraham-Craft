import stdlib.List;
import crafttweaker.api.item.IItemStack;

var trinkets as List<IItemStack> = loadedMods.getMod("nameless_trinkets").items;
for i in 0 .. trinkets.length {
    var name = "uncrafting_" + trinkets[i].registryName.path;
    if (!("unknown_fragment" in name || "dubious_dust" in name || "glowing_dust" in name || "ultimate_dust" in name)) {
        craftingTable.addShapeless(name, <item:bountifulbaubles:spectral_silt> * 5, [
            <item:bountifulbaubles:disintegration_tablet>.reuse(), trinkets[i]
        ]);
    }
}
var mods as string[] = [
    "nameless_trinkets",
    "soaringstructures2",
    "dawnoftimebuilder"
];
for j in 0 .. mods.length {
    recipes.removeByModid(mods[j]);
}
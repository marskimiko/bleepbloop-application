# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


routes = Instrument.create([
  {
    name: "minilogue",
    brand: "korg",
    category: "synth",
    photo: "https://i.ytimg.com/vi/DUShpEZz7Sg/maxresdefault.jpg",
  },
  {
    name: "microfreak",
    brand: "arturia",
    category: "synth",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/b2b71989c0b652d08415263d23f3ddf7/A/r/Arturia_Microfreak_01.jpg",
  },
  {
    name: "grandmother",
    brand: "moog",
    category: "synth",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/m/o/moog_grandmother_01.jpg",
  },
  {
    name: "bass station",
    brand: "novation",
    category: "synth",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/b2b71989c0b652d08415263d23f3ddf7/b/a/bass-station-ii-top_3.jpg",
  },
  {
    name: "prophet-10",
    brand: "sequential",
    category: "synth",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/S/e/Sequential_Prophet-10-2020_01.jpg",
  },
  {
    name: "tr-8s",
    brand: "roland",
    category: "drum machine",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/r/o/roland_tr-8s_01.jpg",
  },
  {
    name: "volca drum",
    brand: "korg",
    category: "drum machine",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/K/o/Korg_Volca-Drum_01.jpg",
  },
  {
    name: "volca beats",
    brand: "korg",
    category: "drum machine",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/k/o/korg_volcaseriesbeats_01_3.jpg",
  },
  {
    name: "circuit rhythm",
    brand: "novation",
    category: "drum machine",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/N/o/Novation_CircuitRhythm_01.jpg",
  },
  {
    name: "drumbrute impact",
    brand: "novation",
    category: "drum machine",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/A/r/Arturia_Drumbrute-Impact-Noir_01.jpg",
  },
  {
    name: "octatrack mkii",
    brand: "elektron",
    category: "sampler",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/E/l/Elektron_Octatrack-MkII-Black_01.jpg",
  },
  {
    name: "sp-404 mkii",
    brand: "roland",
    category: "sampler",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/r/o/roland_sp-404-mkii_01.jpg",
  },
  {
    name: "mpc live ii",
    brand: "akai",
    category: "sampler",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/A/k/Akai_MPC-Live-II_01.jpg",
  },
  {
    name: "blackbox",
    brand: "1010 music",
    category: "sampler",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/1/0/1010Music_Blackbox_01.jpg",
  },
  {
    name: "volca sample 2",
    brand: "korg",
    category: "sampler",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/K/o/Korg_Volca-Sample2_01.jpg",
  },
  {
    name: "keystep pro",
    brand: "arturia",
    category: "sequencer / controller",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/A/r/Arturia_keystepPro_01.jpg",
  },
  {
    name: "pyramid mk3",
    brand: "squarp",
    category: "sequencer / controller",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/s/q/squarpinstruments_pyramidmk3_01.jpg",
  },
  {
    name: "keystep 37",
    brand: "arturia",
    category: "sequencer / controller",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/A/r/Arturia_KeyStep-37_01.jpg",
  },
  {
    name: "apc40 mk2 ableton",
    brand: "akai",
    category: "sequencer / controller",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/a/k/akai_apc40mk2_01_1.jpg",
  },
  {
    name: "beatstep pro",
    brand: "arturia",
    category: "sequencer / controller ",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/a/r/arturia_beatsteppro_01_1.jpg",
  },
  {
    name: "analog heat",
    brand: "elektron",
    category: "pedal / fx",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/e/l/elektron_analogheatmkii_01.jpg",
  },
  {
    name: "zen delay",
    brand: "erica synths",
    category: "pedal / fx",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/E/r/EricaSynths_ZenDelay_01.jpg",
  },
  {
    name: "ef-x2 tape echo",
    brand: "echo fix",
    category: "pedal / fx",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/E/c/EchoFix_EF-X2-Blue_01.jpg",
  },
  {
    name: "mini kaoss pad 2s",
    brand: "korg",
    category: "pedal / fx",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/k/o/korg_kaosspad25_01_1.jpg",
  },
  {
    name: "vt-4 voice transformer",
    brand: "roland",
    category: "pedal / fx",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/R/o/Roland_VT-4_01.jpg",
  },
  {
    name: "maschine+",
    brand: "native instruments",
    category: "groovebox",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/N/a/NativeInstruments_Maschine-Plus_01.jpg",
  },
  {
    name: "model 24",
    brand: "tascam",
    category: "mixer",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/T/A/TASCAM_Model-24_01.jpg",
  },
  {
    name: "cdj-3000",
    brand: "pioneer",
    category: "other",
    photo: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/P/i/Pioneer_CDJ-3000_01.jpg",
  }
])
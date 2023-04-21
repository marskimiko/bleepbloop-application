# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create([
  {
    username: "test", 
    password: "test",
    photo: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
   }
])

routes = Instrument.create([
  {
    name: "minilogue",
    brand: "korg",
    type: "synth"
    image_url: "https://i.ytimg.com/vi/DUShpEZz7Sg/maxresdefault.jpg",
  },
  {
    name: "microfreak",
    brand: "arturia",
    type: "synth"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/b2b71989c0b652d08415263d23f3ddf7/A/r/Arturia_Microfreak_01.jpg",
  },
  {
    name: "grandmother",
    brand: "moog",
    type: "synth"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/m/o/moog_grandmother_01.jpg",
  },
  {
    name: "bass station",
    brand: "novation",
    type: "synth"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/b2b71989c0b652d08415263d23f3ddf7/b/a/bass-station-ii-top_3.jpg",
  },
  {
    name: "prophet-10",
    brand: "sequential",
    type: "synth"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/S/e/Sequential_Prophet-10-2020_01.jpg",
  },
  {
    name: "tr-8s",
    brand: "roland",
    type: "drum machine"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/r/o/roland_tr-8s_01.jpg",
  },
  {
    name: "volca drum",
    brand: "korg",
    type: "drum machine"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/K/o/Korg_Volca-Drum_01.jpg",
  },
  {
    name: "volca beats",
    brand: "korg",
    type: "drum machine"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/k/o/korg_volcaseriesbeats_01_3.jpg",
  },
  {
    name: "circuit rhythm",
    brand: "novation",
    type: "drum machine"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/N/o/Novation_CircuitRhythm_01.jpg",
  },
  {
    name: "drumbrute impact",
    brand: "novation",
    type: "drum machine"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/A/r/Arturia_Drumbrute-Impact-Noir_01.jpg",
  },
  {
    name: "octatrack mkii",
    brand: "elektron",
    type: "sampler"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/E/l/Elektron_Octatrack-MkII-Black_01.jpg",
  },
  {
    name: "sp-404 mkii",
    brand: "roland",
    type: "sampler"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/r/o/roland_sp-404-mkii_01.jpg",
  },
  {
    name: "mpc live ii",
    brand: "akai",
    type: "sampler"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/A/k/Akai_MPC-Live-II_01.jpg",
  },
  {
    name: "blackbox",
    brand: "1010 music",
    type: "sampler"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/1/0/1010Music_Blackbox_01.jpg",
  },
  {
    name: "volca sample 2",
    brand: "korg",
    type: "sampler"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/K/o/Korg_Volca-Sample2_01.jpg",
  },
  {
    name: "keystep pro",
    brand: "arturia",
    type: "sequencer / controller"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/A/r/Arturia_keystepPro_01.jpg",
  },
  {
    name: "pyramid mk3",
    brand: "squarp",
    type: "sequencer / controller"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/s/q/squarpinstruments_pyramidmk3_01.jpg",
  },
  {
    name: "keystep 37",
    brand: "arturia",
    type: "sequencer / controller"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/A/r/Arturia_KeyStep-37_01.jpg",
  },
  {
    name: "apc40 mk2 ableton",
    brand: "akai",
    type: "sequencer / controller"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/a/k/akai_apc40mk2_01_1.jpg",
  },
  {
    name: "beatstep pro",
    brand: "arturia",
    type: "sequencer / controller "
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/a/r/arturia_beatsteppro_01_1.jpg",
  },
  {
    name: "analog heat",
    brand: "elektron",
    type: "pedal / fx"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/e/l/elektron_analogheatmkii_01.jpg",
  },
  {
    name: "zen delay",
    brand: "erica synths",
    type: "pedal / fx"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/E/r/EricaSynths_ZenDelay_01.jpg",
  },
  {
    name: "ef-x2 tape echo",
    brand: "echo fix",
    type: "pedal / fx"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/E/c/EchoFix_EF-X2-Blue_01.jpg",
  },
  {
    name: "mini kaoss pad 2s",
    brand: "korg",
    type: "pedal / fx"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/k/o/korg_kaosspad25_01_1.jpg",
  },
  {
    name: "vt-4 voice transformer",
    brand: "roland",
    type: "pedal / fx"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/R/o/Roland_VT-4_01.jpg",
  },
  {
    name: "maschine+",
    brand: "native instruments",
    type: "groovebox"
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/N/a/NativeInstruments_Maschine-Plus_01.jpg",
  },
  {
    name: "model 24",
    brand: "tascam",
    type: "mixer",
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/T/A/TASCAM_Model-24_01.jpg",
  },
  {
    name: "cdj-3000",
    brand: "pioneer",
    type: "other",
    image_url: "https://www.perfectcircuit.com/media/catalog/product/cache/92cd3ec5a09dda5fc9efad35186d894e/P/i/Pioneer_CDJ-3000_01.jpg",
  },
])
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
    photo: "https://media.guitarcenter.com/is/image/MMGS7/J29896000000000-00-600x600.jpg",
  },
  {
    name: "microfreak",
    brand: "arturia",
    category: "synth",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L48209000000000-00-600x600.jpg",
  },
  {
    name: "grandmother",
    brand: "moog",
    category: "synth",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L20578000000000-00-600x600.jpg",
  },
  {
    name: "bass station",
    brand: "novation",
    category: "synth",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/H96667000000000-06-600x600.jpg",
  },
  {
    name: "prophet-10",
    brand: "sequential",
    category: "synth",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L79545000000000-03-600x600.jpg",
  },
  {
    name: "tr-8s",
    brand: "roland",
    category: "drum machine",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L17990000000000-00-600x600.jpg",
  },
  {
    name: "volca drum",
    brand: "korg",
    category: "drum machine",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L46461000000000-00-600x600.jpg",
  },
  {
    name: "volca beats",
    brand: "korg",
    category: "drum machine",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/H96642000000000-00-600x600.jpg",
  },
  {
    name: "circuit rhythm",
    brand: "novation",
    category: "drum machine",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L85202000000000-00-600x600.jpg",
  },
  {
    name: "drumbrute impact",
    brand: "novation",
    category: "drum machine",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L28100000000000-00-600x600.jpg",
  },
  {
    name: "octatrack mkii",
    brand: "elektron",
    category: "sampler",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L98183000000000-00-600x600.jpg",
  },
  {
    name: "sp-404 mkii",
    brand: "roland",
    category: "sampler",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L89186000000000-00-600x600.jpg",
  },
  {
    name: "mpc live ii",
    brand: "akai",
    category: "sampler",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L72109000000000-00-600x600.jpg",
  },
  {
    name: "blackbox",
    brand: "1010 music",
    category: "sampler",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L74818000000000-00-600x600.jpg",
  },
  {
    name: "volca sample 2",
    brand: "korg",
    category: "sampler",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L78551000001000-00-600x600.jpg",
  },
  {
    name: "keystep pro",
    brand: "arturia",
    category: "sequencer / controller",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L82086000000000-00-600x600.jpg",
  },
  {
    name: "pyramid mk3",
    brand: "squarp",
    category: "sequencer / controller",
    photo: "https://dt7v1i9vyp3mf.cloudfront.net/styles/header/s3/imagelibrary/s/squarppyramid03-EoPP5Lbm750Y5MuBWnYVcwXhegJGSu.V.jpg",
  },
  {
    name: "keystep 37",
    brand: "arturia",
    category: "sequencer / controller",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L77612000000000-00-600x600.jpg",
  },
  {
    name: "apc40 mk2 ableton",
    brand: "akai",
    category: "sequencer / controller",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/J11219000000000-00-600x600.jpg",
  },
  {
    name: "beatstep pro",
    brand: "arturia",
    category: "sequencer / controller ",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/J53089000000000-00-600x600.jpg",
  },
  {
    name: "analog heat",
    brand: "elektron",
    category: "pedal / fx",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L34258000000000-00-600x600.jpg",
  },
  {
    name: "zen delay",
    brand: "erica synths",
    category: "pedal / fx",
    photo: "https://www.ericasynths.lv/media/Zen-Delay-1.jpg",
  },
  {
    name: "ef-x2 tape echo",
    brand: "echo fix",
    category: "pedal / fx",
    photo: "https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/e/echofix_efx2_01-Vc20b_CBDnvnDUfDucruKtznjplXjuh1.jpg",
  },
  {
    name: "mini kaoss pad 2s",
    brand: "korg",
    category: "pedal / fx",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/J14614000000000-00-600x600.jpg",
  },
  {
    name: "vt-4 voice transformer",
    brand: "roland",
    category: "pedal / fx",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L44771000000000-00-600x600.jpg",
  },
  {
    name: "maschine+",
    brand: "native instruments",
    category: "groovebox",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/K41345000000000-00-600x600.jpg",
  },
  {
    name: "model 24",
    brand: "tascam",
    category: "mixer",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L31493000000000-00-600x600.jpg",
  },
  {
    name: "cdj-3000",
    brand: "pioneer",
    category: "other",
    photo: "https://media.guitarcenter.com/is/image/MMGS7/L77643000000001-00-600x600.jpg",
  }
])
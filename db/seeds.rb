# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding User'
u1 = User.create(username: "saint1", password: "Apple12!", bio: "I love cord, BABYYYYYY!!!", image: "https://media.istockphoto.com/videos/portrait-of-handsome-latino-african-man-video-id1008458450?s=640x640", seller: false)
u2 = User.create(username: "saint2", password: "Apple12!", bio: "who doesn't love cord?", image: "https://media.istockphoto.com/videos/portrait-of-handsome-latino-african-man-video-id1008458450?s=640x640", seller: false)

puts 'seeding Shops'
s1 = Shop.create(
  name: "SPORTIVA SKI OUTLET NYC",
  hours: "06:00 AM to 06:00 PM",
  description: "NYC's Go-To Ski/Snowboard Rental Shop",
  phone: "(646) 476-5056",
  image: "https://i0.wp.com/www.fearlesscaptivations.com/wp-content/uploads/2022/03/Alta-Ski-Area-Utah-Ski-Lift-Views.jpg?ssl=1"
)
s2 = Shop.create(
  name: "BURTON NEW YORK CITY FLAGSHIP STORE",
  hours: "12:00 PM to 06:00 PM",
  description: "Hip chain for snowboards, boots, apparel & outerwear for men, women & kids.",
  phone: "(212) 966-8070",
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/0zyFNYjCn5RrjiYzC7MFAQ/o.jpg"
)
s3 = Shop.create(
  name: "BOMBER SKI",
  hours: "09:00 AM to 05:00 PM",
  description: "Flagship boutique of the luxury ski maker offering handcrafted skis, poles & other accessories",
  phone: "(212) 980-2442", 
  image: "https://cdn.shopify.com/s/files/1/0441/3672/6677/files/2_3825c051-7e0d-4ef9-93b9-c2b58316b97e.jpg?v=1649431787"
)
s4 = Shop.create(
  name: "SUREFOOT",
  hours: "11:00 AM to 06:00 PM",
  description: "Retailer specializing in high-end, comfort-focused ski boots with custom liners & insoles",
  phone: "(212) 472-7171", 
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/ylFC5PLeR7mxwS8T535Saw/o.jpg"
)
s5 = Shop.create(
  name: "LEASE-A-SKI N Y C",
  hours: "12:00 PM to 06:30 PM",
  description: "Ski Rental Business",
  phone: "(646) 746-5085",
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/dfqAX4l5tm2H55SMTY_yPA/o.jpg"
)
s6 = Shop.create(
  name: "REI",
  hours: "10:00 AM to 08:00 PM",
  description: "Retail chain carrying gear, apparel & footwear for a wide range of outdoor & fitness activities",
  phone: "(646) 746-5085",
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/AOlwW5ATulgPgROyIz9OgA/o.jpg"
)
s7 = Shop.create(
  name: "MOUNT EVEREST - WESTWOOD",
  hours: "10:00 AM to 06:00 PM",
  description: "Snowboard Shop",
  phone: "(201) 664-2500", 
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/RBPSR-snOXP_pLISwTQ9PA/o.jpg"
)
s8 = Shop.create(
  name: "HIGH ALTITUDE SKI & SNOWBOARD",
  hours: "10:00 AM to 06:00 PM",
  description: "Best priced ski and snowboard rentals in town with all the hard and soft goods you need to have an
  amazing trip to the mountain",
  phone: "(802) 779-9025", 
  image: "https://www.highaltitude.biz/wp-content/uploads/2021/11/logo-768x596.png"
)
s9 = Shop.create(
  name: "DARKSIDE SNOWBOARDS",
  hours: "10:00 AM to 06:00 PM",
  description: "Darkside Snowboards is a rider owned-rider operated brick-and-mortar business located in the Green Mountains of Vermont. All of our shops are within miles of a major resort- Killington, Okemo and Stowe. With over 30 years of experience, Darkside Snowboards has something for riders of all skill levels. Each one of our shops offers sales, rentals, demos, tuning and repair.",
  phone: "(802) 422-8600", 
  image: "https://media.rainpos.com/9948/darkside_snowboards_og_truck.png"
)
s10 = Shop.create(
  name: "ASPEN EAST SKI SHOP",
  hours: "10:00 AM to 06:00 PM",
  description: "Ski Shop in Killington, Vermont",
  phone: "(802) 422-3739", 
  image: "https://www.aspeneast.com/media/wysiwyg/porto/homepage/slider/HomePage1.jpg"
)


puts 'seeding Shop Addresses'
sa1 = ShopAddress.create(
  street: "217 E 60th St Lower Level",
  city: "New York",
  state: "NY",
  zip_code: 10065,
  shop_id: s1.id
)
sa2 = ShopAddress.create(
  street: "69 Greene St",
  city: "New York",
  state: "NY",
  zip_code: 10012,
  shop_id: s2.id
)
sa3 = ShopAddress.create(
  street: "681 5th Ave Penthouse",
  city: "New York",
  state: "NY",
  zip_code: 10022,
  shop_id: s3.id
)
sa4 = ShopAddress.create(
  street: "1438 3rd Ave FRNT 1",
  city: "New York",
  state: "NY",
  zip_code: 10028,
  shop_id: s4.id
)
sa5 = ShopAddress.create(
  street: "215 E 60th St",
  city: "New York",
  state: "NY",
  zip_code: 10065,
  shop_id: s5.id
)
sa6 = ShopAddress.create(
  street: "303 Lafayette St",
  city: "New York",
  state: "NY",
  zip_code: 10012,
  shop_id: s6.id
)
sa7 = ShopAddress.create(
  street: "318 3rd Ave",
  city: "Westwood",
  state: "NJ",
  zip_code: 07675,
  shop_id: s7.id
)
sa8 = ShopAddress.create(
  street: "2002 US-4",
  city: "Killington",
  state: "VT",
  zip_code: 05751,
  shop_id: s8.id
)
sa9 = ShopAddress.create(
  street: "1842 Killington Rd",
  city: "Killington",
  state: "VT",
  zip_code: 05751,
  shop_id: s9.id
)
sa10 = ShopAddress.create(
  street: "3429 US-4",
  city: "Killington",
  state: "VT",
  zip_code: 05751,
  shop_id: s10.id
)

puts 'seeding Products'
p1 = Product.create(
  category: "Snowboards",
  name: "GNU Barrett Splitboard - Women's 2023",
  price: 999,
  rental_rate: 94,
  description: "Once you're no longer constrained by boundaries and chairlifts, a whole new world of possibility opens up to you. And if you've spent your resort riding days looking for untracked powder and steep faces, the backcountry is so sweet you might never go back. The GNU Barrett Splitboard was hand built in the rugged Olympic mountains with just the goal of helping you explore this snowy new world of ultimate freedom. Designed to be featherweight on the way up while offering premium freeride performance on the way down, the Barret Split offers the best of both worlds. It's floaty in power, precise on edge, and easy to navigate through any situation you might encounter.",
  image: "https://images.evo.com/imgp/700/220843/899329/gnu-barrett-splitboard-women-s-2023-.jpg",
  shop_id: s1.id
)
p2 = Product.create(
  category: "Snowboards",
  name: "Burton Feelgood Flying V Snowboard - Women's 2023",
  price: 610,
  rental_rate: 89,
  description: "The name is a good start, and it only gets better from there. The Burton Feelgood Flying V Snowboard is a modern day icon for all mountain riders. Built with Burton's softer, more playful Flying V rocker profile and an energetic Super Fly II™ 700G Core, this board combines all terrain muscle with an effortless, intuitive feel that almost disappears under your feet. Smooth, capable, and fun to ride in all conditions, the Burton Feelgood Flying V Snowboard is worthy of a spot in any quiver.",
  image: "https://images.evo.com/imgp/700/220300/910394/burton-feelgood-flying-v-snowboard-women-s-2023-.jpg",
  shop_id: s1.id
)
p3 = Product.create(
  category: "Snowboards",
  name: "Yes Hel Yes Snowboard - Women's 2023",
  price: 550,
  rental_rate: 85,
  description: "When second place ain't good enough, reach for the Yes. Hel Yes. Snowboard. This powerful freerider is custom made for slashing fresh, straight lining chop, and exploring the unseen, with a Directional CamRock profile and UnderBite edge contouring for grip and control in any terrain. A poplar and paulownia wood core provides stability and power without weighing you down, while bamboo inserts deliver the response required to navigate through the gnarliest of lines. Hell, YES!",
  image: "https://images.evo.com/imgp/700/221802/914564/yes-hel-yes-snowboard-women-s-2023-.jpg",
  shop_id: s1.id
)
p4 = Product.create(
  category: "Skis",
  name: "Lib Tech UFO 95 Skis 2023",
  price: 650,
  rental_rate: 94,
  description: "Are you tired of reading marketing copy that claims a ski will help you turn the whole mountain into your own personal playground? Well you're in luck! The Lib Tech UFO 95 Skis are actually designed to turn the playground into your own personal mountain! Yeah, that's right. Bring these skis down to the jungle gym at your local public and try riding them down the slide, or maybe just attach them to your feet while you swing across the monkey bars. You'll be amazed at how quickly parents start throwing rocks and insults at you. Real rocks, just like from a mountain! And real insults, just like your friends hit you with while you're skiing the resort together! If you're lucky enough to live in a snowy climate, the kids might even join in with some snowballs! Disclaimer: please do not try this. Just ride the skis at the terrain park at a ski resort. They're great.",
  image: "https://images.evo.com/imgp/700/226836/913499/lib-tech-ufo-95-skis-2023-.jpg",
  shop_id: s2.id
)
p5 = Product.create(
  category: "Skis",
  name: "Volkl Revolt 84 Skis 2023",
  price: 600,
  rental_rate: 92,
  description: "The Pure Park Revolt for your spinning and jibbing pleasure, the Völkl Revolt 84 Skis are a symmetrical twin ride with tons of pop and a full sidewall minicap construction for durability and strength. With a Light Swingweight Woodcore for higher highs and plenty of camber for pop, the Revolt 84 is the stick to pull out when you're reaching for your best.",
  image: "https://images.evo.com/imgp/700/227093/915725/volkl-revolt-84-skis-2023-.jpg",
  shop_id: s9.id
)
p6 = Product.create(
  category: "Skis",
  name: "Lib Tech UFO 105 Skis 2023",
  price: 700,
  rental_rate: 99,
  description: "The Lib Tech UFO 105 Skis are all-mountain jib machines. If you're looking for one pair of sticks to do it all, and you prefer a more playful, freestyle ride, these are the ones for you. They're built for versatility, with enough guts for speedy off-piste descents, enough edge hold for ripping groomers, and enough pop for boosting side hits. They're a revelation in the bumps and trees, surprisingly capable in fresh snow, and more than happy to cap off the day with a few rips through the terrain park.",
  image: "https://images.evo.com/imgp/700/226837/913520/lib-tech-ufo-105-skis-2023-.jpg",
  shop_id: s1.id
)
p7 = Product.create(
  category: "Skis",
  name: "Line Skis Pandora 110 Skis - Women's 2023",
  price: 800,
  rental_rate: 104,
  description: "From big mountain descents to powdery tours, the Line Skis Pandora 110 Skis are designed to be with you on the best days of the season. These full on freeride sticks are built with Line's ultra lightweight THC construction, which makes them a breeze to bring up the skin track, and a hurricane to bring down the fall line. They're fast and directional when charging through chop, yet light and effortless to flick, bounce, and pivot through deep power and tight terrain.",
  image: "https://images.evo.com/imgp/700/221761/906624/line-skis-pandora-110-skis-women-s-2023-.jpg",
  shop_id: s4.id
)
p8 = Product.create(
  category: "Helmets",
  name: "Giro Orbit Spherical Helmet",
  price: 525,
  rental_rate: 33,
  description: "The Giro Orbit Spherical Helmet offers streamlined style, state of the art protection, and is virtually impenetrable to outside elements thanks to it's integrated goggle shield design. By combining ZEISS® Optics' VIVID lens technology into the articulated shield that can be pulled away when not needed, plus MIPS® Spherical technology for enhanced impact protection, the Giro Orbit Spherical Helmet lends ultimate confidence as you navigate big mountain terrain. The only question now is, what will you do with this newfound confidence?",
  image: "https://images.evo.com/imgp/700/179372/912361/giro-orbit-spherical-helmet-.jpg",
  shop_id: s3.id
)
p9 = Product.create(
  category: "Snowboards",
  name: "Yes Hel Yes Snowboard - Women's 2023",
  price: 550,
  rental_rate: 83,
  description: "When second place ain't good enough, reach for the Yes. Hel Yes. Snowboard. This powerful freerider is custom made for slashing fresh, straight lining chop, and exploring the unseen, with a Directional CamRock profile and UnderBite edge contouring for grip and control in any terrain. A poplar and paulownia wood core provides stability and power without weighing you down, while bamboo inserts deliver the response required to navigate through the gnarliest of lines. Hell, YES!",
  image: "https://images.evo.com/imgp/700/221802/914564/yes-hel-yes-snowboard-women-s-2023-.jpg",
  shop_id: s2.id
)
p10 = Product.create(
  category: "Helmets",
  name: "Smith Vantage MIPS Helmet - Women's",
  price: 270,
  rental_rate: 18,
  description: "Get a competitive advantage over the competition when riding with the Smith Vantage MIPS Helmet. Built expertly tough, it's hybrid SL shell and Aerocore™ construction features top-notch temperature regulation and enhances impact resistance, keeping your head comfortable and cool. With MIPS technology, a customizable fit, sleek styling and expert ventilation, what more do you need from a helmet? The Smith Vantage MIPS Helmet certainly has it all, and so can you.",
  image: "https://images.evo.com/imgp/700/119024/931264/smith-vantage-mips-helmet-women-s-.jpg",
  shop_id: s3.id
)
p11 = Product.create(
  category: "Boots",
  name: "Burton Photon Step On Snowboard Boots 2023",
  price: 460,
  rental_rate: 32,
  description: "We're still waiting on those hoverboards they promised us in the 80's, but the future has come to snowboarding and it goes by the name Burton Photon Step On Snowboard Boots. With a firm, responsive flex, the Photons cater to aggressive riders who like to stay in full control of their line, no matter where they point it. An Imprint™ 3 liner featuring Ultralon heat-moldable foam ensures these boots remain comfortable, warm and perfectly contoured to your feet, season after season. Burton Photons are synonymous with precision and control - these Step Ons are no different, they just add convenience to the mix!",
  image: "https://images.evo.com/imgp/700/200555/845046/burton-photon-step-on-snowboard-boots-2023-.jpg",
  shop_id: s1.id
)
p12 = Product.create(
  category: "Boots",
  name: "thirtytwo Jones MTB Boa Snowboard Boots 2023",
  price: 700,
  rental_rate: 39,
  description: "When you're dropping hairball lines in the middle of nowhere and using a split to get to the goods, you need a super burly boot with enough articulation to skin with. In other words, you need the thirtytwo Jones MTB Boa Snowboard Boots, designed and used by the guy who pretty much invented this type of riding. With a pedal-to-the-metal 10 flex, dual Boa closures, a full length gaiter to keep snow and ice at bay, and a flexible walk mode collar for the uphills, this purpose-built tool is as unique as it is practical.",
  image: "https://images.evo.com/imgp/700/225104/913020/thirtytwo-jones-mtb-boa-snowboard-boots-2023-.jpg",
  shop_id: s1.id
)
p13 = Product.create(
  category: "Goggles",
  name: "Anon M4S Toric Goggles",
  price: 320,
  rental_rate: 20,
  description: "Upgrade from standard definition to Blu-Ray with a little help from the cutting-edge Anon M4S Toric Goggles. These toric-lens goggles utilize Anon's very best optics with a super wide field of view and quick, easy magnetic lens change system. 100% helmet compatible with a bonus lens included to adapt to virtually any range of conditions, the Anon M4S Toric Goggles are the complete package for those looking to experience crystal clear vision on the mountain.",
  image: "https://images.evo.com/imgp/700/223971/935680/anon-m4s-toric-goggles-.jpg",
  shop_id: s1.id
)
p14 = Product.create(
  category: "Goggles",
  name: "Salomon Raidum Pro Goggles",
  price: 200,
  rental_rate: 12,
  description: "The Salomon Radium Pro Goggles pair the comfort and style of the original Radium model with the color-amplifying SIGMA™ lens technology. Experience crystal clear, enhanced vision from top to bottom with the Salomon Radium Pro Goggles.",
  image: "https://images.evo.com/imgp/700/200447/920621/salomon-radium-pro-goggles-.jpg",
  shop_id: s1.id
)
p15 = Product.create(
  category: "Gloves",
  name: "Hestra Wakayama 5-Finger Gloves",
  price: 160,
  rental_rate: 8,
  description: "Vintage style meets modern craftsmanship with the Hestra Wakayama 5-Finger Gloves. With a hearty impregnated cowhide outer material and a removable terry wool lining, these boutique-inspired gloves have the legacy construction and durability durable quality you demand from your go-to winter gloves.",
  image: "https://images.evo.com/imgp/700/224314/943806/hestra-wakayama-5-finger-gloves-.jpg",
  shop_id: s8.id
)
p16 = Product.create(
  category: "Gloves",
  name: "Hestra heated Mitt Liner",
  price: 320,
  rental_rate: 16,
  description: "Your Hestra mitts are awesome, but, your hands still get cold when the winds are really blowing and the snow is coming down in icy sheets. Get yourself the battery-powered Hestra Heated Mitt Liners to layer under your mitts and all your frozen-finger problems will fade away. Made with a durable ripstop fabric, Fiberfill insulation and brushed polyester lining, these glove ovens feature three heat levels so you can stay in control when the weather changes.",
  image: "https://images.evo.com/imgp/700/120700/531279/hestra-heated-mitt-liner-.jpg",
  shop_id: s4.id
)


puts 'seeding Reviews'
r1 = Review.create(
  user_id: u1.id,
  product_id: p1.id,
  comment: "This is the best board I have EVER shredded with. Feels like you're riding on pow even when it's gnar af!",
  rating: 4.5
)
r2 = Review.create(
  user_id: u1.id,
  product_id: p3.id,
  comment: "THREE WORDS - POW. POW. POW!",
  rating: 5.0
)
r3 = Review.create(
  user_id: u2.id,
  product_id: p3.id,
  comment: "I CAN'T EVEN!",
  rating: 4.5
)
r4 = Review.create(
  user_id: u1.id,
  product_id: p3.id,
  comment: "Just purchased this! Can't wait to use it this season!",
  rating: 2.5
)

puts 'seeding Reservations'
res1 = Reservation.create(
  user_id: u2.id,
  product_id: p1.id,
  shop_id: s1.id,
  date: "August 27th 2022",
  time: "07:00 AM"
)
res2 = Reservation.create(
  user_id: u1.id,
  product_id: p2.id,
  shop_id: s1.id,
  date: "August 30th 2022",
  time: "07:30 AM"
)
res3 = Reservation.create(
  user_id: u2.id,
  product_id: p2.id,
  shop_id: s1.id,
  date: "August 28th 2022",
  time: "09:00 AM"
)
res4 = Reservation.create(
  user_id: u2.id,
  product_id: p3.id,
  shop_id: s1.id,
  date: "August 29th 2022",
  time: "08:00 AM"
)

puts 'done seeding!'
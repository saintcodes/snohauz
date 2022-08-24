# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding User'
u1 = User.create(username: "saint1", password: "Apple12!", image: "https://media.istockphoto.com/videos/portrait-of-handsome-latino-african-man-video-id1008458450?s=640x640", seller: false)
u2 = User.create(username: "saint2", password: "Apple12!", image: "https://media.istockphoto.com/videos/portrait-of-handsome-latino-african-man-video-id1008458450?s=640x640", seller: false)

puts 'seeding Shops'
s1 = Shop.create(
  name: "SPORTIVA SKI OUTLET NYC",
  hours: "06:00 AM to 06:00 PM",
  description: "NYC's Go-To Ski/Snowboard Rental Shop",
  phone: "(646) 476-5056",
  image: "https://i0.wp.com/www.fearlesscaptivations.com/wp-content/uploads/2022/03/Alta-Ski-Area-Utah-Ski-Lift-Views.jpg?ssl=1"
)
s2 = Shop.create(
  name: "Burton New York City Flagship Store",
  hours: "12:00 PM to 06:00 PM",
  description: "Hip chain for snowboards, boots, apparel & outerwear for men, women & kids.",
  phone: "(212) 966-8070",
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/0zyFNYjCn5RrjiYzC7MFAQ/o.jpg"
)
s3 = Shop.create(
  name: "Bomber Ski",
  hours: "09:00 AM to 05:00 PM",
  description: "Flagship boutique of the luxury ski maker offering handcrafted skis, poles & other accessories",
  phone: "(212) 980-2442", 
  image: "https://cdn.shopify.com/s/files/1/0441/3672/6677/files/2_3825c051-7e0d-4ef9-93b9-c2b58316b97e.jpg?v=1649431787"
)
s4 = Shop.create(
  name: "Surefoot",
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
  name: "Mount Everest - Westwood",
  hours: "10:00 AM to 06:00 PM",
  description: "Snowboard Shop",
  phone: "(201) 664-2500", 
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/RBPSR-snOXP_pLISwTQ9PA/o.jpg"
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
  category: "Snowboards",
  name: "Yes Hel Yes Snowboard - Women's 2023",
  price: 550,
  rental_rate: 83,
  description: "When second place ain't good enough, reach for the Yes. Hel Yes. Snowboard. This powerful freerider is custom made for slashing fresh, straight lining chop, and exploring the unseen, with a Directional CamRock profile and UnderBite edge contouring for grip and control in any terrain. A poplar and paulownia wood core provides stability and power without weighing you down, while bamboo inserts deliver the response required to navigate through the gnarliest of lines. Hell, YES!",
  image: "https://images.evo.com/imgp/700/221802/914564/yes-hel-yes-snowboard-women-s-2023-.jpg",
  shop_id: s2.id
)
p5 = Product.create(
  category: "Snowboards",
  name: "Yes Hel Yes Snowboard - Women's 2023",
  price: 550,
  rental_rate: 83,
  description: "When second place ain't good enough, reach for the Yes. Hel Yes. Snowboard. This powerful freerider is custom made for slashing fresh, straight lining chop, and exploring the unseen, with a Directional CamRock profile and UnderBite edge contouring for grip and control in any terrain. A poplar and paulownia wood core provides stability and power without weighing you down, while bamboo inserts deliver the response required to navigate through the gnarliest of lines. Hell, YES!",
  image: "https://images.evo.com/imgp/700/221802/914564/yes-hel-yes-snowboard-women-s-2023-.jpg",
  shop_id: s3.id
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
  user_id: u1.id,
  product_id: p2.id,
  shop_id: s1.id,
  date: "August 28th 2022",
  time: "09:00 AM"
)
res4 = Reservation.create(
  user_id: u1.id,
  product_id: p3.id,
  shop_id: s1.id,
  date: "August 29th 2022",
  time: "08:00 AM"
)

puts 'done seeding!'
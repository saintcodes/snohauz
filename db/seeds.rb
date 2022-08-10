# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding User'
u1 = User.create(username: "saint1", password: "Apple12!", image: "https://media.istockphoto.com/videos/portrait-of-handsome-latino-african-man-video-id1008458450?s=640x640", seller: false)

puts 'seeding Shops'
s1 = Shop.create(
  name: "SPORTIVA SKI OUTLET NYC",
  hours: "06:00 AM to 06:00 PM",
  description: "NYC's Go-To Ski/Snowboard Rental Shop",
  phone: "(646) 476-5056"
)

puts 'seeding ShopAddresses'
sa1 = ShopAddress.create(
  street: "217 E 60th St Lower Level",
  city: "New York",
  state: "NY",
  zip_code: 10065,
  shop_id: s1.id
)

puts 'seeding Products'
p1 = Product.create(
  category: "Snowboards",
  name: "GNU Barrett Splitboard - Women's 2023",
  price: 999,
  description: "Once you're no longer constrained by boundaries and chairlifts, a whole new world of possibility opens up to you. And if you've spent your resort riding days looking for untracked powder and steep faces, the backcountry is so sweet you might never go back. The GNU Barrett Splitboard was hand built in the rugged Olympic mountains with just the goal of helping you explore this snowy new world of ultimate freedom. Designed to be featherweight on the way up while offering premium freeride performance on the way down, the Barret Split offers the best of both worlds. It's floaty in power, precise on edge, and easy to navigate through any situation you might encounter.",
  image: "https://images.evo.com/imgp/700/220843/899329/gnu-barrett-splitboard-women-s-2023-.jpg",
  shop_id: s1.id
)

puts 'seeding Reviews'
r1 = Review.create(
  user_id: u1.id,
  product_id: p1.id,
  comment: "This is the best board I have EVER boarded with. Feels like you're riding on pow even when it's gnar af!"
)

puts 'seeding Reservations'
res1 = Reservation.create(
  user_id: u1.id,
  product_id: p1.id,
  date: "August 27th 2022",
  time: "07:00 AM"
)

puts 'done seeding!'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Golfer.destroy_all
User.destroy_all
Wager.destroy_all

user1 = User.create(name: "John", email: "john@gmail.com", password_digest: "password", cash: 1000)
user2 = User.create(name: "Adam", email: "adam@gmail.com", password_digest: "password", cash: 50)
user3 = User.create(name: "Sarah", email: "sarah@gmail.com", password_digest: "password", cash: 100000)
user4 = User.create(name: "Charles", email: "charles@gmail.com", password_digest: "password", cash: 35000)

dustin = Golfer.create(name: "Dustin Johnson", image_url: "https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_30925.png", odds: 5, score: -3)
rory = Golfer.create(name: "Rory McElroy", image_url: "https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_28237.png", odds: 10, score: -2)
bubba = Golfer.create(name: "Bubba Watson", image_url: "https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_25804.png", odds: 20, score: 2)
justin = Golfer.create(name: "Justin Speith", image_url: "https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_34046.png", odds: 50, score: 3)

wager1 = Wager.create(user: user1, golfer: dustin, amount: 100)
wager2 = Wager.create(user: user2, golfer: rory, amount: 10)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# t.string "name"
# t.string "address"
# t.integer "number_of_courts"
# t.boolean "indoor"

require 'faker'

5.times do 
 Location.create(name:Faker::Sports::Basketball.team, address: Faker::Address.full_address, number_of_courts:rand(1..3), indoor:[true, false].sample )
end

5.times do
    List.create(location_id:rand(1..5))
end 

5.times do
    Player.create(name: Faker::Sports::Basketball.player, list_id:1)
end

5.times do
    Player.create(name: Faker::Sports::Basketball.player,list_id:2 )
end
5.times do
    Player.create(name: Faker::Sports::Basketball.player,list_id:3 )
end
5.times do
    Player.create(name: Faker::Sports::Basketball.player, list_id:4)
end
5.times do
    Player.create(name: Faker::Sports::Basketball.player, list_id:5 )
end

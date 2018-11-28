
User.destroy_all

u1 = User.create username: "Yianni", email: "yianni@heybrew.com.au", password: "chicken"
u2 = User.create username: "Linna", email: "linna@ga.co", password: "chicken"
u3 = User.create username: "Luke", email: "luke@ga.co", password: "chicken"
u4 = User.create username: "John", email: "john@domain.com", password: "chicken"
u5 = User.create username: "Gemma", email: "gemma@gmail.com", password: "chicken"

puts "created #{User.all.length} users"

Pub.destroy_all

p1 = Pub.create name: "O'Malley's Pub", location: "180 Addison Rd, Marrickville, NSW 2204", latitude: '-33.901441', longitude: '151.161391'
p2 = Pub.create name: "The Civic Hotel", location: "114 King St, Newtown, NSW 2042", latitude: '-33.900271', longitude: '151.178149'
p3 = Pub.create name: "Moe's Tavern", location: "68 Bay St, Ultimo, NSW 2007", latitude: '-33.883308', longitude: '151.194942'
p4 = Pub.create name: "Frankie's Pizza", location: "50 Hunter St, Sydney 2000", latitude: '-33.866237', longitude: '151.210044'

puts "created #{Pub.all.length} pubs"

Drink.destroy_all

d1 = Drink.create name: "Beer", pub: p1, emoji: '🍺', price: 10
d2 = Drink.create name: "Beer", pub: p2, emoji: '🍺', price: 10
d3 = Drink.create name: "Beer", pub: p3, emoji: '🍺', price: 10
d4 = Drink.create name: "Beer", pub: p4, emoji: '🍺', price: 10
d5 = Drink.create name: "Wine", pub: p1, emoji: '🍷', price: 10
d6 = Drink.create name: "Wine", pub: p2, emoji: '🍷', price: 10
d7 = Drink.create name: "Wine", pub: p3, emoji: '🍷', price: 10
d8 = Drink.create name: "Wine", pub: p4, emoji: '🍷', price: 10
d9 = Drink.create name: "Champagne", pub: p1, emoji: '🥂', price: 10
d10 = Drink.create name: "Champagne", pub: p2, emoji: '🥂', price: 10
d11 = Drink.create name: "Champagne", pub: p3, emoji: '🥂', price: 10

puts "created #{Drink.all.length} drinks"

Order.destroy_all

o1 = Order.create user: u1
o2 = Order.create user: u2
o3 = Order.create user: u3
o4 = Order.create user: u4
o5 = Order.create user: u5


o1.drinks << d1 << d5 << d9
o2.drinks << d2 << d6 << d10
o3.drinks << d3
o4.drinks << d7 << d11
o5.drinks << d4


d1.orders << o1
d2.orders << o2
d3.orders << o3
d4.orders << o5
d5.orders << o1
d6.orders << o2
d7.orders << o4
d9.orders << o1
d10.orders << o2
d11.orders << o4

puts "created #{Order.all.length} orders"

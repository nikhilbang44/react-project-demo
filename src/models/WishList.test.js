import { WishList, WishListItem } from "./WishList"

it("can create a instance of a model", () => {
    const item = WishListItem.create({
        "name": "Glass",
        "price": 28.73,
        "image": "https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg"
    })
    
    expect(item.price).toBe(28.73)
})

it('can create a wishlist', () => {
    const list = WishList.create({
        items: [
            {
              name: "glass",
              price: 28.73  
            }
        ]
    })

    expect(list.items.length).toBe(1)
    expect(list.items[0].price).toBe(28.73)
})

it('can add new items', () => {
    const list = WishList.create()
    list.add(
        WishListItem.create({
            name: "mobile",
            price: 10
        })
    )
    expect(list.items.length).toBe(1)
    expect(list.items[0].name).toBe("mobile")
    list.items[0].changeName("Book of saverkar")
    expect(list.items[0].name).toBe('Book of saverkar')
})


import { types } from "mobx-state-tree"

const data = {
    "name": "Glass",
    "price": 28.73,
    "image": "https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg"
}

export const WishListItem = types.model({
    name: types.string,
    price: types.number,
    images: ""
})
.actions(self => ({
    changeName(newName) {
        self.name = newName
    },
    changePrice(newPrice) {
        self.price = newPrice
    },
    changeImage(newImage) {
        self.image = newImage
    }
}))

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), [])
})
.actions(self => ({
    add(item){
        self.items.push(item)
    }
})) 
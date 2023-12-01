import { Users, Posts, CreditCards } from "./collections"
import { User, Post, CreditCard } from "./models"

const db = {
	users: new Users(),
	posts: new Posts(),
	cards: new CreditCards(),
}


export default db
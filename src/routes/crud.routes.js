import express from 'express'
import { create, getData, singleItem , update, deleteItem} from '../controllers/crud.controller.js'

const routes = express.Router()

routes.post("/add" , create)
routes.get("/allItems" , getData)
routes.get("/item/:id" , singleItem)
routes.put("/item/:id" , update)
routes.delete("/item/:id" , deleteItem)

export default routes ;
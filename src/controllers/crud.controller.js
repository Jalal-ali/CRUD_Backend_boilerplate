import mongoose from "mongoose";
import Crud from "../models/crud.model.js";
// create
const create = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required."
      });
    }

    const item = await Crud.create({
      title,
      description
    });

    res.status(201).json({
      message: "item added successfully!",
      data: item
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// get all items
const getData = async (req, res) => {
  const data = await Crud.find({})
  res.status(200).json({
    data: data
  })
}

// get single item
const singleItem = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }
  const item = await Crud.findById(id);
  if (!item) {
    res.status(404).json({
      message: "no item found!",
    });
    return;
  }
  res.status(200).json(item)
}
// update a item 
const update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Not a valid id" })
    }
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required."
      });
    }

    const item = await Crud.findByIdAndUpdate(id, { title, description })
    res.status(200).json({ message: "item updated successfully !" })
  }
  catch {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}

export { create, getData, singleItem, update }
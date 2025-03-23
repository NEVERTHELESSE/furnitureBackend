import { topCollectionModel } from "../database/models/topCollectionModel.js";

export async function topCollection(req, res) {
  let data = req.body.data;
  console.log(data);
  try {
    let saveData = await topCollectionModel.create(data);
    res.send(saveData);
  } catch (e) {
    console.log(e);
    res.send("error");
  }
}

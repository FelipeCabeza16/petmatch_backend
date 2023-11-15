/**
 * [JSON] Create document from JSON
 * @param {JSON} json - JSON object with keys and values of document
 */
import { document } from "../../models/init-models";

export const createDocumentFromJSON = async (json) => {
  try {
    const documentQuery = await document.create(json);
    return documentQuery;
  } catch (error) {
    // Throw error
    console.log(error);
    return null;
  }
}
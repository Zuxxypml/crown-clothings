import shopActionType from "./shopActionTypes";

export const updateCollections = (collectionsMap) => ({
  type: shopActionType.UPDATE_COLLECTION,
  payload: collectionsMap,
});

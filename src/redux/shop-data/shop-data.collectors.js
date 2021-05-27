import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopCollections = (state) => state.shopData;

export const shopCollections = createSelector(
  [selectShopCollections],
  (shopData) => shopData.collections
);

export const selectCollectionsForPreview = createSelector(
  [shopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollections = memoize((collectionUrlParams) =>
  createSelector([shopCollections], (collections) =>
    collections ? collections[collectionUrlParams] : null
  )
);

export const selectIsCollectionsFetching = createSelector(
  [selectShopCollections],
  (shopData) => shopData.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShopCollections],
  (shopData) => !!shopData.collections
);

export const checkItemAnime = (id: number, array: any) => {
  if (!id) {
    return false;
  }

  const searchID = array.filter((item: any) => {
    const ids = item.collection.map((child: any) => child.id);
    return ids.includes(id);
  });

  if (searchID.length > 0) {
    return true;
  } else {
    return false;
  }
};

// export const checkAnimeOnCollection = (id: number, array: any) => {
//   if (!id) {
//     return false;
//   }

//   const searchID = array.filter((item: any) => {
//     const ids = item.collection.map((child: any) => child.id);
//     return ids.includes(id);
//   });

//   if (searchID.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

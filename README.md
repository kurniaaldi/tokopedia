# Open Project
```
https://tokopedia-one.vercel.app/
```

# Running unit test 

*unit tests are created to validate the output of function utils*

npm
```
npm run test
```

yarn
```
yarn test
```

# Running project for android
```
npm run start
```


1. Anime List page
    * - [x] Anime list : As a user, I can see 10 anime on initial page load.
       * - [x]  For each anime, show info at least the anime title and anime cover/banner.
       * - [x] Each anime item are clickable, and will redirect to Anime Detail page when clicked.
       * - [x] Anime List page should have pagination functionality.
   
    * - [x] Bulk add to the collection : Bulk add to the collection.
       * - [x] User can select multiple anime item/card to be added into a collection via Modal/PopUp form.
       * - [x] If user want to bulk add anime to collection but there is no collection yet, user can set collection name as new collection.
       * - [x] Collection Name must unique.
       * - [x] Collection Name doesn’t have special Char.
 
2. Anime Detail page.
    * - [x] Anime detail info : As a user, I can anime info on the page.
       * - [x] Show anime cover/banner.
       * - [x] Show anime title.
       * - [x] Show other anime details (description, number of episodes, genres, rating, etc). Feel free to add more.

    * - [x] Add to the collection : As a user, I can the anime to the collection.
       * - [x] Show all collections at once on initial load page.
       * - [x] Each collection item should show collection name.
       * - [x] Each collection item should show anime cover/banner from the firstly added anime. If no anime added yet, use default image as cover/banner. 
       * - [x] User can click the collection item, and will redirect to Collection Detail page.
       * - [x] The collections in this list should be persist even after a full page reload.
    
    * - [x] Collection info : As a user, I can see if the anime already added to collection or not.
       * - [x] User can see list of collection names where the anime already added.
       * - [x] User can click the collection name, and will redirect to Collection Detail page

3. Collection List page.
     * - [x] Collection list info : As a user, I can see list of collection that already added
       * - [x] Show all collections at once on initial load page
       * - [x] Each collection item should show collection name
       * - [x] Each collection item should show anime cover/banner from the firstly added anime. If no anime added yet, use default image as cover/banner.
       * - [x] User can click the collection item, and will redirect to Collection Detail page.
       * - [x] The collections in this list should be persist even after a full page reload.     

    * - [x] Remove Collection : As a user, I can remove collection from Collection List page.
       * - [x] Show “Remove” button on each collection item/card.
       * - [x] Add confirmation modal/popup when user click Remove button, with collection name info.
       * - [x] After remove finished, collection list should be updated without reloading the page.

    * - [x] Add Collection : As a user, I can add collection from Collection List page.
       * - [x] Show “Add a Collection” button on top of Collection List page.
       * - [x] When button clicked, show modal/popup to fill collection name (collection name should be unique) and submit as new collection.
       * - [x] After submit finished, new collection should automatically added to the list without reloading Collection List page.
       * - [x] Collection Name must unique.
       * - [x] Collection Name doesn’t have special Char

    * - [x] Edit Collection : As a user, I can edit collection name from Collection List page.
       * - [x] Show “Edit” button on each collection item/card.
       * - [x] Add modal/popup when user click Edit button, with collection name input field, and submit button.
       * - [x] After edit finished, collection list should be updated without reloading the page.
       * - [x] Collection Name doesn’t have special Char
       * - [x] Collection Name must unique

4. Collection Detail page.
    * - [x] Collection detail info : As a user, I can see list of anime that already added to the collection.
       * - [x] Show collection name on top of the Collection Detail page.
       * - [x] Show all added anime at once on initial load page.
       * - [x] Each anime item/card should show anime name & anime cover/banner
       * - [x] User can click the anime item, and will redirect to Anime Detail page.

    * - [x] Remove anime from collection : As a user, I can remove anime from Collection Detail page.
       * - [x] Show “Remove” button on each anime item/card.
       * - [x] Add confirmation modal/popup when user click Remove button, with anime title info
       * - [x] After remove finished, anime list should be updated without reloading the page.

    * - [x] Edit Collection Name : As a user, I can edit collection name from Collection Detail page.
       * - [x] Show “Edit” button on top of Collection Detail page
       * - [x] Add modal/popup when user click Edit button, with collection name input field, and submit button.
       * - [x] After edit finished, collection detail page should be updated without reloading the page.
       * - [x] Collection Name must unique
       * - [x] Collection Name doesn’t have special Char.
   
   
   
   
   
   
   
   
   
   
   
      

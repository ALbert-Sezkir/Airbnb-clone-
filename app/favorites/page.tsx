import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUsers";
import getFavoriteListings from "../actions/getFavoritesListings";
import FavoritesClient from "./FavoritesClient";
import { Suspense } from "react";


const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if(listings.length === 0) {

        return (
            
            <ClientOnly>
            <EmptyState 
            title='No favorites found'
            subtitle='Looks like you have no favorites listings'
            />
        </ClientOnly>
    )
}


return(
    <ClientOnly> 
        <FavoritesClient
        listings={listings}
        currentUser={currentUser}
        />    
    </ClientOnly>
)


}

export default ListingPage;


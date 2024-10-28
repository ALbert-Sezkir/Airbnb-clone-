import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUsers";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";
import { Suspense } from "react";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();
    
    if (!currentUser) {
        return (
            <ClientOnly>

        <EmptyState
            title="Unauthorized"
            subtitle="Please login to view your reservations"
            />
            </ClientOnly>
        );
    }
    
    const reservations = await getReservations({
        authorId: currentUser.id,
    });
    
    if (reservations.length === 0) {
        return (
            <ClientOnly>
                
                <EmptyState 
                title="No reservations found" 
                subtitle="You have no reservations to show" />;
            </ClientOnly>
        )
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
          <ReservationsClient reservations={reservations} currentUser={currentUser} />
        </Suspense>
      );
    
    // return <ClientOnly>
    //     <ReservationsClient 
    //     reservations={reservations} 
    //     currentUser={currentUser} 
    //     />
    // </ClientOnly>;
    }

    export default ReservationsPage;


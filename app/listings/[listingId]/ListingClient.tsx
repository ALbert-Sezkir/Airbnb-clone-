import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";

interface ListingClientProps {
    reservation?: Reservation[];
    listing: SafeListing & { 
        user: SafeUser
    }
}


const ListingClient = () => {
return (
    <div>Listing Client</div>
)

}

export default ListingClient;
import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUsers";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";
import { Suspense } from "react";


const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="You have no properties"
      />
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </Suspense>
  );

  // return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default PropertiesPage;
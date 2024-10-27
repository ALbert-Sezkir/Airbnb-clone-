'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import useSearchModal from '../../hooks/useSearchModal';
import Modal from './Modal';
import { Range } from 'react-date-range';

enum STEPS {
    LOCATION = 0, 
    DATE = 1,
    INFO = 2
}


const SearchModal = () => {
    const router = useRouter();
    const params = useSearchParams();

    const searchModal = useSearchModal();

    const [step, setStep] = useState();
    const  [guestCount, setGuestCount] = useState(1);
    const [roomCount, setRoomCount] = useState(1);
    const [bathroomCount, setBathroomCount] = useState(1);
    const [dateRange, setDateRange] = useState<Range>();

    return (

        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={searchModal.onOpen}
            title="Filters"
            actionLabel="Search"
            />

    )

}

export default SearchModal;
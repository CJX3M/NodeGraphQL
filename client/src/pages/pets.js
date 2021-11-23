import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import PetList from '../components/PetList';
import NewPetModal from '../components/modals/NewPetModal';
import Loader from '../components/loader'

const ALL_PETS = gql`
    {
        pets {
            id
            name
            breed
            type            
        }
    }
`;

const NEW_PET = gql`

`;

export default function Pets() {
    const [modal, setModal] = useState(false);
    const { data, loading, error } = useQuery(ALL_PETS)
    
    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <p>{error}</p>
    }

    const onSubmit = input => {
        setModal(false);
    }

    if (modal) {
        return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
    }

    return (
        <div className = "page pets-page">
            <section>
                <div className="row betwee-xs middle-xs">
                    <div className="row-xs-10">
                        <h1>Pets</h1>
                    </div>

                    <div className="col-xs-2">
                        <button onClick={() => setModal(true)}>New pet</button>
                    </div>
                </div>
            </section>
            <section>
                <PetList pets={data.pets} />
            </section>
        </div>
    )
}
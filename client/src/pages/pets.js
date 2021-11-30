import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import PetList from '../components/PetList';
import NewPetModal from '../components/modals/NewPetModal';
import Loader from '../components/loader'

const PETS_FIELDS = gql`
    fragment PetsFields on Pet {
        id
        name
        breed
        type
    }    
`;

const ALL_PETS = gql`
    {
        pets {...PetsFields}
    }
    ${PETS_FIELDS}
`;

const NEW_PET = gql`
    mutation createPet($input: NewPetInput!) {
        addPet(input: $input) {...PetsFields}
    }
    ${PETS_FIELDS}
`;


export default function Pets() {
    const [modal, setModal] = useState(false);
    const { data, loading, error } = useQuery(ALL_PETS)
    const [newPet, pet] = useMutation(NEW_PET, {
        update(cache, { data: { addPet } }) {
            const data = cache.readQuery({ query: ALL_PETS });
            cache.writeQuery({
                query: ALL_PETS,
                data: {pets: [addPet, ...data.pets]}
            })
        }
    });
    
    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <p>{error}</p>
    }

    const onSubmit = input => {

        setModal(false);
        newPet({
            variables: { input }
        });
    }

    return (
        <div>
            <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} show={modal} />
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
        </div>
    )
}